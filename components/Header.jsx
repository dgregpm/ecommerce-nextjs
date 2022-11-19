import React from 'react'
import Image from 'next/image'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <header>
      {/* Top Div */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 px-4">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40} 
            alt={''}
            objectFit="contain"
            className='cursor-pointer'
            />
        </div>

        {/* Search */}
        <div className='hidden sm:flex bg-yellow-400 hover:bg-yellow-500 items-center h-10 rounded-md flex-grow cursor-pointer'>
          <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type="text" />
          <MagnifyingGlassIcon className='h-12 p-3'/>
          
        </div>

        {/* Right Side */}
        <div className='flex text-white items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
          <div className='link'>
            <p>Hello, Sonny Sangha!</p>
            <p className='font-extrabold md:text-sm'>Account & Lists</p>
          </div>
          <div className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>
          <div className='flex relative items-center link'>
            <span className='text-black absolute top-0 right-0 md:right-10 h-4 w-4 text-center bg-yellow-400 rounded-full'>0</span>
            <ShoppingCartIcon className='h-12' />
            <p className='hidden mt-3 md:inline font-extrabold md:text-sm'>Basket</p>
          </div>
        </div>

      </div>
      
      {/* Bottom Div */}
      <div>
        <p>
          <Bars3Icon className='h-12'/>
          All
        </p>
      </div>
    </header>
  )
}

export default Header;