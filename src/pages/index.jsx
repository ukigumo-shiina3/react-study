import Head from "next/head";
// import Image from 'next/image'
import classes from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  // ファイルシステムルーティングを機能させるためにpages配下のファイルはexport defaultにしなければいけない
  const handleClick = useCallback(
    (e) => {
      // usecallback→再生成されないようにする
      console.log(count);
      if (count < 10) {
        setCount((count) => count + 1);
        // (count)→前回の数値が入っている
      }
    },
    [count]
  );
  // 第2引数に何も指定していなかったら、再生成されないのでcountは1のまま。
  // 指定した場合関数内の処理が更新され再生成される

  useEffect(() => {
    // マウントの処理
    // console.log(`マウント時: ${count}`);
    document.body.style.backgroundColor = "lightblue";
    // アンマウントの処理(Cleanup Function)
    return () => {
      // console.log(`アンマウント時: ${count}`);
      document.body.style.backgroundColor = "";
    };
  }, [count]);
  // 第2引数に値を入れると変数が変更されたタイミングで、改めてuseEffectの部分の処理が走る。マウントとアンマウント両方呼ばれる

  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="index" />
      <Footer />
    </div>
  );
}
