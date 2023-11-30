import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../CustomHooks/useForm'
import { TOKEN_POST, USER_GET } from '../../Api/api'
import { getLocal, setLocal } from '../../Utils/localStorage'

const LoginForm = () => {

	const userName = useForm() // custom hook
	const password = useForm()

	useEffect(()=>{
		const token = getLocal('token')
		if (token) {
			getUser(token)
		}
	}, [])

	const getUser = async (token) => {
		const {url, options} = USER_GET(token)
		const callApi = await fetch(url, options)
		const response = await callApi.json()
		console.log(response, 'res')
	}

	const handleSubmit = async (e) =>{
		e.preventDefault()

		if (userName.validadeField() && password.validadeField()) {

			const {url, options} = TOKEN_POST({
				username: userName.value, 
				password: password.value
			})
			
			const callApi = await fetch(url, options)
			const data = await callApi.json()
			setLocal('token', data.token)
			getUser(data.token)
			console.log('terminou')
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
					<Button type={'submit'} labelButton={'Entrar'} />
				</form>

				<Link to="/login/criar">Cadastros</Link>

			</section>
		</>
	)
}

export default LoginForm