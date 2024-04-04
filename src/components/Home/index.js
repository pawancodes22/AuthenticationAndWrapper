// Write your JS code here
import Cookies from 'js-cookie'

import Header from '../Header'

import './index.css'

const Home = props => {
  const logOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="main-bg">
      <Header />
      <h1>Home Route</h1>
      <button type="button" onClick={logOut}>
        Logout
      </button>
    </div>
  )
}

export default Home
