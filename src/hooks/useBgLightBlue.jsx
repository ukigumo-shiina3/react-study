import { useEffect } from "react";

export const useBgLightBlue = () => {
  useEffect(() => {
    // マウントの処理
    // console.log(`マウント時: ${count}`);
    document.body.style.backgroundColor = "lightblue";
    // アンマウントの処理(Cleanup Function)
    return () => {
      // console.log(`アンマウント時: ${count}`);
      document.body.style.backgroundColor = "";
    };
  }, []);
  // 第2引数に値を入れると変数が変更されたタイミングで、改めてuseEffectの部分の処理が走る。マウントとアンマウント両方呼ばれる
  // console.log(text);
};
