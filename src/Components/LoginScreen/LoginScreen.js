import React from 'react'
import "../../Css/loginScreen/loginScreen.css"
import { Link } from 'react-router-dom'

const LoginScreen = () => {
  return (
    <div className='main'>
    <div className='signup-con'>
      <h2>Signin To Your PopX Account</h2>
      <p>Lorem ipsum is derived from the Latin “dolorem ipsum” roughly.”  </p>
      <form>
      <div className='form-group'>
      <label>Email</label>
       <input type="text" className="form-control input-lg" disabled />
      </div>
      <div className='form-group'>
      <label>Password</label>
       <input type="text" className="form-control input-lg"  disabled />
      </div>
      </form>
    <Link to="profile"><button>Login</button></Link>
    </div>
  </div>
  )
}

export default LoginScreen
