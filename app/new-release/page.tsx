import React from 'react'
import Image from 'next/image'
import jwelleryDetail from '@/data/product.json'
import ProductCard from '../_components/ProductCard'
import { notFound } from 'next/navigation'

const getNewReleaseProduct = async () => {
  return jwelleryDetail.sort(() => 0.5 - Math.random()).slice(0, 20)
}

const page = async () => {
  const product = await getNewReleaseProduct()

  if (product.length === 0) notFound()
  return (
    <>
      <section className="relative">
        <Image
          src="/images/new-release-banner.png"
          alt="New Release"
          width={1920}
          height={500}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <p className="uppercase text-lg max-md:hidden">New Releases</p>
          <p className="md:text-5xl text-3xl font-garamond md:mt-4">
            the autumn equinox
          </p>
          <p className="mt-4 max-md:hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
      <section className="md:px-16 md:py-12 py-8 px-8">
        <div className="grid grid-cols-5 gap-8 mt-12">
          {product.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              img={product.images.split(', ')[0]}
              link={product.alias}
              category={product.category}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default page
