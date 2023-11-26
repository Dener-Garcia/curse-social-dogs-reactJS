import styles from './header.module.css'
import { Link } from 'react-router-dom'
import dogs from '../../Assets/dogs.svg'

const Header = () => {
  return(
    <>
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">
        <img src={dogs} alt='Logo social dogs, um icone de um cachorro sorrindo' />
        </Link>
        <Link className={styles.login} to="/login">
          Login / Criar
        </Link>
      </nav>
    </header>
    </>
  )
}

export default Header