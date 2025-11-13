import Image from 'next/image'
import Link from 'next/link'

import { CLOUDINARY_URL } from '@/constants'

interface FooterProps {
    hideMenu?: boolean
}

export function Footer({ hideMenu = false }: FooterProps) {
    const socialLinks = [
        {
            href: 'https://www.youtube.com/c/CashFlowFrog',
            icon: <YoutubeIcon />,
            title: 'YouTube',
        },
        {
            href: 'https://www.facebook.com/cashflowfrog',
            icon: <FacebookIcon />,
            title: 'Facebook',
        },
        {
            href: 'https://www.instagram.com/cashflowfrog/',
            icon: <InstagramIcon />,
            title: 'Instagram',
        },
    ]

    const integrations = [
        {
            href: '/integrations/xero/',
            title: 'Cash Flow Frog for Xero',
        },
        {
            href: '/integrations/quickbooks-online/',
            title: 'Cash Flow Frog for QuickBooks Online',
        },
        {
            href: '/integrations/freshbooks/',
            title: 'Cash Flow Frog for FreshBooks',
        },
        {
            href: '/integrations/quickbooks-desktop/',
            title: 'Cash Flow Frog for QuickBooks Desktop',
        },
        {
            href: '/integrations/sage-intacct/',
            title: 'Cash Flow Frog for Sage Intacct',
        },
        {
            href: '/integrations/zoho-books/',
            title: 'Cash Flow Frog for Zoho Books',
        },
        {
            href: '/integrations/excel/',
            title: 'Cash Flow Frog for Excel',
        },
    ]

    const resources = [
        {
            href: '/blog/',
            title: 'Blog',
        },
        {
            href: '/whats-new/',
            title: "What's New",
        },
        {
            href: '/glossary/',
            title: 'Glossary',
        },
        {
            href: 'https://help.cashflowfrog.com/en',
            title: 'Help & Support',
        },
        {
            href: '/about-us/',
            title: 'About Us',
        },
        {
            href: '/contact/',
            title: 'Contact Us',
        },
    ]

    return (
        <footer className="relative z-50 bg-brown-background text-white">
            <div className={`container mx-auto flex flex-col gap-y-8 pt-16 pb-14 md:flex-row md:gap-x-20 md:gap-y-0`}>
                <div className="flex shrink-0 flex-col gap-6">
                    <Image
                        alt="Logo"
                        height={43}
                        loading="lazy"
                        src={`${CLOUDINARY_URL}/images/svg/logo-green.svg`}
                        width={215}
                    />
                    {!hideMenu && (
                        <div className="flex items-center gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    className={`
                                      flex size-12 items-center justify-center rounded-full border
                                      border-brown-background bg-brown-background transition-colors
                                      hover:border-neutral-700 hover:bg-neutral-700
                                      active:border-neutral-600
                                    `}
                                    href={link.href}
                                    key={link.title}
                                    rel="noreferrer"
                                    target="_blank"
                                    title={link.title}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
                {!hideMenu && (
                    <div className="flex flex-1 flex-col gap-5">
                        <p className="font-semibold">Integrations</p>
                        <div className="grid gap-x-20 gap-y-2 lg:grid-cols-2">
                            {integrations.map((integration) => (
                                <Link
                                    className={`
                                      leading-[160%] underline decoration-transparent transition-colors
                                      hover:decoration-white
                                    `}
                                    href={integration.href}
                                    key={integration.title}
                                >
                                    {integration.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
                {!hideMenu && (
                    <div className="flex flex-col gap-5">
                        <p className="font-semibold">Resources</p>
                        <div className="flex flex-col space-y-2">
                            {resources.map((resource) => (
                                <Link
                                    className={`
                                      leading-[160%] underline decoration-transparent transition-colors
                                      hover:decoration-white
                                    `}
                                    href={resource.href}
                                    key={resource.title}
                                >
                                    {resource.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div
                className={`
                  container mx-auto flex flex-col justify-between gap-y-3 border-t border-[#343536] py-5 text-xs
                  md:flex-row
                `}
            >
                <p>© Cash Flow Frog {new Date().getFullYear()}. All Rights Reserved.</p>
                <div className="flex items-center gap-5">
                    <Link className="transition-colors hover:text-primary-100" href="/terms-conditions/">
                        Terms & Conditions
                    </Link>
                    <Link className="transition-colors hover:text-primary-100" href="/privacy-policy/">
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    )
}

const YoutubeIcon = () => (
    <svg fill="none" height="12" viewBox="0 0 16 12" width="16" xmlns="http://www.w3.org/2000/svg">
        <path
            clipRule="evenodd"
            d="M15.885 2.373A2.377 2.377 0 0 0 13.512 0H2.373A2.377 2.377 0 0 0 0 2.373v6.368a2.377 2.377 0 0 0 2.373 2.373h11.139a2.377 2.377 0 0 0 2.373-2.373V2.373Zm-9.54 5.86V2.252l4.527 2.978-4.528 3.003Z"
            fill="#fff"
            fillRule="evenodd"
        />
    </svg>
)
const FacebookIcon = () => (
    <svg fill="none" height="17" viewBox="0 0 8 17" width="8" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7.253 8.434H4.969v8.408H1.606V8.434H0V5.45h1.606V3.53C1.606 2.153 2.234 0 5.02 0h2.51v2.88H5.722c-.301 0-.728.156-.728.805v1.739H7.58l-.326 3.01Z"
            fill="#fff"
        />
    </svg>
)
const InstagramIcon = () => (
    <svg fill="none" height="15" viewBox="0 0 15 15" width="15" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M9.95 0c2.341 0 4.293 1.95 4.293 4.292V9.95c0 2.341-1.952 4.293-4.293 4.293H4.292C1.951 14.243 0 12.291 0 9.95V4.292C0 1.951 1.951 0 4.292 0H9.95ZM7.22 3.512a3.497 3.497 0 0 0-3.512 3.511 3.498 3.498 0 0 0 3.512 3.513 3.499 3.499 0 0 0 3.512-3.513C10.536 5.268 9.17 3.707 7.22 3.512Zm-.196 1.366c1.171 0 2.147.975 2.147 2.145.195 1.171-.78 2.342-1.951 2.342-1.17 0-2.341-.976-2.341-2.146 0-1.366.975-2.34 2.145-2.341Zm3.918-2.844a1.129 1.129 0 1 0 0 2.258 1.129 1.129 0 0 0 0-2.258Z"
            fill="#fff"
        />
    </svg>
)
