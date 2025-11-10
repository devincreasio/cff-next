import { essentialsTable, featuresTable, supportTable } from '@/data/pricing'

import { PricingRow } from './pricing-row'

export default function PricingTable() {
    return (
        <section className="mx-auto max-w-[880px] px-4 py-14">
            <table className="w-full divide-y divide-neutral-300">
                <thead>
                    <tr className="font-semibold">
                        <td className="pb-6">Essentials</td>
                        <td className="pb-6 text-center">Standard</td>
                        <td className="pb-6 text-center">Pro</td>
                    </tr>
                </thead>
                <tbody className="divide-y divide-neutral-300">
                    {essentialsTable.map((item, index) => (
                        <PricingRow item={item} key={index} />
                    ))}
                    <tr className="font-semibold">
                        <td className="pt-9 pb-6">Features</td>
                    </tr>
                    {featuresTable.map((item, index) => (
                        <PricingRow item={item} key={index} />
                    ))}
                    <tr className="font-semibold">
                        <td className="pt-9 pb-6">Support</td>
                    </tr>
                    {supportTable.map((item, index) => (
                        <PricingRow item={item} key={index} />
                    ))}
                </tbody>
            </table>
        </section>
    )
}
