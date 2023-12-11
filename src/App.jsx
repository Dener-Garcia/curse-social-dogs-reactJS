
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import { UserStorage } from './Context/UserContext'
import User from './User/User'
import ProtectedRoute from './components/Helper/ProtectedRoute'

function App() {

	return (
		<>
			<BrowserRouter>
				<UserStorage>
					<Header />
					<Routes>
						<Route path="/" element={ <Home /> } />
						<Route path="login/*" element={ <Login /> } />
						<ProtectedRoute path="criar/" element= { <User /> } />
					</Routes>
					<Footer />
				</UserStorage>
			</BrowserRouter>     
		</>
	)
}

export default App
