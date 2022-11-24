import Header from '../components/Header'
import Banner from '../components/Banner'
import ProductFeed from '../components/ProductFeed'

import Head from 'next/head'
import axios from 'axios'

import { useState, useEffect } from 'react'


const baseURL = "https://fakestoreapi.com";


export default function Home({ products }) {
  // const [products, setProducts] = useState(null);

  // useEffect(() => {
  //   axios.get(`${baseURL}/products`).then((response) => {
  //     setProducts(response.data);
  //   });
  // }, []);

  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Ecommerce App</title>
      </Head>

      <Header />

      <main className='max-w-screen-2xl mx-auto'>
        {/* Banner */}
        <Banner />
        {console.log(products)}
        {/* Product Feed */}
        {/* <ProductFeed products={products} /> */}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  // const res = await fetch('https://fakestoreapi.com/products')
  // const products = await res.json()
  
   const { data } = await axios.get("https://fakestoreapi.com/products");
   const products = data;
  
  return {
    props: { products }
  }
}
