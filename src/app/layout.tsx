import { Metadata } from 'next';
import './index.css';

export const metadata: Metadata = {
  title: {
    absolute: 'Next.js project',
    default: 'First Next.js project',
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Header</h1>
        </header>

        {children}

        <footer>
          <h1>Footer</h1>
        </footer>
      </body>

    </html>
  )
}
