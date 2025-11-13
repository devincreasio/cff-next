'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'

import { useModalStore } from '../_store'

const loginOptions = [
    {
        color: '#2CA01C',
        href: 'https://accounts.cashflowfrog.com/qbo/oauth2/authorization',
        label: 'Connect to QuickBooks',
        logo: null,
    },
    {
        color: '#3C6EE1',
        href: 'https://accounts.cashflowfrog.com/freshbooks/oauth2/authorization',
        label: 'Connect to FreshBooks',
        logo: (
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.132 0A10.12 10.12 0 0 0 0 10.132V24h13.868A10.12 10.12 0 0 0 24 13.868V0H10.132Zm8.191 4.24a3.297 3.297 0 0 1-3.305 3.305h-3.593v2.874h4.814v3.306h-4.742v6.898H7.545V3.377h3.88v3.09c.144-1.724 1.581-3.09 3.305-3.09h3.593v.863Z"
                    fill="#fff"
                />
            </svg>
        ),
    },
    {
        color: '#0D82A9',
        href: 'https://accounts.cashflowfrog.com/xero/oauth2/authorization',
        label: 'Connect to Xero',
        logo: (
            <svg fill="none" height="40" width="40" xmlns="http://www.w3.org/2000/svg">
                <mask
                    height="58"
                    id="a"
                    maskUnits="userSpaceOnUse"
                    style={{ maskType: 'luminance' }}
                    width="58"
                    x="-9"
                    y="-9"
                >
                    <path d="M-8.805-8.85h57.643v57.643H-8.805V-8.85Z" fill="#fff" />
                </mask>
                <g mask="url(#a)">
                    <path
                        d="M20.002 39.924c11.004 0 19.924-8.92 19.924-19.924S31.006.076 20.002.076.078 8.996.078 20s8.92 19.924 19.924 19.924Z"
                        fill="#fff"
                    />
                    <path
                        d="m9.612 19.942 3.4-3.408a.609.609 0 0 0-.867-.856l-3.397 3.395-3.412-3.4a.609.609 0 1 0-.856.865l3.4 3.4-3.399 3.404a.607.607 0 0 0 .425 1.045.604.604 0 0 0 .43-.178l3.407-3.402 3.394 3.39a.608.608 0 1 0 .874-.848l-3.399-3.407Z"
                        fill="#13B5EA"
                    />
                    <path d="M29.828 19.942a1.108 1.108 0 1 0 1.108-1.107c-.611 0-1.108.496-1.108 1.107Z" fill="#fff" />
                    <path
                        d="M27.73 19.942a3.21 3.21 0 0 1 3.206-3.206 3.21 3.21 0 0 1 3.206 3.206 3.21 3.21 0 0 1-3.206 3.205 3.21 3.21 0 0 1-3.206-3.205Zm-1.261 0a4.472 4.472 0 0 0 4.467 4.467 4.473 4.473 0 0 0 4.468-4.467 4.473 4.473 0 0 0-4.468-4.467 4.473 4.473 0 0 0-4.467 4.467Zm-.321-4.391h-.187c-.563 0-1.105.177-1.559.526a.61.61 0 0 0-.595-.479.602.602 0 0 0-.604.604l.002 7.524a.61.61 0 0 0 1.219 0v-4.627c0-1.542.14-2.165 1.462-2.33.122-.015.255-.012.255-.012.361-.013.618-.261.618-.597a.61.61 0 0 0-.61-.609Zm-11.693 3.656.002-.052a3.228 3.228 0 0 1 6.268.052h-6.27Zm7.517-.116c-.262-1.242-.943-2.263-1.979-2.919a4.503 4.503 0 0 0-4.978.132 4.518 4.518 0 0 0-1.882 3.668c0 .36.043.721.133 1.078a4.502 4.502 0 0 0 3.792 3.337 4.252 4.252 0 0 0 1.607-.107A4.398 4.398 0 0 0 20 23.71c.432-.278.793-.644 1.143-1.082l.02-.024c.244-.301.199-.73-.068-.933-.225-.173-.602-.243-.9.138a4.132 4.132 0 0 1-.213.278 3.5 3.5 0 0 1-.88.71 3.206 3.206 0 0 1-1.498.378c-1.772-.02-2.72-1.256-3.058-2.14a3.209 3.209 0 0 1-.136-.511 1.162 1.162 0 0 1-.008-.094l6.359-.001c.872-.018 1.34-.634 1.211-1.337Z"
                        fill="#13B5EA"
                    />
                </g>
            </svg>
        ),
    },
    {
        color: '#226DB4',
        href: 'https://accounts.cashflowfrog.com/zoho/oauth2/authorization',
        label: 'Connect to Zoho Books',
        logo: (
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M17.099 24H.704a.703.703 0 0 1-.703-.703V17.34c0-1.301.827-2.46 2.057-2.882l18.17-6.237a3.504 3.504 0 0 0 2.365-3.313 3.506 3.506 0 0 0-3.502-3.502H1.407v11.6a.703.703 0 1 1-1.407 0V.703A.703.703 0 0 1 .703 0h18.389A4.914 4.914 0 0 1 24 4.908a4.91 4.91 0 0 1-3.315 4.643l-18.17 6.237a1.64 1.64 0 0 0-1.108 1.552v5.253h15.691a5.459 5.459 0 0 0 3.886-1.61 5.459 5.459 0 0 0 1.61-3.885 5.489 5.489 0 0 0-3.095-4.943.704.704 0 0 1 .614-1.265 6.887 6.887 0 0 1 2.823 2.528 6.889 6.889 0 0 1 1.063 3.68 6.854 6.854 0 0 1-2.022 4.881A6.853 6.853 0 0 1 17.1 24Z"
                    fill="#fff"
                />
                <path
                    d="M7.911 9.84A2.815 2.815 0 0 1 5.1 7.026a2.815 2.815 0 0 1 2.812-2.812 2.815 2.815 0 0 1 2.813 2.812A2.815 2.815 0 0 1 7.91 9.839Zm0-4.219c-.775 0-1.406.63-1.406 1.406a1.407 1.407 0 1 0 1.406-1.406Zm7.05 14.15a2.815 2.815 0 0 1-2.812-2.813 2.815 2.815 0 0 1 2.812-2.812 2.815 2.815 0 0 1 2.812 2.812 2.815 2.815 0 0 1-2.812 2.812Zm0-4.22c-.775 0-1.406.63-1.406 1.406a1.407 1.407 0 1 0 1.406-1.406Z"
                    fill="#fff"
                />
            </svg>
        ),
    },
]

export function LoginModal() {
    const { isOpen, setModalOpen } = useModalStore()
    return (
        <Dialog onOpenChange={setModalOpen} open={isOpen}>
            <DialogContent className="flex w-full max-w-4xl! flex-col gap-8 rounded-xl bg-white lg:p-10 lg:pb-12">
                <DialogHeader className="items-center justify-center gap-3 text-center">
                    <DialogTitle className="text-xl leading-[115%] font-bold uppercase lg:text-[32px]">
                        Get your forecast now!
                    </DialogTitle>
                    <DialogDescription className="leading-[115%] font-bold lg:text-2xl">Start Free!</DialogDescription>
                </DialogHeader>
                <div className="flex flex-col items-center justify-center gap-8">
                    {loginOptions.map((item, index) => {
                        return (
                            <a
                                className={`
                                  flex h-[49px] w-full max-w-[315px] items-center justify-center gap-3 rounded-sm py-3
                                  text-center text-lg font-semibold text-white
                                `}
                                href={item.href}
                                key={index}
                                style={{
                                    backgroundColor: item.color,
                                }}
                            >
                                {item.logo && <span className="shrink-0">{item.logo}</span>}
                                {item.label}
                            </a>
                        )
                    })}
                </div>
            </DialogContent>
        </Dialog>
    )
}
