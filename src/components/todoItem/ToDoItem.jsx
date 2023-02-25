import styles from "./styles.module.scss";
import ApplicationCtx from "../../store/context";
import { useContext } from "react";
import Img1 from "./delete.png";
import book from "./book.png";

export default function ToDoItem({ data }) {
  const { dispatch } = useContext(ApplicationCtx);

  const onHandleClick = (e) => {
    dispatch({
      type: "SET_TODO_ITEM_DONE",
      payload: data.id,
    });
  };
  const onDeleteClick = (e) => {
    dispatch({
      type: "REMOVE_TODO_FROM_LIST",
      payload: data.id,
    });
  };

  return (
    <div
      id={data.id}
      className={`${styles.main} ${data.status && styles.statusDone}`}
      onClick={onHandleClick}
    >
      <div>
        <img className={styles.book} src={book} />
        <h2 className={styles.content}>{data.content}</h2>
      </div>
      <button onClick={onDeleteClick}>
        <img src={Img1} className={styles.delete} />
      </button>
    </div>
  );
}
