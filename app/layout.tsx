import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="h-100 w-full bg-mantle text-text">
      <head>
        <title>React & SN Incidents</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
