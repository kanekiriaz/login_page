import React from 'react'
import './TopBar.css';

const Topbar = () => {
  return (
    <div className='nav-bar'>
      <div className="language">
          <select name="languages" id="language">
            <option value="volvo">English(United Kingdom)</option>
            <option value="saab">English(Australia)</option>
            <option value="mercedes">English(India)</option>
            <option value="audi">English(New Zealand)</option>
          </select>
      </div>
      
      <div className="account-part">
        <span><h6>Already have an account?</h6></span><span><button className='btn' type="button">Sign up</button></span>
      </div>
    </div>
  )
}

export default Topbar
