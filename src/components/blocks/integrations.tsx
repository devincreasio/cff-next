import Image from 'next/image'

import { CLOUDINARY_URL } from '@/constants'
import { cn } from '@/lib/utils'

interface IntegrationsProps {
    backgroundColor?: 'primary-50' | 'white'
}

export function Integrations({ backgroundColor = 'white' }: IntegrationsProps) {
    return (
        <section
            className={cn('py-10 lg:py-16', {
                'bg-primary-50': backgroundColor === 'primary-50',
                'bg-white': backgroundColor === 'white' || !backgroundColor,
            })}
        >
            <div className="container mx-auto flex flex-col items-center justify-center gap-5 text-center">
                <h2 className="text-2xl font-semibold text-balance lg:text-3.5xl">
                    Integrates seamlessly with QuickBooks, Xero, Sage Intacct, Zoho Books and FreshBooks
                </h2>
                <p className="text-balance text-neutral-500">
                    Connect your accounting software with the click of a button and get your forecast instantly. No
                    tedious import processes or manual data entry - your accounting data is automatically pulled from
                    your accounting software and is always up-to-date.
                </p>
                <div className="flex flex-wrap items-center justify-around gap-8 py-5 md:gap-[60px]">
                    <Image
                        alt="Xero"
                        height={80}
                        src={`${CLOUDINARY_URL}/v1747831325/strapi/Xero_Outline_d2ddfa0bb3.svg`}
                        width={80}
                    />
                    <Image
                        alt="QuickBooks"
                        height={64}
                        src={`${CLOUDINARY_URL}/v1759930010/strapi/qb_logo_preferred_and_alternate_photo_2_d4249a7018.png`}
                        width={176}
                    />
                    <Image
                        alt="Sage"
                        height={64}
                        src={`${CLOUDINARY_URL}/v1759930010/strapi/Auto_Layout_Vertical_1cdab4dbdb.png`}
                        width={100}
                    />
                    <Image
                        alt="Zoho"
                        height={54}
                        src={`${CLOUDINARY_URL}/v1759930010/strapi/zoho_books_seeklogo_1_40da41070a.png`}
                        width={157}
                    />
                    <Image
                        alt="FreshBooks"
                        height={54}
                        src={`${CLOUDINARY_URL}/v1759930010/strapi/Fresh_Books_logo_2020_1_65bc0ac6d5.png`}
                        width={220}
                    />
                </div>
            </div>
        </section>
    )
}
