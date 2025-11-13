'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
import { ACCOUNTS_URL, CLOUDINARY_URL } from '@/constants'
import { GetHeaderDataQuery } from '@/graphql/generated/sdk'
import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from '@/lib/utils'

import MobileMenu from './mobile-menu'
interface HeaderClientProps {
    data: GetHeaderDataQuery
}

export const HeaderClient = ({ data }: HeaderClientProps) => {
    const pathname = usePathname()
    const isMobile = useIsMobile()

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
            href: '#',
            showSeeAll: false,
            submenu: data.businesses.map((business) => ({
                href: `/business/${business?.Slug}`,
                title: business?.Name,
            })),
            title: 'Business',
        },
    ]

    return (
        <header
            className={`
              absolute inset-x-0 z-50 container mx-auto flex h-16 items-center justify-between gap-10 py-4 text-sm
              lg:h-[100px] lg:py-7
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
                            <NavigationMenuItem className="hidden md:block" key={menuItem.title + menuItem.href}>
                                <NavigationMenuTrigger>
                                    <Link href={menuItem.href}>{menuItem.title}</Link>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    {menuItem.submenu.map((subItem) => (
                                        <NavigationMenuLink asChild className="whitespace-nowrap" key={subItem.title}>
                                            <Link href={subItem.href}>{subItem.title}</Link>
                                        </NavigationMenuLink>
                                    ))}
                                    {menuItem.showSeeAll && (
                                        <NavigationMenuLink asChild className="text-primary-200">
                                            <Link href={menuItem.href}>See all</Link>
                                        </NavigationMenuLink>
                                    )}
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        ) : (
                            <NavigationMenuItem key={menuItem.title + menuItem.href}>
                                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle())}>
                                    <Link href={menuItem.href}>{menuItem.title}</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        )
                    })}
                </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-6">
                <a
                    className="group hidden text-primary-200 hover:text-primary-300 md:block"
                    href={`${ACCOUNTS_URL}/login?section=header&page=${pathname.replaceAll('/', '')}`}
                    rel="noreferrer"
                    target="_blank"
                >
                    <PersonIcon />
                </a>
                <Button asChild className="hidden px-9 shadow-none! md:block" size="sm" variant="outline">
                    <Link
                        href={`${ACCOUNTS_URL}/signup?action=signup&section=header&page=${pathname.replaceAll(
                            '/',
                            '',
                        )}`}
                        rel="noreferrer"
                        target="_blank"
                    >
                        Start free
                    </Link>
                </Button>
                <MobileMenu menu={menu} />
            </div>
        </header>
    )
}

const PersonIcon = () => {
    return (
        <svg fill="currentColor" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
            <path
                clipRule="evenodd"
                d="M12.97 5.468A3.956 3.956 0 019 9.438a3.956 3.956 0 01-3.97-3.97A3.955 3.955 0 019 1.5a3.955 3.955 0 013.97 3.968zM9 16.5c-3.253 0-6-.529-6-2.569s2.764-2.55 6-2.55c3.254 0 6 .528 6 2.568 0 2.041-2.764 2.551-6 2.551z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    )
}
