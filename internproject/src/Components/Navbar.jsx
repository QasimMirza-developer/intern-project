
import React from 'react'
// import { Link } from 'react-router-dom'
// import { useAuth0 } from "@auth0/auth0-react";





function Navbar() {
  // const handleLoginClick = () => {
  //   window.open('https://unsplash.com/photos/e8YFkjN2CzY', '_blank');
  //   const Hidelogin=document.querySelector('#hero')
  //   Hidelogin.style.display="none";
  // };

  
    // const { loginWithRedirect } = useAuth0();
  

 

  return (
    <>
    <div className="main">
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid p-lg-4">
          <a className="navbar-brand" href="#">
            <img 
              src="./Images/Mainlogo.png"
              alt="logo"
              width="271"
              height="67"
              
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className="nav-item  ">
                    <a className="nav-link consulatation " href="#Consultation" role="button"  aria-expanded="false">
                     Consultation 
                  <i className="ri-arrow-down-s-line"></i>
                </a>
                </li>
              <li className="nav-item px-2  ">
                <a className="nav-link navv-item" aria-current="page" href="#workSpace"
                  >Medical weight loss</a
                >
              </li>
              <li className="nav-item px-2">
                <a className="nav-link  navv-item" aria-current="page" href="#">Aging</a>
              </li>
              <li className="nav-item px-2 ">
                <a className="nav-link navv-item" aria-current="page" href="#" 
                  >Sexual health
               </a>
              </li>
              <li className="nav-item px-2 ">
                <a className="nav-link navv-item" aria-current="page" href="#theme">Lab testing</a>
              </li>
             <li>
              <div className="d-flex mb-lg-2 "> </div>
              <div className="vr " style={{width:" 2px" ,  height: "24px"}} ></div>
           
             </li>
  
              <li className="nav-item px-2 ">
                <a className="nav-link navv-item" aria-current="page" href="#Contact">Contact us</a>
              </li>

              <button type="button"   id="form-open" className="Navbutton"  href="#Login" >Log in</button>
              {/* <Link to="/Login" id="loginButton"  className="Navbar-button"  onClick={handleLoginClick}> <button type="button" className="Navbutton">Log in</button> </Link>    onClick={() => loginWithRedirect()}*/}
              {/* <Link to="/login" className="button" type="button"   id="form-open" >
            Login
          </Link> */}
             


            </ul>
          </div>
        </div>
      </nav>
          
    </div>
    </>
  )
}

export default Navbar

