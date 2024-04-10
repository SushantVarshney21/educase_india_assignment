import React from 'react'
import "../../Css/signupScreen/signupScreen.css"
import { Link } from 'react-router-dom'

const SignupScreen = () => {
  return (
    <div className='main'>
      <div className='signup-con'>
        <h2>Create Your PopX Account</h2>
        <form>
        <div className='form-group'>
        <label>Full name</label>
         <input type="text" className="form-control input-lg" value="Marry Doe" disabled />
        </div>
        <div className='form-group'>
        <label>Phone No.</label>
         <input type="text" className="form-control input-lg" value="Marry Doe" disabled />
        </div>
        <div className='form-group'>
        <label>Email</label>
         <input type="text" className="form-control input-lg" value="Marry Doe" disabled />
        </div>
        <div className='form-group'>
        <label>Password</label>
         <input type="text" className="form-control input-lg" value="Marry Doe" disabled />
        </div>
        <div className='form-group'>
        <label>Company Name</label>
         <input type="text" className="form-control input-lg" value="Marry Doe" disabled />
        </div>
        <label className='radio'>Are you an Agency</label>
        <br/>
        <input type='radio' className='radio' name='select' checked  />Yes
        <input type='radio' className='radio' name='select' disabled />No
        </form>
      <Link to="/login"><button>Create Account</button></Link>
      </div>
    </div>
  )
}

export default SignupScreen
