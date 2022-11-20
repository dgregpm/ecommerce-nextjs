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
            className='object-cover m-auto'
            src={image}
            height={200}
            width={200}
            alt={''}            
        />

        <h4 className='my-3'>{title}</h4>

        <div className='flex'>
            {Array(rating).fill().map((i) => (
                <StarIcon 
                    key={i}
                    className='h-5 text-yellow-500'
                />
            ))}
        </div>

        <p className='text-xs my-2 line-clamp-3'>{description}</p>

        <div className='mb-5'>
            <Currency quantity={price} currency='USD'/>
        </div>

        {hasPrime && (
            <div className='flex items-center space-x-2 -mt-5'>
                <Image className='w-12'
                src="https://links.papareact.com/fdw" 
                alt={""}
                height={100}
                width={100}
                 />
                <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
            </div>
        )}

        <button className='button'>Add to Basket</button>
    </div>
  )
}

export default Product