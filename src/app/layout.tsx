import '@/styles/_globalStyles.module.css'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="body-test">{children}</body>
    </html>
  )
}
