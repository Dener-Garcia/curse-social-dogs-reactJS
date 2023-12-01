import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../Api/api'
import { getLocal, setLocal } from '../Utils/localStorage'

export const UserContext = createContext()
 
export const UserStorage = ({children}) => {

	useEffect(() => {
		async function autoLogin(){
			const token = getLocal('token')
			if (token) {
				try {
					const {url, options} = TOKEN_VALIDATE_POST(token)
					const res =  await fetch(url, options)
					if(!res.ok) throw new Error('Token Invalido') // ja joga pro catch
					const response = await res.json()
				} catch (error) {
					console.log('Cod erro', error)
				} finally{
          
				}

			}
		}
		autoLogin()
	}, [])


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
		const {url, options} = TOKEN_POST({username, password})
		const tokenRes = await fetch(url, options)
		const {token} = await tokenRes.json()
		setLocal('token', token)
		getUser(token)
		console.log(tokenRes, 'userLoginContext')
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
	}
  
	return(
		<>
			<UserContext.Provider value={dataGlobal}>
				{children}
			</UserContext.Provider>
		</>
	)
}