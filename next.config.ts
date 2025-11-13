import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: '**',
            },
        ],
    },
    trailingSlash: true,
    redirects: () => {
        return [
            {
                source: '/en/',
                destination: '/',
                permanent: true,
            },
            {
                source: '/index.html',
                destination: 'https://cff.vercel.app',
                permanent: true,
            },
            {
                source: '/features/forecasts/',
                destination: '/features/forecast/',
                permanent: true,
            },
            {
                source: '/forecast/',
                destination: '/features/forecast/',
                permanent: true,
            },
            {
                source: '/features/account-mapping/',
                destination: '/',
                permanent: true,
            },
            {
                source: '/features/reports-editor/',
                destination: '/features/branded-reports/',
                permanent: true,
            },
            {
                source: '/lp/accountants-bookkeepers-grow-your-practice/',
                destination: '/',
                permanent: true,
            },
            {
                source: '/blog/add-multiple-projections-in-bulk-%F0%9F%94%AD%F0%9F%93%84/',
                destination: '/blog/add-multiple-projections-in-bulk/',
                permanent: true,
            },
            {
                source: '/blog/10-cash-management-trends-for-2023/',
                destination: '/blog/10-cash-management-trends/',
                permanent: true,
            },
            {
                source: '/blog/best-types-of-businesses-for-cash-flow-in-2022/',
                destination: '/blog/best-types-of-businesses-for-cash-flow/',
                permanent: true,
            },
            {
                source: '/blog/best-quickbooks-online-apps-for-2021/',
                destination: '/blog/best-quickbooks-online-apps/',
                permanent: true,
            },
            {
                source: '/blog/best-types-of-businesses-for-cash-flow/',
                destination: '/blog/10-great-business-ideas-for-high-cash-flow/ ',
                permanent: true,
            },
            {
                source: '/blog/businesses-with-the-best-and-worst-cash-flow/',
                destination: '/blog/10-great-business-ideas-for-high-cash-flow/ ',
                permanent: true,
            },
            {
                source: '/blog/cash-flow-forecasting-software-buyer-s-guide/',
                destination: '/blog/best-software-for-forecasting-cash-flow/',
                permanent: true,
            },
            {
                source: '/blog/cash-flow-graphs-and-charts-every-business-should-use/',
                destination: '/blog/cash-flow-graphs-every-business-should-use/',
                permanent: true,
            },
            {
                source: '/blog/cash-flow-management-tips-for-ecommerce-businesses/',
                destination: '/blog/cash-flow-management-for-e-commerce-businesses/',
                permanent: true,
            },
            {
                source: '/blog/cash-flow-management-tips/',
                destination: '/blog/effective-strategies-for-improving-cash-flow-in-small-businesses/',
                permanent: true,
            },
            {
                source: '/blog/the-advantages-of-cash-flow-forecasting/',
                destination: '/blog/best-benefits-of-a-precise-cash-flow-forecast/',
                permanent: true,
            },
            {
                source: '/blog/the-importance-of-cash-flow-for-a-start-up-business/',
                destination: '/blog/how-to-create-a-cash-flow-statement-for-a-startup/',
                permanent: true,
            },
            {
                source: '/blog/top-benefits-of-creating-a-cash-flow-forecast/',
                destination: '/blog/best-benefits-of-a-precise-cash-flow-forecast/',
                permanent: true,
            },
        ]
    },
}

export default nextConfig
