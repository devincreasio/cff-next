import Link from 'next/link'

import { Button } from '../ui/button'

interface CtaProps {
    buttonLink: string
    buttonText: string
    title: string
}

export function Cta({ buttonLink, buttonText, title }: CtaProps) {
    return (
        <section className="relative z-10 py-20">
            <div className="mx-auto flex max-w-[911px] flex-col items-center gap-6 px-4 lg:flex-row lg:gap-12">
                <h4
                    className={`
                      text-center text-[32px] leading-[140%] font-semibold text-balance
                      lg:text-left lg:text-[40px] lg:leading-[100%]
                    `}
                >
                    {title}
                </h4>
                <Button asChild>
                    <Link href={buttonLink}>{buttonText}</Link>
                </Button>
            </div>
        </section>
    )
}
