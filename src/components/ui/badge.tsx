import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
    `
      inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-sm border border-neutral-200
      px-2 py-1.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow]
      focus-visible:border-neutral-800 focus-visible:ring-[3px] focus-visible:ring-neutral-800/50
      aria-invalid:border-red-500 aria-invalid:ring-red-500/20
      [&>svg]:pointer-events-none [&>svg]:size-3
    `,
    {
        defaultVariants: {
            variant: 'default',
        },
        variants: {
            variant: {
                default: `border-transparent bg-primary-100 text-white [a&]:hover:bg-primary-100`,
            },
        },
    },
)

function Badge({
    asChild = false,
    className,
    variant,
    ...props
}: { asChild?: boolean } & React.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
    const Comp = asChild ? Slot : 'span'

    return <Comp className={cn(badgeVariants({ variant }), className)} data-slot="badge" {...props} />
}

export { Badge, badgeVariants }
