'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

import { Button } from '../ui/button'

interface CtaProps {
    backgroundColor?: 'primary-50' | 'white'
    buttonLink?: string
    buttonText: string
    title: string
}

export function Cta({ backgroundColor = 'white', buttonLink, buttonText, title }: CtaProps) {
    const pathname = usePathname()

    const page = pathname === '/' ? 'home' : pathname.replace('/', '')
    return (
        <section
            className={cn('relative z-10 py-20', {
                'bg-primary-50': backgroundColor === 'primary-50',
                'bg-white': backgroundColor === 'white',
            })}
        >
            <div className="mx-auto flex max-w-[911px] flex-col items-center gap-6 px-4 lg:flex-row lg:gap-12">
                <h4
                    className={`
                      text-center text-2.5xl font-semibold text-balance
                      lg:text-left lg:text-3.5xl lg:leading-[100%]
                    `}
                >
                    {title}
                </h4>
                <Button asChild>
                    <Link
                        href={
                            buttonLink ??
                            `https://accounts.cashflowfrog.com/signup?action=signup&section=cta&page=${page}`
                        }
                    >
                        {buttonText}
                    </Link>
                </Button>
            </div>
        </section>
    )
}
