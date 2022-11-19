import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header>
      {/* Top Div */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
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
        <div>
          <input type="text" />
        </div>
      </div>
      
      {/* Bottom Div */}
      <div></div>
    </header>
  )
}

export default Header;