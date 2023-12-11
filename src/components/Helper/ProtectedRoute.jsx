import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import { Route } from 'react-router-dom'

const ProtectedRoute = (props) => {
	const {login} = useContext(UserContext)

	if (login === true) return <Route {...props} />

	return(
		<div>
      
		</div>
	)
}

export default ProtectedRoute