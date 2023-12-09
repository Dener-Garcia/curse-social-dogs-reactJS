import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../Api/api'
import { getLocal, removeLocal, setLocal } from '../Utils/localStorage'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext()
 
export const UserStorage = ({children}) => {

	const navigate = useNavigate()

	useEffect(() => { // verifica se tem token local storage, se eh valido e ja loga o usuario
		async function autoLogin(){
			const token = getLocal('token')
			if (token) {
				try {
					setError(null)
					setLoading(true)
					const {url, options} = TOKEN_VALIDATE_POST(token)
					const res =  await fetch(url, options)
					if(!res.ok) throw new Error('Token Invalido') // ja joga pro catch
					await getUser(token)
				} catch (error) {
					console.log('Cod erro', error)
					userLogOut()
				} finally{
					setLoading(false)
				}
			}
		}
		autoLogin()
	}, []) // toda funcao fora do useEffect deve ser usada na dependencia do mesmo


	const [data, setData] = useState(null)
	const [login, setLogin] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	async function getUser(token){
		const {url, options} = USER_GET(token)
		const resp = await fetch(url, options)
		const response = await resp.json()
		setData(response)
		setLogin(true)
		console.log(response)
	}

	async function userLogin(username, password) {
		try{
			setError(null)
			setLoading(true)
			const {url, options} = TOKEN_POST({username, password})
			const tokenRes = await fetch(url, options)
			if(!tokenRes.ok) throw new Error(`Erro de Login, usuário inválido: ${tokenRes.statusText}`)
			const {token} = await tokenRes.json()
			setLocal('token', token)
			await getUser(token)
			navigate('/conta')
		}
		
		catch (err){
			setError(err.message)
			setLogin(false)
		}
		finally{
			setLoading(false)
		}
	}

	async function userLogOut() {
		setData(null)
		setError(null)
		setLoading(false)
		setLogin(false)
		removeLocal('token')
		navigate('/login')
		console.log('usuario deslogado')
	}

  
	const dataGlobal = {
		data,
		setData,
		login,
		setLogin,
		loading,
		setLoading,
		error,
		setError,
		getUser,
		userLogin,
		userLogOut,
	}
  
	return(
		<>
			<UserContext.Provider value={dataGlobal}>
				{children}
			</UserContext.Provider>
		</>
	)
}