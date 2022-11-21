import React from 'react'
import Image from 'next/image'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline'
import {signIn, signOut, useSession} from 'next-auth/react'
import { useRouter } from 'next/router'

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();

  
  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div onClick={() => router.push('/')} className="mt-2 flex items-center flex-grow sm:flex-grow-0 ml-4 sm:mr-4">
          <Image
            src="https://links.papareact.com/f90"
            width={200}
            height={200}
            alt={''}
            className='cursor-pointer object-fill'
            />
        </div>

        {/* Search */}
        <div className='hidden sm:flex bg-yellow-400 hover:bg-yellow-500 items-center h-10 rounded-md flex-grow cursor-pointer'>
          <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type="text" />
          <MagnifyingGlassIcon className='h-12 p-3'/>
          
        </div>

        {/* Right Side */}
        <div className='flex text-white items-center text-xs space-x-4 mx-4 whitespace-nowrap'>
          <div onClick={!session ? signIn : signOut} className='link'>
            <p>
              {session ? `Hello, ${session.user.name}` : `Sign In`}
            </p>
            <p className='font-extrabold md:text-sm'>Account & Lists</p>
          </div>
          <div className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>
          <div onClick={() => router.push('/checkout')} className='flex relative items-center link'>
            <span className='text-black absolute top-0 right-0 md:right-10 h-4 w-4 text-center bg-yellow-400 rounded-full'>0</span>
            <ShoppingCartIcon className='h-12' />
            <p className='hidden mt-3 md:inline font-extrabold md:text-sm'>Basket</p>
          </div>
        </div>

      </div>
      
      {/* Bottom Nav */}
      <div className="flex space-x-3 p-2 pl-4 items-center bg-amazon_blue-light text-white text-sm whitespace-nowrap">
        <p className='link items-center flex'>
          <Bars3Icon className='h-6 mr-2 cursor-pointer'/>
          All
        </p>
        <p className='link'>Prime Video</p>
        <p className='link'>Amazon Business</p>
        <p className='link'>Today&apos;s Deals</p>
        <p className='link hidden lg:inline-flex'>Electronics</p>
        <p className='link hidden lg:inline-flex'>Food & Delivery</p>
        <p className='link hidden lg:inline-flex'>Prime</p>
        <p className='link hidden lg:inline-flex'>Buy Again</p>
        <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
        <p className='link hidden lg:inline-flex'>Health & Personal Care</p>

      </div>
    </header>
  )
}

export default Header;