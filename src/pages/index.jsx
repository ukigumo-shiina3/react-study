import Head from 'next/head'
// import Image from 'next/image'
import classes from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Header } from '../components/Header'

export default function Home() {
  // ファイルシステムルーティングを機能させるためにpages配下のファイルはexport defaultにしなければいけない。
  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
        <Header />
        <Main page="index" />
      <Footer />
    </div>
  )
}
