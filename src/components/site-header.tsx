import { NavLink } from 'react-router-dom'
import { ThemeToggle } from './theme-toggle'
import { cn } from '../lib/utils'

const links = [
  { to: '/', label: 'Home' },
  { to: '/lab', label: 'Lab' },
  { to: '/notes', label: 'Notes' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <NavLink to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold tracking-tight">billionth‑shit</span>
          </NavLink>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    'transition-colors hover:text-foreground/80 text-foreground/60',
                    isActive && 'text-foreground'
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

