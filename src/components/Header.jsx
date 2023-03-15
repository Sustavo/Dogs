import { Link } from "react-router-dom";
import { useContext } from "react";
import styles from "./Header.module.css";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
import { UserContext } from "../UserContext";

export default function Header() {
  const { data, userLogout } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        
        <Link className={styles.login} to={data ? '/conta' : '/login'}>
          {data ? 
          (<div style={{display: 'flex'}}>
            Olá, {data.nome}!
            <button onClick={userLogout}>Sair</button>
          </div>) : 
          "Login / Criar"}
        </Link>
      </nav>
    </header>
  );
}
