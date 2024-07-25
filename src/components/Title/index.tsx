import { ReactNode } from "react"
import { twMerge } from "tailwind-merge";

interface ChildrenProps {
    children: ReactNode | string;
    variant?: keyof JSX.IntrinsicElements;
    className?: string;
}

export const Title = ({ children, variant: Tag = 'h1', className }: ChildrenProps) => {
    return <Tag className={twMerge(className)}>{children}</Tag>;
}
