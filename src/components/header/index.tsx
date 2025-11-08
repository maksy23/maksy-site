import { cn } from '@/lib/utils'

import NavigationMenu from './navigation-menu'

type HeaderProps = {
  className?: string
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={cn('w-full p-7', className)}>
      <div className='mx-auto flex w-xs flex-row'>
        <NavigationMenu />
        <div>Play@</div>
      </div>
    </header>
  )
}
