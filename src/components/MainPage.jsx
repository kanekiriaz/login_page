import React from 'react'
import './MainPage.css';
import image from '../images/lotus.jpeg';
import Topbar from './TopBar';
import MainContent from './MainContent';


const MainPage = () => {
  return (
    <div className='main-page'>
        <div className='main-page__image'>
            <img src={image} alt="" />
        </div>
        <div className='main-page__text'>
            <Topbar />
            <MainContent />
            
            
        </div>
      
    </div>
  )
}

export default MainPage
