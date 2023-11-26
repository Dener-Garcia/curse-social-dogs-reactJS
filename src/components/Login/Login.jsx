import { Route, Routes } from "react-router-dom"
import LoginForm from "./LoginForm"
import LoginPasswordLost from "./LoginPasswordLost"
import LoginPasswordReset from "./LoginPasswordReset"

const Login = () => {
  return(
    <>
    <div>
      sou pagina login
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