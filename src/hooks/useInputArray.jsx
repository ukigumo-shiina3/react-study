import { useCallback, useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);
  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以上にしてください");
      return;
    }
    setText(e.target.value.trim());
    // trim→triming処理 空白行(スペース)を打つことができないようにする
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      // const newArray = prevArray;
      // newArray.push(1);
      if (prevArray.includes(text)) {
        // some:条件が一つでも合致するものがあればtrue、一つも合致しなければfalseを返す。同じテキストの場合アラートを出す設定にする
        alert("同じ要素が既に存在します。");
        return prevArray;
      }
      // console.log(newArray === prevArray);
      // スプレッド構文で前のprevArrayを展開
      return [...prevArray, text];
    });
  }, [text]);

  return { text, array, handleChange, handleAdd };
};
