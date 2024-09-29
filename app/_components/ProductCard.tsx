import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  name: string
  price: string
  img: string
  link: string
  category: string
}

const ProductCard = (props: Props) => {
  return (
    <Link href={`/${props.category}/${props.link}`}>
      <Image src={props.img} alt="Initial Pendant" width={300} height={300} />
      <p className="text-lg mt-2 line-clamp-2">{props.name}</p>
      <p>₹{props.price}</p>
    </Link>
  )
}

export default ProductCard
