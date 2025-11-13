import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Article, CreativeWorkSeries, WithContext } from 'schema-dts'

import { BlogContent } from '@/app/(main)/blog/_components/blog-content'
import { Cta } from '@/components/blocks/cta'
import { Faq } from '@/components/blocks/faq'
import { BlurCircle } from '@/components/shared/blur-circle'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { GenerateJsonLd } from '@/components/shared/generate-jsonld'
import { generateSeo } from '@/components/shared/generate-seo'
import { api } from '@/lib/api'
import { formatDate } from '@/lib/utils'

import BlogCard from '../_components/blog-card'
import { BlogRating } from '../_components/blog-rating'

const getData = (slug: string) => api.GetPostPage({ slug })

export const revalidate = 3600

interface BlogPageProps {
    params: Promise<{ slug: string }>
}

export default async function BlogPage({ params }: BlogPageProps) {
    const { slug } = await params

    const { posts, relatedPosts } = await getData(slug)

    const [post] = posts

    if (!post) {
        notFound()
    }

    const articleJsonLdSchema: WithContext<Article> = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        author: {
            '@type': 'Person',
            name: post.author?.Name ?? 'Cashflow Frog',
            url: 'https://www.linkedin.com/in/arielgottfeld',
        },
        dateModified: post.updatedAt ?? '',
        datePublished: post.publishedAt ?? '',
        description: `${post.Content?.slice(0, 200)}...`,
        headline: post.Title,
        image: post.ImageFile?.url,
        mainEntityOfPage: {
            '@id': `https://cashflowfrog.com/blog/${post.Slug}`,
            '@type': 'WebPage',
        },
        publisher: {
            '@type': 'Organization',
            logo: {
                '@type': 'ImageObject',
                url: post.author?.ImageFile?.url,
            },
            name: post.author?.Name ?? 'Cashflow Frog',
        },
    }

    const creativeWorkSeriesSchema: WithContext<CreativeWorkSeries> = {
        '@context': 'https://schema.org',
        '@type': 'CreativeWorkSeries',
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: 20,
        },
        name: post.Title,
    }

    return (
        <>
            <script
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(articleJsonLdSchema).replaceAll('<', '\\u003c'),
                }}
                id="jsonld-article"
                type="application/ld+json"
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(creativeWorkSeriesSchema).replaceAll('<', '\\u003c'),
                }}
                id="jsonld-creative-work-series"
                type="application/ld+json"
            />
            <GenerateJsonLd faqData={post.Faq} seo={post.Seo} showJsonLdWebpage={false} />
            <Breadcrumbs activePage={post.Title} pages={[{ href: '/blog', name: 'Blog' }]} />
            <section className={`relative pt-12 pb-6`}>
                <BlurCircle color="blue" left={-378} size={591} top={-70} />
                <div className="relative z-10 container mx-auto flex flex-col items-center justify-center text-center">
                    <span className="mb-0.5 leading-[140%]">{formatDate(post.publishedAt)}</span>
                    <h1 className="mb-5 text-[30px] leading-[100%] font-bold lg:text-[48px] lg:font-semibold">
                        {post.Title}
                    </h1>
                    <div className="flex items-center gap-4">
                        {post.author?.ImageFile?.url && (
                            <Image
                                alt={post.author.ImageFile.alternativeText ?? 'Author Image'}
                                className="size-10 overflow-hidden rounded-full"
                                height={40}
                                src={post.author.ImageFile.url}
                                width={40}
                            />
                        )}
                        <span className="leading-[140%]">{post.author?.Name}</span>
                    </div>
                </div>
            </section>
            <BlogContent data={post} />
            <BlogRating data={post} />
            <section className="relative py-16 lg:py-[90px]">
                <div className="relative container mx-auto grid gap-6 lg:grid-cols-3 lg:gap-y-12">
                    {relatedPosts.map((relatedPost) => (
                        <BlogCard key={relatedPost?.documentId} post={relatedPost} />
                    ))}
                </div>
            </section>
            <Faq data={post.Faq ?? []} />
            <Cta backgroundColor="primary-50" />
        </>
    )
}

export async function generateMetadata({ params }: BlogPageProps) {
    const { slug } = await params
    const { posts } = await getData(slug)
    const [post] = posts

    return generateSeo({ pathname: `/blog/${slug}`, seo: post?.Seo })
}
