import { HTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const Container = ({ children, ...rest }: ContainerProps) =>
  <div
    {...rest}
    className={twMerge(`flex max-w-[1200px] m-auto`, rest.className)}
  >{ children }</div>
