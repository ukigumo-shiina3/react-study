import Head from "next/head";
import Image from "next/image";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

const About = (props) => {
  // ファイルシステムルーティングを機能させるためにpages配下のファイルはexport defaultにしなければいけない
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleDisplay}>
        {props.isShow ? "非表示" : "表示"}
      </button>
      {props.isShow ? <h2>{props.doubleCount}</h2> : null}
      <hr />
      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加</button>
      <ol>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ol>
      <Main page="about" />
      <Footer />
    </div>
  );
};

export default About;
