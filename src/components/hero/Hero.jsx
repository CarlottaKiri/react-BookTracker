import styles from "./styles.module.scss";
import { useContext, useState } from "react";
import ApplicationCtx from "../../store/context";

export default function Hero() {
  const [content, setContent] = useState("");
  const { dispatch } = useContext(ApplicationCtx);

  function submitForm(e) {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO_TO_LIST",
      payload: {
        id: Math.floor(Math.random() * 1000),
        content: content,
        status: false,
      },
    });
    setContent(() => "");
  }

  return (
    <div className={styles.main}>
      <div className={styles.infos}></div>
      <h1>New Book:</h1>

      <form onSubmit={submitForm}>
        <input
          type="text"
          value={content}
          onInput={(e) => setContent(() => e.target.value)}
          placeholder="A Book you wanna read..."
        />
      </form>
    </div>
  );
}
