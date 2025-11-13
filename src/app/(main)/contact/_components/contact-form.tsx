'use client'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupTextarea } from '@/components/ui/input-group'

const formsparkUrl = 'https://submit-form.com/1TIJ0a4g'

export default function ContactForm() {
    const initialState = {
        email: '',
        message: '',
        userName: '',
    }

    const [formData, setFormData] = useState(initialState)
    const [status, setStatus] = useState(0)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newFormData = { ...formData, [e.target.name]: e.target.value }
        setFormData(newFormData)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        fetch(formsparkUrl, {
            body: JSON.stringify({
                email: formData.email,
                message: formData.message,
                userName: formData.userName,
            }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
        })
            .then((res) => {
                setFormData(initialState)
                setStatus(res.status)
            })
            .catch((error: unknown) => {
                console.error(error)
            })
    }
    return (
        <div className="mx-auto w-full max-w-[616px] px-4">
            <div
                className={`
                  relative z-10 flex flex-col gap-5 rounded-xl bg-white px-3 pt-6 pb-8
                  shadow-[0px_14px_64px_-4px_#18274B1F,-8px_8px_22px_-6px_#6363631F]
                  lg:px-12
                `}
            >
                <h1 className="text-center text-[32px] font-semibold">Contact Us</h1>
                <form
                    className="flex flex-col gap-5"
                    onSubmit={(e) => {
                        handleSubmit(e)
                    }}
                >
                    <InputGroup>
                        <InputGroupInput
                            name="userName"
                            onChange={(e) => {
                                handleChange(e)
                            }}
                            placeholder="Name"
                            value={formData.userName}
                        />
                        <InputGroupAddon className="[&>svg:not([class*='size-'])]:size-6">
                            <PersonIcon />
                        </InputGroupAddon>
                    </InputGroup>
                    <InputGroup>
                        <InputGroupInput
                            name="email"
                            onChange={(e) => {
                                handleChange(e)
                            }}
                            placeholder="email@example.com"
                            type="email"
                            value={formData.email}
                        />
                        <InputGroupAddon className="[&>svg:not([class*='size-'])]:size-6">
                            <EmailIcon />
                        </InputGroupAddon>
                    </InputGroup>
                    <InputGroup className="items-start">
                        <InputGroupTextarea
                            name="message"
                            onChange={(e) => {
                                handleChange(e)
                            }}
                            placeholder="Message"
                            rows={4}
                            value={formData.message}
                        />
                        <InputGroupAddon className="pt-3 [&>svg:not([class*='size-'])]:size-6">
                            <MessageIcon />
                        </InputGroupAddon>
                    </InputGroup>
                    <Button className="w-full" type="submit">
                        Send
                    </Button>
                    {status >= 200 && status <= 299 && (
                        <p
                            className={`
                              rounded-sm border border-green-500/50 bg-green-500/20 px-4 py-2 font-semibold
                              text-green-500
                            `}
                        >
                            Message send!
                        </p>
                    )}
                    {status >= 400 && status <= 599 && (
                        <p
                            className={`
                              rounded-sm border border-red-500/50 bg-red-500/20 px-4 py-2 font-semibold text-red-600
                            `}
                        >
                            Something wrong!
                        </p>
                    )}
                </form>
            </div>
        </div>
    )
}

const PersonIcon = () => (
    <svg fill="none" height="24" viewBox="0 0 23 24" width="23" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M11.503 12c-1.055 0-1.957-.392-2.708-1.175C8.045 10.042 7.67 9.1 7.67 8s.376-2.042 1.126-2.825C9.546 4.392 10.448 4 11.503 4c1.054 0 1.956.392 2.707 1.175.75.783 1.126 1.725 1.126 2.825s-.375 2.042-1.126 2.825c-.75.783-1.653 1.175-2.707 1.175Zm-7.667 8v-2.8c0-.567.14-1.087.42-1.563a2.84 2.84 0 0 1 1.113-1.087c.99-.517 1.997-.904 3.019-1.163A12.665 12.665 0 0 1 11.503 13c1.054 0 2.092.13 3.114.387a13.85 13.85 0 0 1 3.019 1.163c.463.25.835.612 1.114 1.087.28.476.42.996.42 1.563V20H3.835Zm1.917-2h11.5v-.8a.97.97 0 0 0-.48-.85 12.167 12.167 0 0 0-2.611-1.013 10.678 10.678 0 0 0-5.319 0c-.878.226-1.749.563-2.611 1.013a.971.971 0 0 0-.48.85v.8Zm5.75-8c.527 0 .978-.196 1.353-.588.376-.391.563-.862.563-1.412 0-.55-.187-1.02-.563-1.412A1.808 1.808 0 0 0 11.503 6c-.527 0-.979.196-1.354.588A1.968 1.968 0 0 0 9.586 8c0 .55.188 1.02.563 1.412.375.392.827.588 1.354.588Z"
            fill="#FF7043"
        />
    </svg>
)

const EmailIcon = () => (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
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
)

const MessageIcon = () => (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M2 22V4c0-.55.196-1.02.587-1.413A1.926 1.926 0 0 1 4 2h16c.55 0 1.02.196 1.413.587.39.393.587.863.587 1.413v12c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 20 18H6l-4 4Zm3.15-6H20V4H4v13.125L5.15 16Z"
            fill="#FF7043"
        />
    </svg>
)
