'use client'

import Markdown from 'markdown-to-jsx'
import Image from 'next/image'
import { useState } from 'react'
import { InView } from 'react-intersection-observer'

import { stripIndent } from '@/lib/utils'

import { BlogCta } from './blog-cta'
import { PostContentTitle } from './post-content-title'

interface PostContentProps {
    data: {
        Content?: null | string
        ImageFile?: {
            alternativeText?: null | string
            url?: string
        } | null
    }
}

export function PostContent({ data }: PostContentProps) {
    const [activeTitle, setActiveTitle] = useState('')

    return (
        <section
            className={`
              relative z-10 container mx-auto flex flex-col-reverse items-start gap-12 pt-16 pb-10
              lg:flex-row lg:gap-5 lg:pt-[60px] lg:pb-[90px]
            `}
        >
            <div className="prose w-full max-w-none flex-1 overflow-hidden">
                {data.ImageFile?.url && (
                    <Image
                        alt={data.ImageFile.alternativeText ?? ''}
                        className="mb-[18px] h-auto w-full"
                        height={400}
                        loading="lazy"
                        src={data.ImageFile.url}
                        width={600}
                    />
                )}
                <Markdown
                    options={{
                        overrides: {
                            a: {
                                props: {
                                    rel: 'noopener noreferrer',
                                    target: '_blank',
                                },
                            },
                            CTA: {
                                component: (props) => <BlogCta {...props} />,
                            },
                            h2: {
                                component: (props: { children: React.ReactNode[]; id: string }) => {
                                    return (
                                        <InView
                                            onChange={(inView) => {
                                                if (inView) {
                                                    setActiveTitle(props.children[0] as string)
                                                }
                                            }}
                                            rootMargin="0px 0px -50% 0px"
                                        >
                                            <h2 id={props.id}>{props.children[0]}</h2>
                                        </InView>
                                    )
                                },
                            },
                        },
                    }}
                >
                    {stripIndent(data.Content ?? '')}
                </Markdown>
            </div>
            <div
                className={`
                  sticky top-20 z-10 hidden w-full max-w-[388px] flex-col gap-3 border-l border-neutral-300 pt-3 pl-12
                  lg:flex
                `}
            >
                <span className="text-2xl leading-[140%] font-semibold">On this page</span>
                <div className="flex flex-col gap-2">
                    {data.Content?.match(/^##\s(.*?)(?=\n|$)/gm)?.map((header, index) => {
                        return (
                            <PostContentTitle activeTitle={activeTitle} key={index} title={header.replace('## ', '')} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
