import '@/styles/_globalStyles.scss'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="body-styled">{children}</body>
    </html>
  )
}
