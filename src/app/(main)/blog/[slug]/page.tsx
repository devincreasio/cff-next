import { notFound } from 'next/navigation'
import { Article, CreativeWorkSeries, WithContext } from 'schema-dts'

import { Cta } from '@/components/blocks/cta'
import { Faq } from '@/components/blocks/faq'
import { PostContent } from '@/components/blog/post-content'
import { PostHero } from '@/components/blog/post-hero'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { GenerateJsonLd } from '@/components/shared/generate-jsonld'
import { generateSeo } from '@/components/shared/generate-seo'
import { api } from '@/lib/api'
import { formatDate } from '@/lib/utils'

import { BlogCard } from '../_components/blog-card'
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
            <PostHero
                authorImageAlt={post.author?.ImageFile?.alternativeText ?? ''}
                authorImageUrl={post.author?.ImageFile?.url ?? ''}
                authorName={post.author?.Name ?? 'Cashflow Frog'}
                publishedAt={formatDate(post.publishedAt)}
                title={post.Title}
            />
            <PostContent data={post} />
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
