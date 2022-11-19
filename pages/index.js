import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import ProductFeed from '../components/ProductFeed'

async function sigh() {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  return data 
}

export default function Home({products}) {
  console.log(sigh())
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Ecommerce App</title>
      </Head>

      <Header />

      <main className='max-w-screen-2xl mx-auto'>
        {/* Banner */}
        <Banner />

        {/* Product Feed */}
        <ProductFeed products={products} />
        <p>{}</p>

      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()
  

  return {
    props: {
      products,
    },
  }
}
