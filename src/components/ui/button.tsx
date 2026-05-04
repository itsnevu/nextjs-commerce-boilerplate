import * as React from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'icon'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-black text-white hover:bg-zinc-800 shadow-lg shadow-black/5',
      secondary: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200',
      outline: 'bg-transparent border-2 border-black text-black hover:bg-black hover:text-white',
      ghost: 'bg-transparent text-zinc-600 hover:bg-zinc-100'
    }

    const sizes = {
      sm: 'px-4 py-2 text-[10px] tracking-[0.2em]',
      md: 'px-8 py-4 text-xs tracking-[0.3em]',
      lg: 'px-12 py-6 text-sm tracking-[0.3em]',
      icon: 'p-3'
    }

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center font-black uppercase transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
