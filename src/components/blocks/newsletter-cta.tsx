'use client'

import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { ACCOUNTS_URL } from '@/constants'

export function NewsletterCta() {
    const [email, setEmail] = useState('')

    return (
        <section className="relative container mx-auto py-10 lg:py-24">
            <div className="lg:px-12">
                <div
                    className={`
                      flex flex-col gap-8 rounded-2xl bg-primary-100 px-4 py-8 shadow-custom
                      lg:px-16 lg:pb-12
                    `}
                >
                    <h4
                        className={`
                          text-center text-2xl leading-[140%] font-semibold text-balance text-white
                          lg:text-2.5xl
                        `}
                    >
                        Get your cash flow forecast in 1 minute
                    </h4>
                    <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-32">
                        <div className="flex flex-col gap-3">
                            {[
                                {
                                    icon: <TimerIcon />,
                                    text: 'Get forecasts in under 1 minute',
                                },
                                {
                                    icon: <GitIcon />,
                                    text: 'Syncs with your accounting software',
                                },
                                {
                                    icon: <CashIcon />,
                                    text: 'Plan for taxes, gaps & growth',
                                },
                            ].map((item) => (
                                <div className="flex items-center gap-3" key={item.text}>
                                    <div className="shrink-0">{item.icon}</div>
                                    <p className="text-xl leading-[100%] text-neutral-300">{item.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex w-full flex-1 flex-col gap-5">
                            <InputGroup>
                                <InputGroupInput
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                    placeholder="Enter your email"
                                    type="email"
                                    value={email}
                                />
                                <InputGroupAddon>
                                    <svg
                                        fill="none"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M20.818 3.602H3.178a2.1 2.1 0 0 0-2.1 2.1v12.6c0 1.16.94 2.1 2.1 2.1h17.64a2.1 2.1 0 0 0 2.1-2.1v-12.6a2.1 2.1 0 0 0-2.1-2.1Z"
                                            stroke="#FF7043"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        />
                                        <path
                                            d="m4.438 6.96 7.56 5.88 7.56-5.88"
                                            stroke="#FF7043"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </InputGroupAddon>
                            </InputGroup>
                            <Button asChild>
                                <Link
                                    href={`${ACCOUNTS_URL}/signup?email=${email}`}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Start free
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const TimerIcon = () => (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#a)">
            <path
                d="M3.914 4.763a10.847 10.847 0 0 0-2.765 7.124c-.067 6.012 4.843 10.956 10.855 10.968C18.01 22.866 22.86 18.002 22.86 12c0-5.91-4.723-10.72-10.6-10.855a.247.247 0 0 0-.255.247V6.12"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <path
                d="M10.721 13.28 6.255 6.89a.46.46 0 0 1 .64-.64l6.388 4.467a1.838 1.838 0 0 1-2.106 3.011 1.876 1.876 0 0 1-.456-.449Z"
                fill="#fff"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path d="M0 0h24v24H0z" fill="#fff" />
            </clipPath>
        </defs>
    </svg>
)

const GitIcon = () => (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6.958 6.119a2.52 2.52 0 1 0 0-5.04 2.52 2.52 0 0 0 0 5.04Zm0 16.801a2.52 2.52 0 1 0 0-5.041 2.52 2.52 0 0 0 0 5.04Zm.002-5.04V6.122m10.084 3.36a2.52 2.52 0 1 0 0-5.04 2.52 2.52 0 0 0 0 5.04Z"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
        <path
            d="M17.04 9.48c0 6.72-10.08 2.52-10.08 8.4"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
)

const CashIcon = () => (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M2.25 15.75h19.5a.75.75 0 0 0 .75-.75V4.5a.75.75 0 0 0-.75-.75H2.25a.75.75 0 0 0-.75.75V15c0 .414.336.75.75.75Z"
            stroke="#fff"
            strokeLinejoin="round"
            strokeWidth="2"
        />
        <path
            d="M4.5 20.25h15M12 13.5A3.75 3.75 0 1 0 12 6a3.75 3.75 0 0 0 0 7.5Zm10.5-6a3.75 3.75 0 0 1-3.75-3.75M1.5 7.5a3.75 3.75 0 0 0 3.75-3.75M22.5 12a3.751 3.751 0 0 0-3.75 3.75M1.5 12a3.75 3.75 0 0 1 3.75 3.75"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
)
