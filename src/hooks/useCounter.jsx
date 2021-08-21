import { useCallback, useState } from "react";

export const useCounter = () => {
  // カスタムフック: 「use」から始まる関数名にする
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState("true");

  const handleClick = useCallback(
    (e) => {
      // usecallback→再生成されないようにする
      console.log(count);
      if (count < 10) {
        setCount((prevCount) => prevCount + 1);
        // (count)→前回の数値が入っている
      }
    },
    [count]
  );
  // 第2引数に何も指定していなかったら、再生成されないのでcountは1のまま。
  // 指定した場合関数内の処理が更新され再生成される

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  return { count, isShow, handleClick, handleDisplay };
};
