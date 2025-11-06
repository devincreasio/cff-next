'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { CLOUDINARY_URL } from '@/constants'
import { GetHeaderDataQuery } from '@/graphql/generated/sdk'
import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from '@/lib/utils'
interface HeaderClientProps {
    data: GetHeaderDataQuery
    onlySeo?: boolean
}

export const HeaderClient = ({ data, onlySeo }: HeaderClientProps) => {
    const pathname = usePathname()
    const isMobile = useIsMobile()

    const [showMenu, setShowMenu] = useState(false)
    const [expanded, setExpanded] = useState(0)

    const menu = [
        {
            href: '/pricing',
            showSeeAll: false,
            submenu: [],
            title: 'Pricing',
        },
        {
            href: '/features',
            showSeeAll: true,
            submenu: data.features.map((feature) => ({
                href: `/features/${feature?.Slug}`,
                title: feature?.Name,
            })),
            title: 'Features',
        },
        {
            href: '/integrations',
            showSeeAll: true,
            submenu: data.integrations.map((integration) => ({
                href: `/integrations/${integration?.Slug}`,
                title: integration?.Name,
            })),
            title: 'Integrations',
        },
        {
            href: '/accountants-bookkeepers',
            showSeeAll: false,
            submenu: [],
            title: 'Accountants & Bookkeepers',
        },
        {
            href: '/business',
            showSeeAll: false,
            submenu: data.businesses.map((business) => ({
                href: `/business/${business?.Slug}`,
                title: business?.Name,
            })),
            title: 'Business',
        },
    ]

    return (
        <>
            {!onlySeo && (
                <header
                    className={`
                      absolute inset-x-0 z-50 container mx-auto flex h-[100px] items-center justify-between gap-10 py-7
                      text-sm
                    `}
                >
                    <Link href="/">
                        <Image
                            alt="Cash Flow Frog logo"
                            height={32}
                            src={`${CLOUDINARY_URL}/images/svg/logo-green.svg`}
                            width={160}
                        />
                    </Link>
                    <NavigationMenu className="hidden lg:flex" viewport={isMobile}>
                        <NavigationMenuList>
                            {menu.map((menuItem) => {
                                return menuItem.submenu.length > 0 ? (
                                    <NavigationMenuItem
                                        className="hidden md:block"
                                        key={menuItem.title + menuItem.href}
                                    >
                                        <NavigationMenuTrigger>
                                            <Link href={menuItem.href}>{menuItem.title}</Link>
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            {menuItem.submenu.map((subItem) => (
                                                <NavigationMenuLink
                                                    asChild
                                                    className="whitespace-nowrap"
                                                    key={subItem.title}
                                                >
                                                    <Link href={subItem.href}>{subItem.title}</Link>
                                                </NavigationMenuLink>
                                            ))}
                                            {menuItem.showSeeAll && (
                                                <NavigationMenuLink asChild className="text-dark-green">
                                                    <Link href={menuItem.href}>See all</Link>
                                                </NavigationMenuLink>
                                            )}
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                ) : (
                                    <NavigationMenuItem key={menuItem.title + menuItem.href}>
                                        <NavigationMenuLink
                                            asChild
                                            className={cn(navigationMenuTriggerStyle(), `hover:bg-transparent`)}
                                        >
                                            <Link href={menuItem.href}>{menuItem.title}</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                )
                            })}
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="flex items-center gap-6">
                        <a
                            className="group hidden md:block"
                            href={`https://accounts.cashflowfrog.com/login?section=header&page=${pathname.replaceAll(
                                '/',
                                '',
                            )}`}
                            rel="noreferrer"
                            target="_blank"
                        >
                            <PersonIcon />
                        </a>
                        <Button asChild className="hidden px-9 md:block" size="sm" variant="outline">
                            <Link
                                href={`https://accounts.cashflowfrog.com/signup?action=signup&section=header&page=${pathname.replaceAll(
                                    '/',
                                    '',
                                )}`}
                                rel="noreferrer"
                                target="_blank"
                            >
                                Start free
                            </Link>
                        </Button>
                        <button
                            className="md:hidden"
                            onClick={() => {
                                setShowMenu(true)
                            }}
                        >
                            <MenuIcon />
                        </button>
                    </div>
                </header>
            )}
            {/* mobile */}
            {/* <Transition
                appear={true}
                as="div"
                className="fixed inset-0 z-50 h-screen w-screen overflow-y-scroll bg-white"
                enter="transition-all duration-300"
                enterFrom="-translate-y-full"
                enterTo="translate-y-0"
                leave="transition-all duration-150"
                leaveFrom="translate-y-0"
                leaveTo="-translate-y-full"
                show={showMenu}
            >
                <div className="container flex items-center justify-between py-5">
                    <Link
                        href="/"
                        onClick={() => {
                            setShowMenu(false)
                        }}
                    >
                        <Image
                            alt="Logo"
                            className="h-[32px] w-[160px]"
                            height={32}
                            loading="lazy"
                            src={getResponsiveImageLink('images/svg/logo-green.svg')}
                            width={160}
                        />
                    </Link>
                    <button
                        className="relative"
                        onClick={() => {
                            setShowMenu(false)
                        }}
                    >
                        <CloseIcon />
                    </button>
                </div>
                Pricing | Features ^ | Integrations ^ | Acc&Book | Business ^ 
                <div className="flex flex-col divide-y-[1px] px-5">
                    <LinkComponentMobile href="pricing" title="Pricing" />
                    <LinkComponentMobile
                        expanded={expanded}
                        href="features"
                        index={1}
                        obj={data.features}
                        setExpanded={setExpanded}
                        setShowMenu={setShowMenu}
                        showMenu={showMenu}
                        title="Features"
                    />
                    <LinkComponentMobile
                        expanded={expanded}
                        href="integrations"
                        index={2}
                        obj={data.integrations}
                        setExpanded={setExpanded}
                        setShowMenu={setShowMenu}
                        showMenu={showMenu}
                        title="Integrations"
                    />
                    <LinkComponentMobile href="accountants-bookkeepers" title="Accountants & Bookkeepers" />
                    <LinkComponentMobile
                        disableSingle
                        expanded={expanded}
                        href="business"
                        index={3}
                        obj={data.businesses}
                        setExpanded={setExpanded}
                        setShowMenu={setShowMenu}
                        showMenu={showMenu}
                        title="Business"
                    />
                </div>
            </Transition> */}
        </>
    )
}

const CloseIcon = () => {
    return (
        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14.666 1.333L1.333 14.667m0-13.334l13.333 13.334"
                stroke="#5E5E5E"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.6"
            />
        </svg>
    )
}

const MenuIcon = () => {
    return (
        <svg fill="none" height="18" viewBox="0 0 26 18" width="26" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1 1h24M1 9h24M1 17h24"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.6"
            />
        </svg>
    )
}

const PersonIcon = () => {
    return (
        <svg fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
            <path
                className="text-dark-green transition-colors group-hover:text-secondary"
                clipRule="evenodd"
                d="M12.97 5.468A3.956 3.956 0 019 9.438a3.956 3.956 0 01-3.97-3.97A3.955 3.955 0 019 1.5a3.955 3.955 0 013.97 3.968zM9 16.5c-3.253 0-6-.529-6-2.569s2.764-2.55 6-2.55c3.254 0 6 .528 6 2.568 0 2.041-2.764 2.551-6 2.551z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    )
}
