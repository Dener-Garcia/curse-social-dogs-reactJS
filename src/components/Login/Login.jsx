import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'
import LoginCreate from './LoginCreate'
import { UserContext } from '../../Context/UserContext'

const Login = () => {

	const {login} = useContext(UserContext)

	if(login == true) {
		return <Navigate to= "/conta" /> // se usuario ja estiver logado redireciona para /conta
	}

	return(
		<>
			<div>
				<Routes>
					<Route path="/" element={<LoginForm />} />
					<Route path="criar" element={<LoginCreate />} />
					<Route path="perdeu" element={<LoginPasswordLost />} />
					<Route path="reset" element={<LoginPasswordReset />} />
				</Routes>
			</div>
		</>
	)
}

export default Login