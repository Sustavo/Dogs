import { Link } from "react-router-dom"
import styles from "./Header.module.css"

export default function Header() {
  return(
    <div>
      <nav className="container">
        <Link to="/">Home</Link>
        <Link to="/login">Login / Criar</Link>
      </nav>
    </div>
  )
}