import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Firebase from './firebase/firebaseapp'


const Home: NextPage = () => {
  return (
    <Firebase />
  )
}

export default Home
