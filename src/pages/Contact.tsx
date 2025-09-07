export default function Contact() {
  return (
    <div className="container py-12">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="mt-2 text-muted-foreground">
        Drop a line at: <a href="mailto:hello@billionth-shit.org" className="underline">hello@billionth-shit.org</a> or reach out on socials.
      </p>
      <form className="mt-8 max-w-md space-y-3" onSubmit={(e) => e.preventDefault()}>
        <input className="w-full rounded-md border bg-background px-3 py-2" placeholder="Your email" />
        <textarea className="w-full rounded-md border bg-background px-3 py-2" placeholder="Say hi..." rows={4} />
        <button className="h-10 rounded-md bg-primary px-4 text-primary-foreground hover:bg-primary/90" type="submit">Send</button>
      </form>
    </div>
  )
}

