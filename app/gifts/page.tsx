import Image from 'next/image'
import React from 'react'

const gifts = [
  {
    name: 'Gift Under $100',
    image: '/images/under-100-gift.png',
    link: '#',
  },
  {
    name: 'Gifts $200 - $300',
    image: '/images/200-to-300-gift.png',
    link: '#',
  },
  {
    name: 'Gifts $300 & Above',
    image: '/images/300-to-above-gift.png',
    link: '#',
  },
  {
    name: 'Gifts For Him',
    image: '/images/gift-for-him.png',
    link: '#',
  },
  {
    name: 'Gifts For Her',
    image: '/images/gift-for-her.png',
    link: '#',
  },
  {
    name: 'Gifts For Them',
    image: '/images/gift-for-them.png',
    link: '#',
  },
]

const page = () => {
  return (
    <div className="md:px-16 md:py-12 py-8 px-8">
      <h1 className="text-4xl font-garamond text-center">Gifts</h1>
      <p className="text-center mt-2">Lorem epsum dolor sit amet</p>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 md:gap-16 gap-8">
        {gifts.map((gift, index) => (
          <div key={index}>
            <Image
              src={gift.image}
              alt="Gift"
              width={300}
              height={300}
              className="w-full"
            />
            <p className="text-lg mt-2 text-center">{gift.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
