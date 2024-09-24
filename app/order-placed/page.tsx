import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="md:px-16 md:py-12 py-8 px-8 flex flex-col items-center justify-center min-h-[40vh]">
      <h1 className="text-4xl font-garamond">Order Placed</h1>
      <p className="my-4">
        A copy of your receipt has been sent to your email.
      </p>
      <Link href="/" className="py-4 px-8 border border-container">
        Back To Home
      </Link>
    </div>
  )
}

export default page
