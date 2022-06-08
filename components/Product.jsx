import React from 'react';
import Link from 'next/link';

import { urlFor } from '../Lib/client';  //we use to have the image from our sanity dashboard

const Product = 

({ product: {image, name , slug, price} }) => {
  return (
    <div>

      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img 
          src={urlFor (image && image[0])}
          width={250}
          height={250}
          className="product-image"
          alt=""></img>

          <p className=' product-name'>{name}</p>
          <p className=' product-price'>${price}</p>
          

        </div>
      </Link>
    </div>
  )
}

export default Product