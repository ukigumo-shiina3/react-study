import Head from 'next/head'
import Image from 'next/image'
import styles from 'src/components/styles/Home.module.css'
import { Footer } from 'src/components/components/Footer'
import { Main } from 'src/components/components/Main'
import { Header } from 'src/components/components/Header'

export default function About(props) {
  // ファイルシステムルーティングを機能させるためにpages配下のファイルはexport defaultにしなければいけない。
  return (
    <div className={styles.container}>
      <Head>
        <title>About page</title>
      </Head>
      <Header />
      <Main page="about" />
      <Footer />
    </div>
  )
}
