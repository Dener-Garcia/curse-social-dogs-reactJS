import React, { useContext } from 'react'
import styles from './header.module.css'
import { Link } from 'react-router-dom'
import dogs from '../../Assets/dogs.svg'
import { UserContext } from '../../Context/UserContext'

const Header = () => {

	const { data, userLogOut } = useContext(UserContext)

	return(
		<>
			<header className={styles.header}>
				<nav className={styles.nav}>
					<Link to="/">
						<img src={dogs} alt='Logo social dogs, um icone de um cachorro sorrindo' />
					</Link>
					{data ? (<Link className={styles.login} to="/Login">
						{data.nome} 		
						<button onClick={userLogOut}>Sair</button>
					</Link>) 
						: (<Link className={styles.login} to="/login">
          Login / Criar
						</Link>) }
				</nav>
			</header>
		</>
	)
}

export default Header