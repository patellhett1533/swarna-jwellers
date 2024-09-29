import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="md:px-16 md:py-12 py-8 px-8 flex items-start gap-12 max-md:flex-col">
      <div className="md:w-3/5 w-full">
        <p className="text-4xl font-garamond capitalize mb-8">Order Review</p>
        <div className="w-full">
          <div className="w-full py-8 border-t border-container flex items-start justify-between">
            <div className="flex items-start gap-4">
              <Image
                src="/images/heart-drop.png"
                alt=""
                width={100}
                height={100}
                className="w-28 h-auto"
              />
              <div className="h-auto flex flex-col justify-between gap-4">
                <div>
                  <p className="text-xl">Heart Drop</p>
                  <p className="text-lg">$100.00</p>
                  <p className="">Quantity: 1</p>
                </div>
                <button className="text-start">Edit Order</button>
              </div>
            </div>
            <div className="flex items-center gap-8 ">
              <p className="text-xl max-md:hidden">$100.00</p>
              <button>
                <Image src="/images/delete.svg" alt="" width={20} height={20} />
              </button>
            </div>
          </div>
          {/* <div className="w-full py-8 border-t border-container flex items-start justify-between">
            <div className="flex items-start gap-4">
              <Image
                src="/images/heart-drop.png"
                alt=""
                width={100}
                height={100}
                className="w-24 h-auto"
              />
              <div className="h-auto flex flex-col justify-between gap-4">
                <div>
                  <p className="text-xl">Heart Drop</p>
                  <p className="">Quantity: 1</p>
                </div>
                <button className="text-start">Edit Order</button>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <p className="text-xl">$100.00</p>
              <button>
                <Image src="/images/delete.svg" alt="" width={20} height={20} />
              </button>
            </div>
          </div>
          <div className="w-full py-8 border-t border-container flex items-start justify-between">
            <div className="flex items-start gap-4">
              <Image
                src="/images/heart-drop.png"
                alt=""
                width={100}
                height={100}
                className="w-24 h-auto"
              />
              <div className="h-auto flex flex-col justify-between gap-4">
                <div>
                  <p className="text-xl">Heart Drop</p>
                  <p className="">Quantity: 1</p>
                </div>
                <button className="text-start">Edit Order</button>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <p className="text-xl">$100.00</p>
              <button>
                <Image src="/images/delete.svg" alt="" width={20} height={20} />
              </button>
            </div>
          </div>
          <div className="w-full py-8 border-t border-container flex items-start justify-between">
            <div className="flex items-start gap-4">
              <Image
                src="/images/heart-drop.png"
                alt=""
                width={100}
                height={100}
                className="w-24 h-auto"
              />
              <div className="h-auto flex flex-col justify-between gap-4">
                <div>
                  <p className="text-xl">Heart Drop</p>
                  <p className="">Quantity: 1</p>
                </div>
                <button className="text-start">Edit Order</button>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <p className="text-xl">$100.00</p>
              <button>
                <Image src="/images/delete.svg" alt="" width={20} height={20} />
              </button>
            </div>
          </div> */}
          <div className="w-full border-t border-container"></div>
        </div>
      </div>
      <div className="md:w-2/5 md:sticky md:top-8 w-full">
        <p className="text-4xl font-garamond capitalize mb-8">Order Total</p>
        <div className="w-full py-4 border-t border-container flex items-center justify-between">
          <p>Subtotal</p>
          <p>$200.00</p>
        </div>
        <div className="w-full py-4 border-t border-container flex items-center justify-between">
          <p>Tax</p>
          <p>$36.00</p>
        </div>
        <div className="w-full py-4 border-t border-container flex items-center justify-between">
          <p>Shipping</p>
          <p>$15.00</p>
        </div>
        <div className="w-full py-4 border-t border-container flex items-center justify-between">
          <p className="font-semibold">Total</p>
          <p className="font-semibold">$251.00</p>
        </div>
        <div className="w-full py-4 border-t border-container flex items-center justify-between">
          <button className="w-full bg-container py-2">Place Order</button>
        </div>
      </div>
    </div>
  )
}

export default page
