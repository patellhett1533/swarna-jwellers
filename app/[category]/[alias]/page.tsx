import React from 'react'
import Image from 'next/image'
import ProductDetail from '@/app/_components/ProductDetail'
import ProductCard from '@/app/_components/ProductCard'

const page = ({ params }: { params: { category: string; alias: string } }) => {
  return (
    <div className="md:px-16 md:py-12 py-8 px-8">
      <div className="flex items-start gap-12">
        <div className="w-2/5">
          <Image
            src="/images/heart-drop.png"
            alt=""
            width={300}
            height={300}
            className="w-full h-max"
          />
        </div>
        <div className="w-3/5">
          <p className="text-4xl font-garamond mb-4">Heart Drop Chain</p>
          <p className="text-xl mb-8">$100.00</p>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="text-center py-4 px-12 bg-container w-fit cursor-pointer">
            Add To Cart
          </div>
          <div className="mt-8">
            <ProductDetail />
          </div>
        </div>
      </div>
      <div className="mt-12">
        <p className="text-4xl font-garamond capitalize">Recommended for you</p>
        <p>Based on your history</p>
        <div className="grid grid-cols-5 gap-8 mt-12">
          <ProductCard
            name="Initial Pendant"
            price={80}
            img="/images/initial-pendant.png"
            link="#"
          />
          <ProductCard
            name="Heart Drop"
            price={100}
            img="/images/heart-drop.png"
            link="#"
          />
          <ProductCard
            name="Leaf Pendant"
            price={90}
            img="/images/leaf-pendant.png"
            link="#"
          />
          <ProductCard
            name="Diamond Choker"
            price={300}
            img="/images/diamond-choker.png"
            link="#"
          />
          <ProductCard
            name="Ruby Pendant"
            price={250}
            img="/images/ruby-pendant.png"
            link="#"
          />
        </div>
      </div>
    </div>
  )
}

export default page
