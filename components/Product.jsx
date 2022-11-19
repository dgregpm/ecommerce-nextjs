import Image from 'next/image'
import React, { useState } from 'react'
import {StarIcon} from '@heroicons/react/20/solid'

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
    <div>
        <p>{category}</p>

        <Image 
            className='object-contain'
            src={image}
            height={200}
            width={200}
        />

        <h4>{title}</h4>

        <div className='flex'>
            {Array(rating).fill().map((i) => (
                <StarIcon 
                    className='h-5'
                />
            ))}
        </div>

        {hasPrime && <p>Prime!</p>}
        
        <p>{description}</p>

    </div>
  )
}

export default Product