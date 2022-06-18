/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/Client'
const Product = ({product}) => {

  const { name, image, price, slug } = product;
  return (
    <div>
      <Link href={`/product/${slug.current}`} passHref>
          <div className='product-card'>
            <img 
              src={urlFor(image && image[0])}
              height= {250}
              width= {250}
              className='product-image'
            />
            <p className='product-name'>{name} </p>
            <p className='product-price'> ${price}</p>
          </div>
      </Link>
    </div>
  )
}

export default Product