import { Metadata } from 'next'

import BlogCard from '@/app/(main)/blog/_components/blog-card'
import BlogHero from '@/app/(main)/blog/_components/blog-hero'
import { Cta } from '@/components/blocks/cta'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { PaginationComponent } from '@/components/shared/pagination'
import { ARTICLES_PER_PAGE } from '@/constants'
import { api } from '@/lib/api'

export const revalidate = 3600

interface BlogPageProps {
    searchParams: Promise<{ page?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
    const { page: rawPage } = await searchParams
    const page = Number(rawPage) || 1
    const limit = ARTICLES_PER_PAGE + 1
    const start = (page - 1) * limit

    const { posts_connection } = await api.GetBlogPageArticles({ limit, start })
    const posts = posts_connection?.nodes ?? []
    const pageInfo = posts_connection?.pageInfo

    if (posts.length === 0) return null

    const [hero, ...rest] = posts

    const totalPages = pageInfo?.pageCount ?? 1

    return (
        <>
            <Breadcrumbs activePage="Blog" />
            <BlogHero post={hero} title="Blog" />
            <section className="relative py-16 lg:py-[90px]">
                <div className="container mx-auto flex flex-col gap-12">
                    <div className="grid gap-6 lg:grid-cols-3 lg:gap-y-12">
                        {rest.map((post) => (
                            <BlogCard key={post.documentId} post={post} />
                        ))}
                    </div>
                    {totalPages > 1 && <PaginationComponent page={page} totalPages={totalPages} />}
                </div>
            </section>
            <Cta backgroundColor="primary-50" />
        </>
    )
}

export async function generateMetadata({ searchParams }: BlogPageProps): Promise<Metadata> {
    const { page } = await searchParams
    return {
        title: `Blog - page ${page ?? '1'}`,
    }
}
