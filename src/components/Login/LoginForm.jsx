import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input'
import Button from '../Forms/Button'

const LoginForm = () => {

	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (e) =>{
		e.preventDefault()
		fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({userName, password})
		}) 
			.then((res) => {
				console.log(res)
				return res.json()
			})
			.then(json => {
				console.log(json)
			})


	}

	return(
		<>
			<section>

				<h1>Login</h1>

				<form action="" onSubmit={handleSubmit}>
					<Input textLabel={'Usuário'} type={'text'} label={'user'} name={'userName'} />
					<Input textLabel={'Senha'} type={'password'} label={'password'} name={'password'} />
					<Button type={'submit'} labelButton={'Entrar'} />
				</form>

				<Link to="/login/criar">Cadastros</Link>

			</section>
		</>
	)
}

export default LoginForm