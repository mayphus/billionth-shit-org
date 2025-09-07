export default function Projects() {
  const items = [
    { name: 'Tiny Tool #1', blurb: 'One-line description of a small tool.' },
    { name: 'Weird Widget', blurb: 'Something quirky and useful.' },
  ]
  return (
    <div className="container py-12">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <ul className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((it) => (
          <li key={it.name} className="rounded-lg border p-4">
            <div className="font-medium">{it.name}</div>
            <div className="text-sm text-muted-foreground">{it.blurb}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

