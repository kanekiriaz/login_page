import React from 'react';
import './MainContent.css';
import image1 from '../images/apple.png';
import image2 from '../images/google.png';


const MainContent = () => {
  return (
    <div className='main-item'>
      <div className="create-account">
        <button></button>
        <h1>Create Account</h1>
        <p>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Morbi lobortis maximus </p>
      </div>
      <div className="login">
        <span>Email</span>
        <input type="text" placeholder='Enter your email' />
        <div className="pass">
          <span >Password</span><span><button>Show Password</button></span> 
        </div>
        <input type="password" placeholder='Enter your password' />
        <div className="check">
          <input type="checkbox" /><span>By creating an account, I agree to our <u>Terms of use</u> and <u>Privacy Policy</u> </span>
        </div>
        <div className='log'>
        <button>Log In </button>
        </div>
      </div>
      <div className="more-account">
          OR
          <button> <img src={image2} alt="" />Continue with Google</button>
          <button><img src={image1} alt="" />Continue with Apple</button>
      </div>
    </div>
  )
}

export default MainContent
