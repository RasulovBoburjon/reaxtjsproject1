import React from 'react';
import velocity from '../imges/Velocity.png';


const Header = () =>{
    const Header_btn = () =>{
        
    };
   return(
       <>
        <div className="header">
        <div className='conteiner'> 
         <div className="header-info">
            <div className="header-navbar">
                <div className='header-nav-img'> <img src={velocity} alt="" /> </div>
                <ul className='headerNav'>
                    <li className='headerNav' path='/Contact'> Home </li>
                    <li className='headerNav'  path='/Home'> Contact </li>
                </ul>
            </div>
            </div>   
          </div>
            <div className='header-title'> 
                    <div className='header-text-paragrf'> This is Velocity </div>
                    <div className='btn'> <button className='header-btn'> sign up </button> </div>
                    <div className='btn'> <button className='header-btn2' onClick={Header_btn}> Learn more</button> </div>
            </div>
            </div>
        
       </>
   ); 

};

export default Header; 


