'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="md:h-20 h-16 md:px-8 px-8 flex items-center justify-between">
      <div onClick={() => setOpen(!open)} className="md:hidden">
        <Image src="/images/hamburger.svg" alt="Save" width={25} height={25} />
      </div>
      <Link href="/">
        <Image
          src="/images/swarna-logo.png"
          alt="Swarna Logo"
          width={150}
          height={20}
          className="md:w-40 w-32"
        />
      </Link>
      <ul
        className={`flex items-center md:gap-8 gap-6 max-md:fixed max-md:bg-background max-md:flex-col max-md:w-full ${open ? 'max-md:top-0' : 'max-md:-top-full'} max-md:left-0 max-md:h-40 max-md:justify-center transition-all duration-500 max-md:shadow-lg`}
      >
        <div
          className="md:hidden absolute top-8 -translate-y-1/2 left-8"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/hamburger.svg"
            alt="Save"
            width={25}
            height={25}
          />
        </div>
        <Link href="/neckleces" className="uppercase font-light">
          Jwellery
        </Link>
        <Link href="/new-release" className="uppercase font-light">
          New Release
        </Link>
        <Link href="/gifts" className="uppercase font-light">
          Gifts
        </Link>
      </ul>
      <div className="flex items-center gap-8">
        <Link href="#" className="max-md:hidden">
          <Image src="/images/user.svg" alt="Save" width={25} height={25} />
        </Link>
        <Link href="#" className="max-md:hidden">
          <Image src="/images/save.svg" alt="Save" width={25} height={25} />
        </Link>
        <Link href="/cart">
          <Image src="/images/cart.svg" alt="Save" width={25} height={25} />
        </Link>
      </div>
    </div>
  )
}

export default Header
