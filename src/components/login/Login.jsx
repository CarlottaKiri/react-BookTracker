import { useState, useContext } from "react";
import ApplicationCtx from "../../store/context";
import styles from "./styles.module.scss";

const Login = () => {
  const { dispatch } = useContext(ApplicationCtx);
  const [username, setUsername] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_USERNAME", payload: username });
  };

  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.title}>Login</h1>
        <form onSubmit={onHandleSubmit}>
          <div>
            <p>Your Nickname:</p>
            <input
              className={styles.name}
              value={username}
              onChange={(e) => setUsername(() => e.target.value)}
              type="text"
              id="username"
              name="username"
              placeholder="⭐"
              required
            />
          </div>
          <input className={styles.button} type="submit" value="Login" />
        </form>
      </div>
    </>
  );
};

export default Login;
