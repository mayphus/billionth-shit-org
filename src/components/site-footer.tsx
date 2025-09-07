export function SiteFooter() {
  return (
    <footer className="border-t py-8 mt-16">
      <div className="container text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} billionth-shit.org</p>
        <p className="text-xs">
          Built with React + Tailwind + shadcn‑style components. Deployed on Cloudflare Workers.
        </p>
      </div>
    </footer>
  )
}

