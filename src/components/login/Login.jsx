import { useState, useContext } from "react";
import ApplicationCtx from "../../store/context";
import styles from "./styles.module.scss";
import background from "./login.gif";
import logo from "./logo.gif";
import mobile from "./mobile.gif";

const Login = () => {
  const { dispatch } = useContext(ApplicationCtx);
  const [username, setUsername] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_USERNAME", payload: username });
  };

  return (
    <div className={styles.AppLogin}>
      <div className={styles.Logo}>
        {/* <img src={logo} className={styles.logoImg} /> */}
        <h1 className={styles.logoTitle}>BookTracker</h1>
        <p className={styles.logoParagraph}>Your own reading experience</p>
      </div>
      <div className={styles.Container}>
        <img src={background} />
        <div className={styles.mobileDiv}>
          {/* <img className={styles.mobile} src={mobile} /> */}
        </div>
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
                autocomplete="off"
                required
              />
              <p>Your Password:</p>
              <input
                className={styles.name}
                type="password"
                id="username"
                name="username"
                placeholder="🔒"
              />
            </div>
            <input className={styles.button} type="submit" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
