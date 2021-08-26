import Head from "next/head";
import classes from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Posts } from "src/components/Posts";
import { useCallback, useEffect, useState } from "react";

const Home = () => {
  // ファイルシステムルーティングを機能させるためにpages配下のファイルはexport defaultにしなければいけない

  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Posts />
    </div>
  );
};

export default Home;

{
  /* {props.isShow ? <h1>{props.count}</h1> : null} */
}
{
  /* 三項演算子 null→何も表示させない */
}
{
  /* <button onClick={props.handleClick}>ボタン</button>
<button onClick={props.handleDisplay}>
  {props.isShow ? "非表示" : "表示"}
</button> */
}
{
  /* アロー関数内ではreturnは省略して1行でかける */
}
{
  /* <input type="text" value={props.text} onChange={props.handleChange} /> */
}
{
  /* onChange→テキストの変更があったときにその時のイベントを取得 */
}
{
  /* <button onClick={props.handleAdd}>追加</button>
<ul>
  {props.array.map((item) => {
    return <div key={item}>{item}</div>;
  })}
</ul>

<Main page="index" />
<Footer /> */
}
