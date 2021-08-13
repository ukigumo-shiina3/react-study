import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'

export default function Home() {
  // ファイルシステムルーティングを機能させるためにpages配下のファイルはexport defaultにしなければいけない。
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className={styles.main}>
        <Headline 
          page="index"
          onClick={() => alert("クリック！！")}
        >
          <code className={styles.code}>pages/index.js</code>
          </Headline>
        <Links /> */}
        <Main page="index" />
      <Footer />
    </div>
  )
}
