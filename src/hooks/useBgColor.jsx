import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

export const useBgColor = () => {
  const router = useRouter();

  console.log(router);
  useEffect(() => {
    // マウントの処理
    // console.log(`マウント時: ${count}`);
    document.body.style.backgroundColor =
      router.pathname === "/" ? "lightblue" : "beige";
    // アンマウントの処理(Cleanup Function)
    return () => {
      // console.log(`アンマウント時: ${count}`);
      document.body.style.backgroundColor = "";
    };
  }, [router.pathname]);
  // 第2引数に値を入れると変数が変更されたタイミングで、改めてuseEffectの部分の処理が走る。マウントとアンマウント両方呼ばれる
};
