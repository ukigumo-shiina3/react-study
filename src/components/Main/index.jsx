// import Image from 'next/image'
import classes from 'src/components/Main/Main.module.css'
import { Links } from 'src/components/Links';
import { Headline } from 'src/components/Headline/Headline';

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
