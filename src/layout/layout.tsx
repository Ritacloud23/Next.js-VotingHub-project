import React from 'react'
type LayoutProps = {
    children: React.ReactNode
}

const layout = ({children}: LayoutProps) => {
  return (
    <div>
        <main>
            {children}
        </main>
    </div>
  )
}

export default layout