import Head from 'next/head'
import Auth from '../components/templates/Auth'
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
        <h1>Everbooking</h1>
        <Auth />        
      </main>
      <footer className={styles.footer}>
        Footer Junk
      </footer>
    </div>
  )
}
