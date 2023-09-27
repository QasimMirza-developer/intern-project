import React, { useState } from 'react'


const Hero = () => {
  const [showAlert, setShowAlert] = useState("button is clicked");
  const handleButtonClick = () => {
    setShowAlert("Button is clicked"),
    console.log(showAlert)
  };
    
  return (
    <>
   <section id='hero' className=" bg-main container d-flex  justify-content-center align-items-center ps-lg-5">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6  hero-content">
    <h1 className="hero-text">Hawaii's Premier concierge E-   health  <span> Service</span>   </h1>
    <h5>Your family’s one stop-shop for personalized <span>healthcare</span>.</h5>
    <p className="hero-para">Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus consequat facilisi bibendum. In id in nulla euismod.</p>
   <form className="form  d-flex  align-items-center">
    <input type="search"  className="search-inputt reactangle-search  " placeholder=  " Search a medical condition"   />
   {/* <div className="reactangle-search">
    <svg className="mt-2 mx-2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <g clipPath="url(#clip0_0_784)">
        <path d="M17.5888 15.5988L13.3806 11.3906C14.3376 9.96994 14.8097 8.1949 14.5569 6.3035C14.1259 3.08635 11.4892 0.468269 8.26889 0.0605621C3.48096 -0.545285 -0.545131 3.48081 0.0607518 8.26873C0.468564 11.4904 3.087 14.1293 6.3045 14.5582C8.19591 14.8109 9.9713 14.3389 11.3916 13.3819L15.5998 17.5901C16.149 18.1392 17.0395 18.1392 17.5886 17.5901C18.1372 17.0402 18.1372 16.1472 17.5888 15.5988ZM2.781 7.31248C2.781 4.83116 4.79967 2.81249 7.281 2.81249C9.76233 2.81249 11.781 4.83116 11.781 7.31248C11.781 9.79381 9.76233 11.8125 7.281 11.8125C4.79967 11.8125 2.781 9.79451 2.781 7.31248Z" fill="#958070"/>
      </g>
      <defs>
        <clipPath id="clip0_0_784">
          <rect width="18" height="18" fill="white"/>
        </clipPath>
      </defs>
    </svg>
    <span  typeof='text'   className="placeholder-search ">Search a medical condition</span>

   </div>
   */}

    
    <button className="button" onClick={handleButtonClick}> <span className="text-wrap">Get started</span>  </button>
  </form>
          </div>
          <div className="col-12 col-md-12 col-lg-6 container hero-img ps-lg-5 ">
          <div className="image-container">
            <img src="./Images/heroImage.png" alt="Your Image"/>
            <div className="video-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" fill="white" className="bi bi-play-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
              </svg>
            </div>
            
          </div>
      
          
          </div>
        </div>
      
      </section>
    </>
   
    
  )
}

export default Hero
