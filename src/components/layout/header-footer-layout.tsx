import { Outlet } from 'react-router-dom'

import Footer from '../footer'
import Header from '../header'

export default function HeaderFooterLayout() {
  return (
    <div className='bg-background text-foreground flex min-h-screen flex-col'>
      <header>
        <div className='container mx-auto max-w-7xl px-4 py-6 md:px-6 lg:px-8'>
          <Header />
        </div>
      </header>

      <main className='flex-1'>
        <div className='container mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
          <Outlet /> {/* Child routes render here */}
        </div>
      </main>

      <footer className='bg-violet-900'>
        <div className='container mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
          <Footer />
        </div>
      </footer>
    </div>
  )
}
