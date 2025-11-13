import { SITE_URL } from '@/constants'
import { api } from '@/lib/api'
import type { MetadataRoute } from 'next'

const EXCLUDED_RAW = [
    '/lp/*',
    '/terms-conditions/',
    '/blog/businesses-with-the-best-and-worst-cash-flow/',
    '/blog/cash-flow-forecasting-software-buyer-s-guide/',
    '/blog/cash-flow-management-tips-for-ecommerce-businesses/',
    '/blog/best-types-of-businesses-for-cash-flow/',
    '/blog/cash-flow-management-tips/',
    '/blog/cash-flow-graphs-and-charts-every-business-should-use/',
] as const

const EXCLUDED_PREFIXES = ['/lp/'] as const
const EXCLUDED_PATHS = new Set(EXCLUDED_RAW.filter((p) => !p.endsWith('*')))

function isExcluded(path: string) {
    if (EXCLUDED_PATHS.has(path as (typeof EXCLUDED_RAW)[number])) return true
    return EXCLUDED_PREFIXES.some((prefix) => path.startsWith(prefix))
}

function addCollectionSection(
    out: MetadataRoute.Sitemap,
    items: ({
        Slug?: string | null
        updatedAt?: string | null
        createdAt?: string | null
    } | null)[],
    basePath: string,
    changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency'],
    priority: number,
) {
    for (const item of items) {
        if (!item?.Slug) continue

        const path = `${basePath}${item.Slug}/`
        if (isExcluded(path)) continue

        out.push({
            url: `${SITE_URL}${path}`,
            lastModified: new Date(item.updatedAt ?? item.createdAt ?? ''),
            changeFrequency,
            priority,
        })
    }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticPages = [
        'accountants-bookkeepers',
        'blog',
        'contact',
        'features',
        'glossary',
        'integrations',
        'pricing',
        'whats-new',
    ]

    const [{ posts }, { businesses }, { features }, { glossaries }, { integrations }, { landings }, { legalPages }] =
        await Promise.all([
            api.GetBlogPageArticlesSlugs(),
            api.GetBusinessTemplateSlugs(),
            api.GetFeaturesTemplateSlugs(),
            api.GetGlossaryTemplateSlugs(),
            api.GetIntegrationTemplateSlugs(),
            api.GetLandingPageTemplateSlugs(),
            api.GetLegalPageTemplateSlugs(),
        ])

    const sitemap: MetadataRoute.Sitemap = []

    /* Root page */
    sitemap.push({
        url: `${SITE_URL}/`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
    })

    /* Static pages */
    for (const slug of staticPages) {
        const path = `/${slug}/`
        if (isExcluded(path)) continue

        sitemap.push({
            url: `${SITE_URL}${path}`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        })
    }

    /* Dynamic collections */
    addCollectionSection(sitemap, posts, '/blog/', 'monthly', 0.7)
    addCollectionSection(sitemap, businesses, '/business/', 'yearly', 0.6)
    addCollectionSection(sitemap, features, '/features/', 'yearly', 0.6)
    addCollectionSection(sitemap, glossaries, '/glossary/', 'yearly', 0.6)
    addCollectionSection(sitemap, integrations, '/integrations/', 'yearly', 0.6)
    addCollectionSection(sitemap, landings, '/lp/', 'yearly', 0.5)
    addCollectionSection(sitemap, legalPages, '/legal/', 'yearly', 0.4)

    return sitemap
}
