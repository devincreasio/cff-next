import Image from 'next/image'
import Link from 'next/link'

interface IntegrationsCardsProps {
    description?: null | string
    integrations: ({
        Description?: null | string
        IconFile?: {
            alternativeText?: null | string
            url?: null | string
        } | null
        Name?: null | string
        Slug?: null | string
    } | null)[]
    title?: null | string
}

export default function IntegrationsCards({ description, integrations, title }: IntegrationsCardsProps) {
    return (
        <section className="container mx-auto flex flex-col gap-5 py-10 lg:py-16">
            <div className="flex flex-col gap-3 text-center lg:gap-5">
                {title && (
                    <h2 className="mx-auto max-w-[800px] text-[28px] leading-[120%] font-semibold lg:text-[40px]">
                        {title}
                    </h2>
                )}
                {description && <p className="text-neutral-500 lg:text-lg">{description}</p>}
            </div>
            <div className="mt-[60px] grid grid-cols-1 gap-x-5 gap-y-16 md:grid-cols-2 lg:mt-[100px]">
                {integrations.map((item, idx) => {
                    if (!item) return null
                    return (
                        <div
                            className={`
                              relative flex flex-col rounded-xl bg-white px-6 pt-12 pb-5 shadow-custom
                              lg:pr-[110px]
                            `}
                            key={idx}
                        >
                            {item.IconFile?.url && (
                                <Image
                                    alt={item.IconFile.alternativeText ?? ''}
                                    className={`
                                      pointer-events-none absolute top-0 h-[72px] w-auto -translate-y-1/2 select-none
                                    `}
                                    height={72}
                                    loading="lazy"
                                    src={item.IconFile.url}
                                    width={72}
                                />
                            )}
                            <p className="mb-2 text-xl font-semibold lg:text-[28px]">{item.Name}</p>
                            <p className="mb-4 flex-1 text-sm leading-[160%] text-neutral-600 lg:mb-[38px]">
                                {item.Description}
                            </p>
                            <Link
                                className="group flex items-center gap-1.5 py-3 text-primary-200"
                                href={`/integrations/${item.Slug}/`}
                            >
                                <p>Learn more</p>
                                <svg
                                    className="-mb-1 size-2 transition-transform group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.5 1.25L5.25 5 1.5 8.75"
                                        stroke="#00906B"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
