import clsx from 'clsx'
import { useMemo } from 'react'

interface PostContentTitleProps {
    activeTitle: string
    title: string
}

export function PostContentTitle({ activeTitle, title }: PostContentTitleProps) {
    const isActive = useMemo(() => {
        return title.toLowerCase().trim() === activeTitle.toLowerCase().trim()
    }, [title, activeTitle])

    return (
        <a
            className={clsx('leading-[160%] transition-colors', {
                'text-neutral-600 hover:text-primary-100': !isActive,
                'text-primary-100': isActive,
            })}
            href={`#${title
                .replaceAll(/[^a-z0-9- ]/gi, '')
                .replaceAll(/ /gi, '-')
                .toLowerCase()}`}
        >
            {title}
        </a>
    )
}
