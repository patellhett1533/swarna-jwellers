'use client'
import React from 'react'

const OrderTypeForm = () => {
  const [orderType, setOrderType] = React.useState('shipment')
  return (
    <>
      <p className="text-4xl font-garamond capitalize pb-4 border-b border-container mt-12">
        How would you like to receive your order?
      </p>
      <div className="mt-4 flex items-center gap-4">
        <div className="flex items-center mb-4">
          <input
            id="shipment"
            name="default-checkbox"
            type="radio"
            value=""
            className="w-4 h-4 border-container rounded"
            checked={orderType === 'shipment'}
            onChange={() => setOrderType('shipment')}
          />
          <label htmlFor="shipment" className="ms-2 text-sm font-medium">
            By Shipment
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            id="inPerson"
            name="default-checkbox"
            type="radio"
            value=""
            className="w-4 h-4  border-container rounded"
            checked={orderType === 'inPerson'}
            onChange={() => setOrderType('inPerson')}
          />
          <label htmlFor="inPerson" className="ms-2 text-sm font-medium">
            In Person
          </label>
        </div>
      </div>
      {orderType === 'shipment' && (
        <div>
          <p className="text-4xl font-garamond capitalize pb-4 border-b border-container mt-12">
            Shipping Details
          </p>
          <div className="mt-4">
            <form className="flex flex-col gap-4">
              <textarea
                className="w-full border border-container p-4 outline-none"
                placeholder="Shipping Address"
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
        </div>
      )}
      {orderType === 'inPerson' && (
        <div>
          <p className="text-4xl font-garamond capitalize pb-4 border-b border-container mt-12">
            Pickup Location
          </p>
          <div className="mt-4">
            <p className="text-xl">Marigold Mall</p>
            <p>13 Greenleaf Ave.</p>
            <p>New York, NY 12345</p>
            <p className="mt-2">Pickup Available from 8 AM to 7 PM</p>
          </div>
        </div>
      )}
      <div>
        <p className="text-4xl font-garamond capitalize pb-4 border-b border-container mt-12">
          Billing Information
        </p>
        <div className="mt-4">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name on Card"
              className="w-full border border-container p-4 outline-none"
            />
            <input
              type="text"
              inputMode="numeric"
              placeholder="Debit/Credit Card Number"
              className="w-full border border-container p-4 outline-none"
            />
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Expire Date"
                className="w-full border border-container p-4 outline-none"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-full border border-container p-4 outline-none"
              />
              <input
                type="text"
                inputMode="numeric"
                placeholder="Zipcode"
                className="w-full border border-container p-4 outline-none"
              />
            </div>
            <textarea
              className="w-full border border-container p-4 outline-none"
              placeholder="Billing Address"
            ></textarea>
          </form>
        </div>
      </div>
    </>
  )
}

export default OrderTypeForm
