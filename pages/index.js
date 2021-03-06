import Head from 'next/head'
import Image from 'next/image'
import TestButton from '../components/molecules/TestButton'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Everbooking GuestList</title>
        <meta name="description" content="Guest List App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <TestButton />
        <h1>Everbooking</h1>
        
      </main>
      <footer className={styles.footer}>
        Footer Junk
      </footer>
    </div>
  )
}
