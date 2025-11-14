import Image from 'next/image'
import { useState } from 'react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { CLOUDINARY_URL } from '@/constants'

interface MobileMenuProps {
    menu: {
        href: string
        showSeeAll: boolean
        submenu: {
            href: string
            title: null | string | undefined
        }[]
        title: string
    }[]
}

export default function MobileMenu({ menu }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Sheet onOpenChange={setIsOpen} open={isOpen}>
            <SheetTrigger asChild>
                <button
                    aria-label="Open menu"
                    className="text-primary-200 md:hidden"
                    onClick={() => {
                        setIsOpen(true)
                    }}
                >
                    <MenuIcon />
                </button>
            </SheetTrigger>
            <SheetContent className="max-h-[85vh] w-full gap-0 p-0" showClose={false} side="top">
                <SheetHeader className="h-16 p-4">
                    <SheetTitle className="sr-only">Cash Flow Frog Mobile Menu</SheetTitle>
                    <div className="flex items-center justify-between">
                        <Image
                            alt="Cash Flow Frog logo"
                            height={32}
                            src={`${CLOUDINARY_URL}/images/svg/logo-green.svg`}
                            width={160}
                        />
                        <button
                            aria-label="Close menu"
                            onClick={() => {
                                setIsOpen(false)
                            }}
                        >
                            <CloseIcon />
                        </button>
                    </div>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto">
                    <Accordion className="w-full" type="multiple">
                        {menu.map((item, index) => (
                            <div key={item.title}>
                                {item.submenu.length > 0 ? (
                                    <AccordionItem value={`item-${index}`}>
                                        <AccordionTrigger
                                            className={`
                                              px-5 py-3.5 text-sm font-medium text-primary-200
                                              hover:bg-primary-50
                                              data-[state=open]:bg-primary-50
                                            `}
                                        >
                                            {item.title}
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-0">
                                            {item.submenu.map((child) => (
                                                <a
                                                    className={`
                                                      block px-4 py-3.5 pl-12 text-sm font-medium text-primary-200
                                                      transition-colors
                                                      hover:bg-primary-50
                                                    `}
                                                    href={child.href}
                                                    key={child.title}
                                                    onClick={() => {
                                                        setIsOpen(false)
                                                    }}
                                                >
                                                    {child.title}
                                                </a>
                                            ))}
                                        </AccordionContent>
                                    </AccordionItem>
                                ) : (
                                    <a
                                        className={`
                                          block px-5 py-3.5 text-sm font-medium text-primary-200 transition-colors
                                          hover:bg-primary-50
                                        `}
                                        href={item.href}
                                        onClick={() => {
                                            setIsOpen(false)
                                        }}
                                    >
                                        {item.title}
                                    </a>
                                )}
                            </div>
                        ))}
                    </Accordion>
                </div>
            </SheetContent>
        </Sheet>
    )
}

const MenuIcon = () => {
    return (
        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <rect fill="currentColor" height="3" rx="1.5" width="20" x="2" y="2" />
            <rect fill="currentColor" height="3" rx="1.5" width="20" x="2" y="10.5" />
            <rect fill="currentColor" height="3" rx="1.5" width="20" x="2" y="19" />
        </svg>
    )
}

const CloseIcon = () => {
    return (
        <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
            <path d="m2 20-2-2 8-8-8-8 2-2 8 8 8-8 2 2-8 8 8 8-2 2-8-8-8 8Z" fill="#005841" />
        </svg>
    )
}
