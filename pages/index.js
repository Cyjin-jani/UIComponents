// import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div>

      hi
      <br />
      <br />
      <br />

      <Link href="/ProductCard">
        ProductCardPage
      </Link>
      <br />
      <br />
      <br />

      <Link href="/CheckTable">
        CheckTable
      </Link>

      <br />
      <br />
      <br />

      <Link href="/Stickybox">
        STICKY
      </Link>




    </div>
  )
}
