import React, { useContext } from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../CustomHooks/useForm'
import { USER_POST } from '../../Api/api'
import { UserContext } from '../../Context/UserContext'


const LoginCreate = () => {

	const {userLogin} = useContext(UserContext)

	const username = useForm()
	const email = useForm('email')
	const password = useForm()


	async function handleSubmit(e) {
		e.preventDefault()
		const {url, options} = USER_POST({
			username: username.value,
			email: email.value,
			password: password.value
		})
		const response = await fetch(url, options)
		if (response.ok) userLogin(username.value, password.value)
	}

	return(
		<section className='anime-left'>
			<h1 className='title'>Cadastre-se</h1>
			<form onSubmit={handleSubmit}>
        
				<Input type={'text'} 
					label={'user'} 
					name={'username'} 
					textLabel={'Seu nome '} 
					{...username} />

				<Input type={'email'} 
					label={'email'} 
					name={'email'} 
					textLabel={'Seu e-mail '} 
					{...email} />

				<Input type={'password'} 
					label={'password'} 
					name={'username'} 
					textLabel={'Crie uma senha'} 
					{...password} />
          
				<Button labelButton={'Cadastrar'}/>
			</form>
		</section>
	)
}

export default LoginCreate