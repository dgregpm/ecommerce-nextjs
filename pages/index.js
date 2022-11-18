import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ecommerce App</title>
      </Head>

      <Header />
    </>
  )
}
