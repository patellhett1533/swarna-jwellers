import React from 'react'
import Image from 'next/image'
import ProductCard from '../_components/ProductCard'

const page = () => {
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
        <div className="flex items-center justify-between">
          <div className="flex md:items-center md:gap-8 gap-2 max-md:flex-col">
            <p className="text-3xl font-garamond">Neckleces</p>
            <p className="translate-y-0.5 max-md:hidden">
              With new beginnings come more pendants.
            </p>
          </div>
          <div className="md:p-4 p-3 border border-text w-fit cursor-pointer max-md:text-sm">
            Shop All Neckleces
          </div>
        </div>
        <div className="grid md:grid-cols-5 grid-cols-2 mt-16 md:gap-12 gap-6 md:pb-16 pb-8 border-b border-container">
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
      </section>
      <section className="md:px-16 md:py-12 py-8 px-8">
        <div className="flex items-center justify-between">
          <div className="flex md:items-center md:gap-8 gap-2 max-md:flex-col">
            <p className="text-3xl font-garamond">Earrings</p>
            <p className="translate-y-0.5 max-md:hidden">
              Adorn your ears with the new atmosphere.
            </p>
          </div>
          <div className="md:p-4 p-3 border border-text w-fit cursor-pointer max-md:text-sm">
            Shop All Earrings
          </div>
        </div>
        <div className="grid md:grid-cols-5 grid-cols-2 mt-16 md:gap-12 gap-6">
          <ProductCard
            name="Chain Drops"
            price={40}
            img="/images/chain-drops.png"
            link="#"
          />
          <ProductCard
            name="Diamond Studs"
            price={200}
            img="/images/diamond-studs.png"
            link="#"
          />
          <ProductCard
            name="Mini Hoops"
            price={90}
            img="/images/mini-hoops.png"
            link="#"
          />
          <ProductCard
            name="Dangling Leaves"
            price={60}
            img="/images/dangling-leaves.png"
            link="#"
          />
          <ProductCard
            name="Leaf Studs"
            price={40}
            img="/images/leaf-studs.png"
            link="#"
          />
        </div>
      </section>
    </>
  )
}

export default page
