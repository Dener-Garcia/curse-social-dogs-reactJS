
import { useState, useCallback } from 'react'


const useFetch = () => {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(null)

	const requestMyApi = useCallback(async (url, options) => {
		let response
		let json
		console.log('dentro request')
		try {
			setError(null)
			setLoading(true)
			response = await fetch(url, options)
			json = await response.json()
			if (response.ok === false) throw new Error(json.message)
		} catch (err) {
			console.log('erro', err)
			setError(err.message)
			json = null
		} finally{
			setData(json)
			setLoading(false)
			// eslint-disable-next-line no-unsafe-finally
			return {response, json}
		}
	}, [])

	console.log(requestMyApi, 'dentro de')

	return{
		data, 
		error,
		loading,
		requestMyApi,
	}	
}

export default useFetch