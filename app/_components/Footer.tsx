import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#DDD9D7] px-12 py-8">
      <div>
        <div className="flex items-start gap-8 justify-between max-md:flex-wrap">
          <div>
            <p className="font-garamond text-2xl mb-4">CUSTOMER SERVICE</p>
            <ul className="flex flex-col gap-2">
              <Link href="#">Contact Us</Link>
              <Link href="#">Track Your Order</Link>
              <Link href="#">Shipping & Returns</Link>
              <Link href="#">FAQs</Link>
              <Link href="#">Schedule an appointment</Link>
            </ul>
          </div>
          <div>
            <p className="font-garamond text-2xl mb-4">ABOUT US</p>
            <ul className="flex flex-col gap-2">
              <Link href="#">Origin</Link>
              <Link href="#">Our Purpose</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Sustainability</Link>
              <Link href="#">Giving Back</Link>
            </ul>
          </div>
          <div>
            <p className="font-garamond text-2xl mb-4">MATERIAL CARE</p>
            <ul className="flex flex-col gap-2">
              <Link href="#">Jewelry Repair</Link>
              <Link href="#">Ring Sizing</Link>
              <Link href="#">Metal Allergy Resources</Link>
              <Link href="#">Styling Tips</Link>
            </ul>
          </div>
          <div>
            <p className="font-garamond text-2xl mb-4">
              You can be one step ahead.
            </p>
            <p className="font-garamond text-xl mb-4">
              Sign up to hear about our updates on the dot.
            </p>
            <div className="bg-background px-4 flex items-center justify-between">
              <input
                type="text"
                className="bg-transparent py-4 outline-none"
                placeholder="Enter your email"
              />
              <button className="">SIGN UP</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 flex items-center justify-between max-md:flex-col">
        <p>&copy; {new Date().getFullYear()} Swarna Jwellers</p>
        <div className="flex items-center gap-4 max-md:hidden">
          <Link href="#" className="text-sm">
            PRIVACY POLICY
          </Link>
          <Link href="#" className="text-sm">
            TERMS OF USE
          </Link>
          <Link href="#" className="text-sm">
            SITEMAP
          </Link>
          <Link href="#" className="text-sm">
            DO NOT SELL MY INFORMATION
          </Link>
          <Link href="#" className="text-sm">
            COOKIES
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
