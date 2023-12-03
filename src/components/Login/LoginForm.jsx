import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../CustomHooks/useForm'
import { UserContext } from '../../Context/UserContext'
import Error from '../Helper/Error'
import styles from './loginForm.module.css'

const LoginForm = () => {

	const userName = useForm() // custom hook
	const password = useForm()

	const {userLogin, error, loading} = useContext(UserContext)


	const handleSubmit = async (e) =>{
		e.preventDefault()

		if (userName.validadeField() && password.validadeField()) {
			userLogin(userName.value, password.value)
		}
	}
	return(
		<>
			<section className='anime-left'>

				<h1 className='title'>Login</h1>

				<form className={styles.form} onSubmit={handleSubmit}>
					<Input textLabel={'Usuário'} 
						type={'text'} 
						label={'user'} 
						name={'userName'} 
						{...userName} />

					<Input 
						textLabel={'Senha'} 
						type={'password'} 
						label={'password'} 
						name={'password'} 
						{...password} />
					<Error error={error} />
					{
						loading ? <Button disabled labelButton={'Fazendo Login...'} /> : <Button type={'submit'} labelButton={'Entrar'} /> 
					}

				

					<Link className={styles.missPassword} 
						to="/login/perdeu">
						<span className={styles.subTitle}>	
					Recuperar senha
						</span>
					</Link>
				</form>

				<div className={styles.userAdmin}>
					<Link className={styles.signUp} 
						to="/login/criar">
						<p>Ainda não tem conta?</p>
						<span className={styles.subTitle}>
					Criar conta
						</span>
					</Link>
				</div>
			</section>
		</>
	)
}

export default LoginForm