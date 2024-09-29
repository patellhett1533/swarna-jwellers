import Image from 'next/image'
import React from 'react'
import CartBox from '../_components/CartBox'

const page = () => {
  return (
    <div className="md:px-16 md:py-12 py-8 px-8 flex items-start gap-12 max-md:flex-col">
      <CartBox />
    </div>
  )
}

export default page
