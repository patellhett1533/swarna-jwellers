import React from 'react'
import OrderTypeForm from '../_components/OrderTypeForm'

const page = () => {
  return (
    <div className="md:px-16 md:py-12 py-8 px-8 flex items-start gap-12">
      <div className="w-3/5 ">
        <p className="text-4xl font-garamond capitalize pb-8 border-b border-container">
          My Information
        </p>
        <div className="mt-4">
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-container p-4 outline-none"
            />
            <input
              type="text"
              inputMode="tel"
              placeholder="Mobile Number"
              className="w-full border border-container p-4 outline-none"
            />
            <textarea
              className="w-full border border-container p-4 outline-none"
              placeholder="Address"
            ></textarea>
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="City"
                className="w-full border border-container p-4 outline-none"
              />
              <input
                type="text"
                placeholder="State"
                className="w-full border border-container p-4 outline-none"
              />
              <input
                type="text"
                inputMode="numeric"
                placeholder="Zipcode"
                className="w-full border border-container p-4 outline-none"
              />
            </div>
          </form>
        </div>
        <OrderTypeForm />
      </div>
      <div className="w-2/5 sticky top-8">
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
