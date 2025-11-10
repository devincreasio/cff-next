import { PlusIcon } from 'lucide-react'
import Markdown from 'markdown-to-jsx'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

interface FaqProps {
    data: ({
        Answer?: null | string
        Question?: null | string
    } | null)[]
}

export default function Faq({ data }: FaqProps) {
    return (
        <section className="relative flex flex-col gap-6 pt-[60px] pb-[90px]">
            <div className="relative z-10 container mx-auto flex flex-col gap-6">
                <h4 className="text-center text-2.5xl font-semibold">FAQ</h4>
            </div>
            <div className="mx-auto flex w-full max-w-[1060px] flex-col gap-6 px-4">
                {data.map((item) => {
                    if (!item?.Question || !item.Answer) {
                        return null
                    }
                    return (
                        <Accordion collapsible key={item.Question} type="single">
                            <AccordionItem
                                className={`
                                  rounded-[10px] bg-white
                                  shadow-[0px_0.5px_7.01px_0px_#54535F09,0px_4px_30px_0px_#82818812]
                                `}
                                value={item.Question}
                            >
                                <AccordionTrigger
                                    className={`
                                      items-start px-3 py-4 text-xl leading-[140%] font-semibold
                                      hover:text-primary-200
                                      data-[state=open]:text-primary-100
                                      lg:px-8 lg:py-6 lg:text-2xl
                                      [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all
                                      [&>svg>path:last-child]:duration-200
                                      [&[data-state=open]>svg]:rotate-180
                                      [&[data-state=open]>svg>path:last-child]:rotate-90
                                      [&[data-state=open]>svg>path:last-child]:opacity-0
                                    `}
                                    showIcon={false}
                                >
                                    {item.Question}
                                    <PlusIcon
                                        className={`
                                          pointer-events-none size-8 shrink-0 text-primary-100 transition-transform
                                          duration-200
                                        `}
                                    />
                                </AccordionTrigger>
                                <AccordionContent
                                    className={`
                                      prose prose-base max-w-[838px] px-3 pb-4 leading-[160%] text-neutral-600
                                      lg:px-8 lg:pb-6
                                      prose-p:mt-0
                                    `}
                                >
                                    <Markdown className="">{item.Answer}</Markdown>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    )
                })}
            </div>
        </section>
    )
}
