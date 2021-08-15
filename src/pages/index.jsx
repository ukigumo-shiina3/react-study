import Head from "next/head";
// import Image from 'next/image'
import classes from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useEffect, useState } from "react";

export default function Home() {
  const [foo, setFoo] = useState(1);
  // ファイルシステムルーティングを機能させるためにpages配下のファイルはexport defaultにしなければいけない
  const handleClick = (e) => {
    setFoo((foo) => foo + 1);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{foo}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="index" />
      <Footer />
    </div>
  );
}
