import styles from "./styles.module.scss";
import ToDoItem from "../todoItem/ToDoItem";
import { useContext } from "react";
import ApplicationCtx from "../../store/context";
import Searchbar from "../searchbar/Searchbar";
export default function ToDoList() {
  const context = useContext(ApplicationCtx);

  return (
    <div className={styles.main}>
      <Searchbar />
      {context.state.user.bookList.map((item) => (
        <ToDoItem data={item} key={item.id} />
      ))}
    </div>
  );
}
