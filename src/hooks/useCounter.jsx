import { useCallback, useMemo, useState } from "react";

export const useCounter = () => {
  // カスタムフック: 「use」から始まる関数名にする
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState("true");

  // const doubleCount = count * 2;
  // isShowがtrue, falseになった場合に再度生成されてしまう。isshowの値はcountは関与していないため再生成する必要はない

  const doubleCount = useMemo(() => {
    // useMemo: isShowが変更されたとしても元の値を保持して新しく作り直さないようにする。パフォーマンスが改善できる。
    return count * 2;
  }, [count]);
  // 第二引数の配列に入れた変数の値が変化すると新しく作り直される

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

  return { count, doubleCount, isShow, handleClick, handleDisplay };
};
