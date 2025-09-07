export default function Lab() {
  const experiments = [
    { name: 'Experiment A', status: 'Draft' },
    { name: 'Experiment B', status: 'Live' },
  ]
  return (
    <div className="container py-12">
      <h1 className="text-2xl font-semibold">Lab</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {experiments.map((ex) => (
          <div key={ex.name} className="rounded-lg border p-4">
            <div className="font-medium">{ex.name}</div>
            <div className="text-xs text-muted-foreground">{ex.status}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

