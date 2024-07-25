import { ReactNode } from "react"
import { MainHeader } from "../Header/MainHeader";

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <MainHeader />
      <main className="bg-primary min-h-screen">
        { children }
      </main>
    </>
  )
}
