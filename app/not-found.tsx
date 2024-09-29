import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="text-center min-h-[40vh] flex items-center justify-center">
      <div>
        <h2 className="text-4xl font-garamond text-center capitalize">
          Not Found
        </h2>
        <p className="mb-8">Could not find this page</p>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  )
}
