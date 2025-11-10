interface GetPriceParams {
    annualRevenue: number
    companiesRange: number
    onlyPro?: boolean
    plan: 'pro' | 'standard'
    selectedPaymentPeriod: 0 | 1 | 2
}

const priceMatrix = {
    standard: {
        0: [29, 39, 49, 59, 79, 99], // monthly
        1: [23, 31, 39, 47, 63, 79], // yearly
        2: [19, 25, 32, 38, 51, 64], // 2 years
    },

    pro: {
        0: [39, 49, 69, 79, 99, 119], // monthly
        1: [31, 39, 55, 63, 79, 95], // yearly
        2: [25, 32, 45, 51, 64, 77], // 2 years
    },

    companies: {
        // <200k, >200k, >500k, >1M, >3M, >10M
        0: [98, 179, 229, 289, 389], // monthly
        1: [78, 143, 183, 231, 311], // yearly
        2: [64, 116, 149, 188, 253], // 2 years
    },
}

const revenueRanges = [200_000, 500_000, 1_000_000, 3_000_000, 10_000_000]
const companyRanges = [3, 10, 15, 25, 50]

export function getPrice({
    annualRevenue,
    companiesRange,
    onlyPro,
    plan,
    selectedPaymentPeriod,
}: GetPriceParams): number | undefined {
    if (plan === 'pro' && onlyPro) {
        const i = getRangeIndex(companiesRange, companyRanges)
        return priceMatrix.companies[selectedPaymentPeriod][i] ?? 0
    }

    const i = getRangeIndex(annualRevenue, revenueRanges)
    return plan === 'pro'
        ? priceMatrix.pro[selectedPaymentPeriod][i] ?? 0
        : priceMatrix.standard[selectedPaymentPeriod][i] ?? 0
}

function getRangeIndex(value: number, ranges: number[]) {
    for (let i = 0; i < ranges.length; i++) if (value <= ranges[i]) return i
    return ranges.length
}
