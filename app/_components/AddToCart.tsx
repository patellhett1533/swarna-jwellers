'use client'
import { addItemToCart } from '@/lib/features/cartSlice'
import { hidePopup, showPopup } from '@/lib/features/toastSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

interface Props {
  id: number
  price: number
}

const AddToCart = (props: Props) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        id: props.id,
        price: props.price,
        quantity: 1,
      })
    )
    dispatch(showPopup(`🎉 Item added to cart`))
    setTimeout(() => {
      dispatch(hidePopup())
    }, 8000)
  }
  return (
    <div
      className="text-center py-4 px-12 bg-container w-fit cursor-pointer"
      onClick={handleAddToCart}
    >
      Add To Cart
    </div>
  )
}

export default AddToCart
