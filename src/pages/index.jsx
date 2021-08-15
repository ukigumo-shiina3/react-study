import Head from "next/head";
// import Image from 'next/image'
import classes from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback } from "react";

export default function Home() {
  // ファイルシステムルーティングを機能させるためにpages配下のファイルはexport defaultにしなければいけない
  const handleClick = useCallback((e) => {
    // useCallback→再レンダリングされたときに再生成されることがなくなる。第2引数が必要(空の配列を渡す)
    console.log(e.target.href);
    // e.target.○○→クリックした要素の属性にアクセスすることができる
    e.preventDefault();
  }, []);

  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a href="/about" onClick={handleClick}>
        {/* return内部でメソッドは書かない。処理が多くなった場合に見た目がわかりづらい */}
        ボタン
      </a>
      <Main page="index" />
      <Footer />
    </div>
  );
}
