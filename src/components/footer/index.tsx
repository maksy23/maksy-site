import { cn } from '@/lib/utils'

type FooterProps = {
  className?: string
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('w-full text-center', className)}>
      <div>maksy.dev</div>
      <div>@ 2025 Maksym Yakovenko. All rights reserved.</div>
    </footer>
  )
}
