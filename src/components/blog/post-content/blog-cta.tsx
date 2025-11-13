import { Button } from '@/components/ui/button'
import { ACCOUNTS_URL } from '@/constants'
import { cn } from '@/lib/utils'

interface BlogCtaProps {
    buttonText?: string
    buttonUrl?: string
    small?: boolean
    title: string
}

export function BlogCta({ buttonText, buttonUrl, title }: BlogCtaProps) {
    return (
        // eslint-disable-next-line better-tailwindcss/no-unregistered-classes
        <section className={cn('not-prose relative z-10 my-8 rounded-xl bg-primary-50 py-14 lg:py-20')}>
            <div className={`flex flex-col items-center justify-center gap-12 px-4 lg:flex-row lg:px-0`}>
                <h4
                    className={`
                      max-w-[210px] text-center text-xl font-semibold text-balance
                      lg:text-left lg:leading-[100%]
                    `}
                >
                    {title}
                </h4>
                <Button asChild>
                    <a
                        href={buttonUrl ?? `${ACCOUNTS_URL}/signup?action=signup&section=cta`}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {buttonText}
                    </a>
                </Button>
            </div>
        </section>
    )
}
