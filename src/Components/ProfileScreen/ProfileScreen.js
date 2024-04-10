import React from 'react'
import  "../../Css/profileScreen/profileScreen.css";
import profileImg from "../../profile1.jpg"
import cameraImg from "../../camraIcon.png"
const ProfileScreen = () => {
  return (
    <div className='main'>
    <div className='profile-con'>
        <nav>
            <h3>Account Settings</h3>
        </nav>
        <div className='info-con'>
          <div className='info'>
            <div className='info-up'>
              <img src={profileImg} alt='profile' className='image'/>
              <img src={cameraImg} alt='icon' className='icon'/>
              <div>
                <h4>Marry Doe</h4>
                <p>marrydoe@gmail.com</p>
              </div>
            </div>
            <div className='info-down'>
              <p>Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. </p>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default ProfileScreen
