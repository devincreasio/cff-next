'use client'

import clsx from 'clsx'
import { useEffect, useMemo, useState } from 'react'

import { GetPostPageQuery } from '@/graphql/generated/sdk'

interface BlogRatingProps {
    data: NonNullable<GetPostPageQuery['posts'][0]>
}

export function BlogRating({ data }: BlogRatingProps) {
    const [hover, setHover] = useState<null | number>(null)
    const [rating, setRating] = useState(data.rating)
    const [currentUserId, setCurrentUserId] = useState<null | string>(null)

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCurrentUserId(localStorage.getItem('user'))
    }, [])

    async function handleRating(value: number) {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/post-ratings`, {
                body: JSON.stringify({
                    data: {
                        post: data.documentId,
                        rating: value,
                        user: currentUserId ?? Math.random().toString(36).slice(7),
                    },
                }),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
            })
            const res = (await response.json()) as { data: { rating: number; user: string } }
            if (response.ok) {
                setRating([...rating, res.data])

                localStorage.setItem('user', res.data.user)
            }
        } catch (error) {
            console.error('Error submitting rating:', error)
        }
    }

    const averageRating = useMemo(() => {
        return rating.length > 0 ? (rating.reduce((a, r) => a + (r?.rating ?? 0), 0) / rating.length).toFixed(0) : '0'
    }, [rating])

    const hasRated = useMemo(() => rating.some((r) => r?.user === currentUserId), [rating, currentUserId])

    return (
        <section className="container mx-auto flex items-center gap-x-3">
            <div className="flex items-center gap-x-1">
                {Array.from({ length: 5 }, (_, i) => (
                    <button
                        className={clsx('text-gray-300', {
                            'text-secondary': i + 1 <= (hover ?? Number(averageRating)),
                        })}
                        disabled={hasRated}
                        key={i}
                        onClick={() => handleRating(i + 1)}
                        onMouseEnter={() => {
                            setHover(i + 1)
                        }}
                        onMouseLeave={() => {
                            setHover(null)
                        }}
                        suppressHydrationWarning
                        type="button"
                    >
                        <svg fill="none" height="24" suppressHydrationWarning viewBox="0 0 24 24" width="24">
                            <path
                                d="M12 0.586914L15.668 8.15491L24 9.30591L17.936 15.1339L19.416 23.4129L12 19.4459L4.583 23.4129L6.064 15.1339L0 9.30591L8.332 8.15491L12 0.586914Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                ))}
            </div>
            <span className="pt-1 text-lg font-medium">
                {averageRating}/5 ({rating.length} vote{rating.length !== 1 && 's'})
            </span>
        </section>
    )
}
