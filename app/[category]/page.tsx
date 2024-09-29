import React from 'react'
import ProductCard from '../_components/ProductCard'
import jwelleryDetail from '@/data/product.json'
import { notFound } from 'next/navigation'

const getCategoryProduct = async (category: string) => {
  const data = jwelleryDetail.filter((item) => item.category === category)
  return data
}

const page = async ({ params }: { params: { category: string } }) => {
  const products = await getCategoryProduct(params.category)

  if (products.length === 0) notFound()

  return (
    <div className="md:px-16 md:py-12 py-8 px-8">
      <h1 className="text-4xl font-garamond text-center capitalize">
        {params.category}
      </h1>
      <p className="text-center mt-2">Lorem epsum dolor sit amet</p>
      <div className="grid md:grid-cols-5 grid-cols-2 mt-16 md:gap-12 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            img={product.images.split(', ')[0]}
            link={product.alias}
            category={product.category}
          />
        ))}
        {/* <ProductCard
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
        /> */}
      </div>
    </div>
  )
}

export default page
