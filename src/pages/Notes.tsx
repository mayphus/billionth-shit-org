export default function Notes() {
  const posts = [
    { title: 'The art of shipping tiny', date: '2025-08-31' },
    { title: 'When procrastination is a feature', date: '2025-08-15' },
  ]
  return (
    <div className="container py-12">
      <h1 className="text-2xl font-semibold">Notes</h1>
      <ul className="mt-6 space-y-3">
        {posts.map((p) => (
          <li key={p.title} className="rounded-lg border p-4 hover:bg-accent/30 transition">
            <div className="font-medium">{p.title}</div>
            <div className="text-xs text-muted-foreground">{p.date}</div>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-muted-foreground">
        Swap this for a real blog later (MDX, CMS, or Notion).
      </p>
    </div>
  )
}

