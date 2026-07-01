import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-[var(--color-cream)] min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-9xl font-serif text-[var(--color-primary)] opacity-20 leading-none">
          404
        </div>
        <h1 className="font-serif text-4xl text-[var(--color-ink)] mt-4">
          Page Not Found
        </h1>
        <p className="text-[var(--color-muted)] mt-2 text-lg">
          The page you're looking for doesn't exist.
        </p>
        <div className="flex items-center justify-center gap-4 mt-8">
          <Link
            href="/"
            className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-md hover:bg-[var(--color-dark)] transition-colors duration-200 font-medium"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="border-2 border-[var(--color-border)] text-[var(--color-ink)] px-8 py-3 rounded-md hover:bg-[var(--color-light)] transition-colors duration-200 font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}