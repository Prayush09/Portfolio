import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border border-slate-300/20 bg-slate-800/70 text-slate-100 focus:ring-blue-600 focus:ring-offset-slate-950",
        secondary:
          "border border-slate-800 bg-slate-900/60 text-slate-100 focus:ring-blue-600 focus:ring-offset-slate-950",
        outline: "border border-slate-600/50 text-slate-200 focus:ring-blue-600 focus:ring-offset-slate-950",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
