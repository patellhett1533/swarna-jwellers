'use client'
import Image from 'next/image'
import React from 'react'

const ProductDetail = () => {
  const [isOpenDetail, setIsOpenDetail] = React.useState(false)
  const [isOpenTips, setIsOpenTips] = React.useState(false)
  return (
    <div>
      <div className="pb-2 border-b border-container cursor-pointer">
        <div
          className="flex items-center justify-between"
          onClick={() => setIsOpenDetail(!isOpenDetail)}
        >
          <p className="text-lg">Details</p>
          <Image
            src="/images/open-collapse.svg"
            alt=""
            width={20}
            height={20}
            className={`${isOpenDetail ? 'rotate-180' : ''}`}
          />
        </div>
        <div
          className={`${isOpenDetail ? 'max-h-full' : 'max-h-0'} overflow-hidden transition-[max-height]`}
        >
          <p className="mt-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            provident dolor a sunt velit illo nemo quaerat animi aperiam quia.
            Velit tempora soluta harum cumque?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vel
            nulla unde quis, illum distinctio. Beatae, animi dicta!
          </p>
        </div>
      </div>
      <div className="pb-2 border-b border-container cursor-pointer mt-2">
        <div
          className="flex items-center justify-between"
          onClick={() => setIsOpenTips(!isOpenTips)}
        >
          <p className="text-lg">Tips & Wearing</p>
          <Image
            src="/images/open-collapse.svg"
            alt=""
            width={20}
            height={20}
            className={`${isOpenTips ? 'rotate-180' : ''}`}
          />
        </div>
        <div
          className={`${isOpenTips ? 'max-h-full' : 'max-h-0'} overflow-hidden transition-[max-height]`}
        >
          <p className="mt-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            provident dolor a sunt velit illo nemo quaerat animi aperiam quia.
            Velit tempora soluta harum cumque?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vel
            nulla unde quis, illum distinctio. Beatae, animi dicta!
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
