// Write your JS code here
import './index.css'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

const Login = props => {
  if (Cookies.get('jwt_token') !== undefined) {
    return <Redirect to="/" />
  }

  const logIn = async () => {
    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch('https://apis.ccbp.in/login', options)
    if (response.ok) {
      const jwtToken = await response.json()
      Cookies.set('jwt_token', jwtToken, {expires: 3})
      const {history} = props
      console.log(7)
      history.replace('/')
    }
  }

  return (
    <div className="main-bg">
      <h1>Please Login</h1>
      <button type="button" onClick={logIn}>
        Login with Sample Creds
      </button>
    </div>
  )
}
export default Login
