'use client'
import React, { useCallback, useEffect } from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import {
  addItemToCart,
  decreaseItemQuantity,
  removeItemFromCart,
} from '@/lib/features/cartSlice'
import { hidePopup, showPopup } from '@/lib/features/toastSlice'
import jwelleryProduct from '@/data/product.json'
import Link from 'next/link'

const CartBox = () => {
  const dispatch = useDispatch()
  const [cartProduct, setCartProduct] = React.useState<
    {
      id: string
      image: string
      name: string
      price: string
      quantity: number
    }[]
  >([])
  const [totalCart, setTotalCart] = React.useState(0)

  const handleRemoveToCart = useCallback(
    (id: string) => {
      dispatch(removeItemFromCart(Number(id)))
      dispatch(showPopup(`Item removed from cart`))
      setTimeout(() => {
        dispatch(hidePopup())
      }, 8000)
    },
    [dispatch]
  )

  const handleQuantity = useCallback(
    (id: string) => {
      dispatch(
        addItemToCart({
          id: Number(id),
          price: Number(
            jwelleryProduct.find((product) => product.id.toString() == id)
              ?.price
          ),
          quantity: 1,
        })
      )
    },
    [dispatch]
  )

  const handleDecreaseQuantity = useCallback(
    (id: string) => {
      dispatch(decreaseItemQuantity(Number(id)))
    },
    [dispatch]
  )

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('jwellery-cart') || '[]').items

    const CartProductDetail =
      data &&
      data.map(
        (item: {
          id: string
          image: string
          name: string
          price: string
          quantity: number
        }) => {
          return {
            id: item.id,
            image: jwelleryProduct
              .find((product) => product.id.toString() == item.id)
              ?.images.split(', ')[0],
            name: jwelleryProduct.find(
              (product) => product.id.toString() == item.id
            )?.name,
            price: item.price,
            quantity: item.quantity,
          }
        }
      )
    setCartProduct(CartProductDetail)
    setTotalCart(
      JSON.parse(localStorage.getItem('jwellery-cart') || '[]').totalAmount
    )
  }, [handleRemoveToCart, handleQuantity, handleDecreaseQuantity])

  const formatToIndianCurrency = (number: string) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0, // If you don't want decimal places
    }).format(Number(number))
  }

  return (
    <>
      <div className="md:w-3/5 w-full">
        <p className="text-4xl font-garamond capitalize mb-8">Order Review</p>
        <div className="w-full">
          {cartProduct &&
            cartProduct.map((item, index) => (
              <div
                className="w-full py-8 border-t border-container flex items-start justify-between"
                key={index}
              >
                <div className="flex items-start gap-4">
                  <Image
                    src={item.image}
                    alt=""
                    width={100}
                    height={100}
                    className="w-28 h-auto"
                  />
                  <div className="h-auto flex flex-col justify-between gap-4">
                    <div>
                      <p className="text-xl">{item.name}</p>
                      <p className="text-lg">
                        {formatToIndianCurrency(item.price)}
                      </p>
                      <p className="">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-8 ">
                  <p className="text-xl max-md:hidden">
                    {formatToIndianCurrency(item.price)}
                  </p>
                  <button onClick={() => handleRemoveToCart(item.id)}>
                    <Image
                      src="/images/delete.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="min-w-5"
                    />
                  </button>
                </div>
              </div>
            ))}
          <div className="w-full border-t border-container"></div>
        </div>
      </div>
      <div className="md:w-2/5 md:sticky md:top-8 w-full">
        <p className="text-4xl font-garamond capitalize mb-8">Order Total</p>
        <div className="w-full py-4 border-t border-container flex items-center justify-between">
          <p>Subtotal</p>
          <p>{formatToIndianCurrency(totalCart.toString())}</p>
        </div>
        <div className="w-full py-4 border-t border-container flex items-center justify-between">
          <p>Tax</p>
          <p>{formatToIndianCurrency((totalCart * 0.08).toString())}</p>
        </div>
        <div className="w-full py-4 border-t border-container flex items-center justify-between">
          <p>Shipping</p>
          <p>{formatToIndianCurrency('699')}</p>
        </div>
        <div className="w-full py-4 border-t border-container flex items-center justify-between">
          <p className="font-semibold">Total</p>
          <p className="font-semibold">
            {formatToIndianCurrency(
              (totalCart + 699 + totalCart * 0.08).toString()
            )}
          </p>
        </div>
        <div className="w-full py-4 border-t border-container flex items-center justify-between">
          <Link
            href="/information"
            className="w-full bg-container py-2 text-center"
          >
            Place Order
          </Link>
        </div>
      </div>
    </>
  )
}

export default CartBox
