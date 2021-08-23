import Head from "next/head";
// import Image from 'next/image'
import classes from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

const Home = (props) => {
  // ファイルシステムルーティングを機能させるためにpages配下のファイルはexport defaultにしなければいけない
  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {props.isShow ? <h1>{props.count}</h1> : null}
      {/* 三項演算子 null→何も表示させない */}
      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleDisplay}>
        {props.isShow ? "非表示" : "表示"}
      </button>
      {/* アロー関数内ではreturnは省略して1行でかける */}
      <input type="text" value={props.text} onChange={props.handleChange} />
      {/* onChange→テキストの変更があったときにその時のイベントを取得 */}
      <button onClick={props.handleAdd}>追加</button>
      <ul>
        {props.array.map((item) => {
          return <div key={item}>{item}</div>;
        })}
      </ul>

      <Main page="index" />
      <Footer />
    </div>
  );
};

export default Home;
