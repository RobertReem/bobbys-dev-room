import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Background grid effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(36, 150, 237, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(36, 150, 237, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Main content */}
      <main className="relative z-10">
        {children}
      </main>
    </div>
  )
}

export default Layout
