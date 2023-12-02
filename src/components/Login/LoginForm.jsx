import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../CustomHooks/useForm'
import { UserContext } from '../../Context/UserContext'

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
			<section>

				<h1>Login</h1>

				<form action="" onSubmit={handleSubmit}>
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

					{
						loading ? <Button disabled labelButton={'Fazendo Login...'} /> : <Button type={'submit'} labelButton={'Entrar'} />
					}
					{error && <p>{error}</p>}
					
				</form>

				<Link to="/login/criar">Cadastros</Link>

			</section>
		</>
	)
}

export default LoginForm