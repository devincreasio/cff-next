import { Button } from '@/components/ui/button'

interface HelpCentreCtaProps {
    buttonText: string
    buttonUrl: string
    description: string
    text: string
}
export function HelpCentreCta({ buttonText, buttonUrl, description, text }: HelpCentreCtaProps) {
    return (
        <section className="relative py-[60px]">
            <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-5 text-center">
                <div className="mx-auto flex max-w-[1060px] flex-col gap-3">
                    <p className="text-2xl leading-[140%] font-semibold text-black md:text-[32px]">{text}</p>
                    <p className="text-base leading-[160%] text-neutral-600">{description}</p>
                </div>
                <Button asChild>
                    <a href={buttonUrl} rel="noreferrer" target="_blank">
                        {buttonText}
                    </a>
                </Button>
            </div>
        </section>
    )
}
