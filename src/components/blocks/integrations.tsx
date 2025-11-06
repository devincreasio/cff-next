import Image from 'next/image'

export function Integrations() {
    return (
        <section
            className={`container mx-auto flex flex-col items-center justify-center gap-5 py-10 text-center lg:py-16`}
        >
            <h2 className="text-2xl leading-[140%] font-semibold text-balance lg:text-[40px]">
                Integrates seamlessly with QuickBooks, Xero, Sage Intacct, Zoho Books and FreshBooks
            </h2>
            <p className="text-balance text-text-light">
                Connect your accounting software with the click of a button and get your forecast instantly. No tedious
                import processes or manual data entry - your accounting data is automatically pulled from your
                accounting software and is always up-to-date.
            </p>
            <div className="flex flex-wrap items-center justify-around gap-8 py-5 md:gap-[60px]">
                <Image
                    alt="Xero"
                    height={80}
                    src="https://res.cloudinary.com/cashflowfrog-com/image/upload/v1747831325/strapi/Xero_Outline_d2ddfa0bb3.svg"
                    width={80}
                />
                <Image
                    alt="QuickBooks"
                    height={64}
                    src="https://res.cloudinary.com/cashflowfrog-com/image/upload/v1759930010/strapi/qb_logo_preferred_and_alternate_photo_2_d4249a7018.png"
                    width={176}
                />
                <Image
                    alt="Sage"
                    height={64}
                    src="https://res.cloudinary.com/cashflowfrog-com/image/upload/v1759930010/strapi/Auto_Layout_Vertical_1cdab4dbdb.png"
                    width={100}
                />
                <Image
                    alt="Zoho"
                    height={54}
                    src="https://res.cloudinary.com/cashflowfrog-com/image/upload/v1759930010/strapi/zoho_books_seeklogo_1_40da41070a.png"
                    width={157}
                />
                <Image
                    alt="FreshBooks"
                    height={54}
                    src="https://res.cloudinary.com/cashflowfrog-com/image/upload/v1759930010/strapi/Fresh_Books_logo_2020_1_65bc0ac6d5.png"
                    width={220}
                />
            </div>
        </section>
    )
}
