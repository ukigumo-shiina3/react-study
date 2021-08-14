// import Image from 'next/image'
import classes from './Main.module.css'
import { Links } from './Links'
import { Headline } from './Headline'

export function Main(props) {
  // ファイルシステムルーティングを機能させるためにpages配下のファイルはexport defaultにしなければいけない。
  return (
      <main className={classes.main}>
        <Headline page={props.page}>
            {/* onClick={() => alert("クリック！！")} */}
            <code className={classes.code}>pages/{props.page}.js</code>  
        </Headline>
        <Links />
    </main>
  );
};
