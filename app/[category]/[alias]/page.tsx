import React from 'react'
import Image from 'next/image'
import jwelleryDetail from '@/data/product.json'
import ProductCard from '@/app/_components/ProductCard'
import { notFound } from 'next/navigation'
import AddToCart from '@/app/_components/AddToCart'

const getProductDetail = async (category: string, alias: string) => {
  const data = jwelleryDetail.find(
    (item) => item.category === category && item.alias === alias
  )
  return data
}

const getRecomendProduct = async (category: string) => {
  return jwelleryDetail.sort(() => 0.5 - Math.random()).slice(0, 5)
}

const page = async ({
  params,
}: {
  params: { category: string; alias: string }
}) => {
  const productDetail = await getProductDetail(params.category, params.alias)
  const recomendedProduct = await getRecomendProduct(params.category)

  if (!productDetail) notFound()
  return (
    <div className="md:px-16 md:py-12 py-8 px-8">
      <div className="flex items-start gap-12">
        <div className="w-2/5">
          <Image
            src={productDetail.images.split(', ')[0]}
            alt=""
            width={300}
            height={300}
            className="w-full h-max"
          />
        </div>
        <div className="w-3/5">
          <p className="text-4xl font-garamond mb-4">{productDetail.name}</p>
          <p className="text-2xl mb-8">₹{productDetail.price}</p>
          <p className="mb-8">{productDetail.description}</p>
          <AddToCart
            id={productDetail.id}
            price={Number(productDetail.price.replace(/,/g, ''))}
          />
          <div className="mt-8">
            <p className="text-lg">Details</p>
            <ul className="mt-4 list-disc list-inside">
              <li>Gross Weight: {productDetail.weight}</li>
              {productDetail.points.split(',').map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <p className="text-4xl font-garamond capitalize">Recommended for you</p>
        <p>Based on your history</p>
        <div className="grid grid-cols-5 gap-8 mt-12">
          {recomendedProduct.map((product, index) => (
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
      </div>
    </div>
  )
}

export default page
