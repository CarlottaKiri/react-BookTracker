import styles from "./styles.module.scss";
import book from "./logo.png";
import logout from "./logout.png";
import { useContext } from "react";
import ApplicationCtx from "../../store/context";

export default function Navbar() {
  const { state, dispatch } = useContext(ApplicationCtx);

  const onLogout = () => {
    dispatch({ type: "REMOVE_USERNAME" });
  };
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <h1>BookTracker</h1>
        <img src={book} className={styles.img} />
      </div>
      <div className={styles.info}>
        <div>
          <h3>Welcome back, </h3>
          <h3 className={styles.dinamicName}>{state.user?.username}</h3>
        </div>
        <button onClick={() => onLogout()}>
          <img className={styles.logoutImg} src={logout} />
        </button>
      </div>
    </div>
  );
}
