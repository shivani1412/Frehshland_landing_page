import React, { useState } from 'react';
import logo from  './assets/img/freshlandlogo.png';

function Header() {
  const [navlink, setNavlink] = useState(false);
  
  const handlenavclick = () =>{
     setNavlink(true);
  };
  const handlenavclose = () =>{
    setNavlink(false);
  }
    return (
      <>
      <div className='main-container'>
      <div className='overlay'></div>
      <div className='navbarheader'>
      <div className='left-section'>
          <div className='logo'>
            <img  src={logo} alt='logo'/>
          </div>
          <ul className='nav-links '>
           <li><a href='frehland'>store<i className="bi bi-chevron-down"></i></a></li>
           <li><a href='frehland'>season overview</a></li>
           <li><a href='frehland'>farmers</a></li>
           <li><a href='frehland'>faq</a></li>
           <li><a href='frehland'>About us</a></li>
           <li><a href='frehland'>media</a></li>
         </ul>
        {navlink &&(
           <ul className='nav-links navmenu'>
            <i class="bi bi-x" onClick={handlenavclose}></i>
           <li><a href='frehland'>store<i className="bi bi-chevron-down"></i></a></li>
           <li><a href='frehland'>season overview</a></li>
           <li><a href='frehland'>farmers</a></li>
           <li><a href='frehland'>faq</a></li>
           <li><a href='frehland'>About us</a></li>
           <li><a href='frehland'>media</a></li>
        

         </ul>

        )} 
        </div>
        <div className='right-section'>
          <div className='icon'><i className="bi bi-cart"></i></div>
          <div className='icon'><i className="bi bi-person-circle"></i></div>
          <div className='icon'><i className="bi bi-search"></i></div>
          <div className=' navicon'>
          <i className="bi bi-list icon" onClick={handlenavclick}></i>
          </div>
        </div>
        </div>
        <div className='heading'>
          <h1 className=''>Freshly harvested fruit & vegetables</h1>
          <h1>Directly from the farm</h1>
        </div>
      </div>
      
      
      </>
    );
  }
  
  export default Header;