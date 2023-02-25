import styles from "./styles.module.scss";
import { useContext } from "react";
import ApplicationCtx from "../../store/context";

export default function Searchbar() {
  const { dispatch } = useContext(ApplicationCtx);

  const onHandleSearch = (e) => {
    dispatch({ type: "ON_SEARCH_BOOK", payload: e.target.value });
  };

  return (
    <div className={styles.main}>
      <h2>Search your book</h2>
      <input
        id="search"
        onInput={onHandleSearch}
        type="text"
        name="search"
        placeholder="Book name..."
      />
    </div>
  );
}
