import { BlogListLoadMore } from '@/app/(main)/blog/_components/blog-list-load-more'
import { Cta } from '@/components/blocks/cta'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { generateSeo } from '@/components/shared/generate-seo'
import { api } from '@/lib/api'

import { BlogHero } from '../blog/_components/blog-hero'

export const revalidate = 3600

export function generateMetadata() {
    return generateSeo({ pathname: '/whats-new', seo: { MetaDescription: 'What’s New', MetaTitle: 'What’s New' } })
}

export default async function WhatsNewPage() {
    const { posts } = await api.GetWhatsNewArticles()
    if (posts.length === 0) return null

    const [hero, ...rest] = posts
    return (
        <>
            <Breadcrumbs activePage="What’s New" />
            <BlogHero post={hero} title="What's New" />
            <BlogListLoadMore data={rest} />
            <Cta backgroundColor="primary-50" />
        </>
    )
}
