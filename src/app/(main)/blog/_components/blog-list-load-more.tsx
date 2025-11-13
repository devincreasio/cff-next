'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { ARTICLES_PER_PAGE } from '@/constants'
import { PostFragmentFragment } from '@/graphql/generated/sdk'

import BlogCard from './blog-card'

interface BlogListLoadMoreProps {
    data?: (null | PostFragmentFragment)[] | null
}

export default function BlogListLoadMore({ data }: BlogListLoadMoreProps) {
    const [visibleCount, setVisibleCount] = useState(ARTICLES_PER_PAGE)
    const hasMore = visibleCount < (data?.length ?? 0)

    const postsToShow = data?.slice(0, visibleCount) ?? []

    const handleLoadMore = () => {
        setVisibleCount((c) => c + ARTICLES_PER_PAGE)
    }

    return (
        <section className="relative py-16 lg:py-[90px]">
            <div className="container mx-auto flex flex-col gap-12">
                <div className="grid gap-6 lg:grid-cols-3 lg:gap-y-12">
                    {postsToShow.map((post) => (
                        <BlogCard key={post?.documentId} post={post} />
                    ))}
                </div>
                {hasMore && (
                    <div className="flex justify-center">
                        <Button disabled={!hasMore} onClick={handleLoadMore} variant="outline">
                            Load more
                        </Button>
                    </div>
                )}
            </div>
        </section>
    )
}
