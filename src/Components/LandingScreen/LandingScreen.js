import React from 'react'
import "../../Css/landingScreen/landingScreen.css"
import { Link } from 'react-router-dom'

const LandingScreen = () => {
  return (
    <div className='main'>
      <div className='landing-con'>
       <div className='info-con'>
       <div className='info'>
       <h2>Welcome To PopX</h2>
        <p>Lorem ipsum is derived from the Latin “dolorem ipsum” roughly.”  </p>
       </div>
        <Link to="/signup"><button>Creat Account</button></Link>
      <Link to="/login"><button>Already Registered? Login</button></Link>
      </div>
       </div>
    </div>
  )
}

export default LandingScreen
