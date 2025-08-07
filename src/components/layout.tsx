import SiteFooter from '@/components/main/site-footer'
import SiteHeader from '@/components/main/site-header'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  )
}
