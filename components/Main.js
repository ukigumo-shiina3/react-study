// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Links } from '../components/Links'
import { Headline } from '../components/Headline'

export function Main(props) {
  // ファイルシステムルーティングを機能させるためにpages配下のファイルはexport defaultにしなければいけない。
  return (
      <main className={styles.main}>
        <Headline page={props.page}>
            {/* onClick={() => alert("クリック！！")} */}
            <code className={styles.code}>pages/{props.page}.js</code>  
        </Headline>
        <Links />
    </main>
  );
};
