import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="relative">
      <Image
        src="/images/about-us-banner.png"
        alt="About Us"
        width={300}
        height={300}
        className="w-full h-max"
      />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2">
        <p className="text-4xl text-white font-garamond">About Us</p>
      </div>
    </div>
  )
}

export default page
