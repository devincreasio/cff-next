import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { PostFragmentFragment } from '@/graphql/generated/sdk'
import { formatDate } from '@/lib/utils'

interface BlogCardProps {
    post?: null | PostFragmentFragment
}

export default function BlogCard({ post }: BlogCardProps) {
    if (!post) return null
    return (
        <Link
            className={`flex flex-col gap-5 rounded-xl border border-neutral-300 bg-white px-6 py-4`}
            href={`/blog/${post.Slug}`}
            title={`Read more about ${post.Title}`}
        >
            <Image
                alt={post.ImageFile?.alternativeText ?? ''}
                className="h-[290px] w-full shrink-0 rounded-md object-contain object-center"
                height={290}
                src={post.ImageFile?.url ?? ''}
                width={400}
            />
            <div className="flex flex-1 flex-col">
                <div
                    className={`
                      mb-3 flex min-h-[43px] items-center justify-between gap-3 border-b border-primary-200 pb-3
                    `}
                >
                    {post.category?.category && (
                        <Badge
                            className="font-semibold"
                            style={{
                                backgroundColor: `${post.category.color}1a`,
                                color: `${post.category.color}`,
                            }}
                        >
                            {post.category.category}
                        </Badge>
                    )}
                    <span className="ml-auto text-xs text-neutral-600">{formatDate(post.updatedAt)}</span>
                </div>
                <p className="mb-4 flex-1 leading-[140%] font-semibold">{post.Title}</p>
                <p
                    className={`
                      flex items-center gap-2 py-2 text-sm font-semibold text-primary-100 transition-colors
                      hover:text-primary-200
                    `}
                >
                    <span>Read more</span>
                    <ChevronRight className="size-3" />
                </p>
            </div>
        </Link>
    )
}
