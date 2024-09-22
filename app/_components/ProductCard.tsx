import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  name: string
  price: number
  img: string
  link: string
}

const ProductCard = (props: Props) => {
  return (
    <Link href={props.link}>
      <Image src={props.img} alt="Initial Pendant" width={300} height={300} />
      <p className="text-lg mt-2">{props.name}</p>
      <p>${props.price}</p>
    </Link>
  )
}

export default ProductCard
