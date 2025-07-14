import './globals.css'
import Link from 'next/link'
export const metadata = {
  title: 'NextBridge - Study & Work Abroad',
  description: 'Helping students and workers go abroad with confidence.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-sans bg-white text-gray-900">
        {/* Header */}
        <header className="bg-blue-600 text-white p-4">
          <nav className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">NextBridge</h1>
            <div className="space-x-4">
            <a href="/" className="hover:underline">Trang Chủ</a>

        <Link href="/about" className="hover:underline">Giới Thiệu</Link>

        
        <a href="/contact" className="hover:underline">Liên Hệ</a>
            </div>
          </nav>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
          © {new Date().getFullYear()} NextBridge. All rights reserved.
        </footer>
      </body>
    </html>
  )
}