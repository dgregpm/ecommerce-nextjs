import Image from 'next/image'
import React, { useState } from 'react'
import {StarIcon} from '@heroicons/react/20/solid'
import Currency from 'react-currency-formatter'

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({id,title,price,description,category,image}) {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    
    const [hasPrime] = useState(
        Math.random() < .25
    );

    return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
        <p className='absolute top-2 right-2 italic text-gray-400'>{category}</p>

        <Image 
            className='object-contain'
            src={image}
            height={200}
            width={200}
        />

        <h4 className='my-3'>{title}</h4>

        <div className='flex'>
            {Array(rating).fill().map((i) => (
                <StarIcon 
                    className='h-5 text-yellow-500'
                />
            ))}
        </div>

        <p className='text-xs my-2'>{description}</p>

        <div>
            <Currency quantity={price} currency='USD'/>
        </div>

        {hasPrime && (
            <div>
                <img src="https://links.papareact.com/fdw" alt="" />
                <p>FREE Next-day Delivery</p>
            </div>
        )}

        <button>Add to Basket</button>
    </div>
  )
}

export default Product