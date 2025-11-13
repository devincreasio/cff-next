import Markdown from 'markdown-to-jsx'

import { BlurCircle } from '@/components/shared/blur-circle'

interface AnswersProps {
    answers: string[]
    description?: null | string
    info?: null | string
    title?: null | string
}

export function Answers({ answers, description, info, title }: AnswersProps) {
    return (
        <section className="relative bg-primary-50 py-10 lg:py-[60px]">
            <BlurCircle color="blue" left={-430} size={640} top={240} />
            <div className="relative z-10 container mx-auto flex flex-col items-center justify-center gap-10">
                <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-3 text-center">
                    <p className="text-sm text-primary-200">Answers</p>
                    {title && <p className="text-2xl font-semibold md:text-[32px] md:leading-[140%]">{title}</p>}
                    {description && (
                        <Markdown className="prose mt-5 max-w-none text-neutral-600">{description}</Markdown>
                    )}
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 md:gap-y-8">
                    {answers.map((answer, index) => (
                        <div
                            className={`
                              rounded-[20px] bg-white px-[25px] py-[30px] text-center leading-[160%] text-primary-300
                              shadow-[0px_0.5px_7px_0px_#54535F09,0px_4px_20px_0px_#82818812]
                            `}
                            key={index}
                        >
                            {answer}
                        </div>
                    ))}
                </div>
                {info && <div className="text-center text-neutral-600">{info}</div>}
            </div>
        </section>
    )
}
