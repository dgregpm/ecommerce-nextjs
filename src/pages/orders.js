import { useSession } from 'next-auth/react'
import React from 'react'
import Header from '../components/Header'


function Orders({ orders }) {
    const { data: session } = useSession()

  return (
    <div>
        <Header />
        <main className='max-w-screen-lg mx-auto p-10'>
            <h1 className='text-3xl border-b mb-2 pb-1 border-yellow-400'>
                Your Orders
            </h1>
        {session ? (
            <h2>X Orders</h2>
        ) : (
            <h2>Please sign in to see your orders</h2>
        )}
        </main>
    </div>
  )
}

export default Orders