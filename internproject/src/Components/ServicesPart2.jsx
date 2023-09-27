import React, { useState } from 'react'


const ServicesPart2 = () => {
  const [showAlert, setShowAlert] = useState("button is clicked");
  const handleButtonClick = () => {
    setShowAlert("Button is clicked"),
    console.log(showAlert)

  };
  return (
    <>
    <section>
  <div className="services-part2 " id='Consultation'>
<div className="container-fluid1">
  <div className="left">
    <h1 className="heading-services-part2">Frequently Asked <span className="green">Questions</span> </h1>
<p className="part2-para">
  Everything you might need to know about the medical services we provide and how it works.
</p>
 
  <div className="part2-buttons">
    <button type="button" onClick={handleButtonClick} className="btn  btn3     btn-dark ">General</button>
  <button type="button" onClick={handleButtonClick} className="btn btn3    btn3-0 btn-light">Online consultation</button>
  <button type="button" onClick={handleButtonClick} className="btn btn3    btn3-1 btn-light">Health services</button> <br/>
  <button type="button" onClick={handleButtonClick} className="btn btn3    btn3-2 btn-light mt-lg-2">Treatment options</button>
  <button type="button" onClick={handleButtonClick} className="btn btn3   btn3-4 btn-light mt-lg-2">Doctors</button>
  <button type="button" onClick={handleButtonClick} className="btn btn3   btn3-5 btn-light mt-lg-2">Staff</button>
  <button type="button" onClick={handleButtonClick} className="btn  btn3  btn3-6 btn-light mt-lg-2">Payments</button>
  </div>
  </div>

<div className="right">
<div className="d-flex justify-content-between">
  <h4 className="right-heading">Q. Lorem ipsum dolor sit amet consteur</h4>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="3" viewBox="0 0 20 3" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M0 1.5C0 0.671573 0.671573 0 1.5 0H18.5C19.3284 0 20 0.671573 20 1.5C20 2.32843 19.3284 3 18.5 3H1.5C0.671573 3 0 2.32843 0 1.5Z" fill="#F76D00"/>
  </svg>
 
</div>

  <p className="right-para">Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus. <br/>
    <br/>
    Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc.</p>
  
 {/* <img  className="imgg"     src="./Images/Rectangle 65.png" alt=""> */}
<div className="image-container">
  <img src="./Images/Rectangle 65.png" alt="Your Image" className="imgg"/>
  <div className="video-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#fff" className="bi bi-play-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
    </svg>
  </div>
  
</div>

<img src="./Images/Rectangle 93.png" alt=""/>
<hr/>
<div className="d-flex justify-content-between ">
<p className="right-heading">Q. Lorem ipsum dolor sit amet consteur</p>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M0 9.5C0 8.67157 0.671573 8 1.5 8H18.5C19.3284 8 20 8.67157 20 9.5C20 10.3284 19.3284 11 18.5 11H1.5C0.671573 11 0 10.3284 0 9.5Z" fill="#271100"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M10 -6.55671e-08C10.8284 -2.93554e-08 11.5 0.671573 11.5 1.5L11.5 18.5C11.5 19.3284 10.8284 20 10 20C9.17157 20 8.5 19.3284 8.5 18.5L8.5 1.5C8.5 0.671573 9.17157 -1.01779e-07 10 -6.55671e-08Z" fill="#271100"/>
</svg>
</div>
<hr/>
<div className="d-flex justify-content-between">
  <p className="right-heading ">Q. Lorem ipsum dolor sit amet consteur</p>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M0 9.5C0 8.67157 0.671573 8 1.5 8H18.5C19.3284 8 20 8.67157 20 9.5C20 10.3284 19.3284 11 18.5 11H1.5C0.671573 11 0 10.3284 0 9.5Z" fill="#271100"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M10 -6.55671e-08C10.8284 -2.93554e-08 11.5 0.671573 11.5 1.5L11.5 18.5C11.5 19.3284 10.8284 20 10 20C9.17157 20 8.5 19.3284 8.5 18.5L8.5 1.5C8.5 0.671573 9.17157 -1.01779e-07 10 -6.55671e-08Z" fill="#271100"/>
  </svg>
  </div>
<hr className="hr"/>
<div className="d-flex justify-content-between">
  <p className="right-heading">Q. Lorem ipsum dolor sit amet consteur</p>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M0 9.5C0 8.67157 0.671573 8 1.5 8H18.5C19.3284 8 20 8.67157 20 9.5C20 10.3284 19.3284 11 18.5 11H1.5C0.671573 11 0 10.3284 0 9.5Z" fill="#271100"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M10 -6.55671e-08C10.8284 -2.93554e-08 11.5 0.671573 11.5 1.5L11.5 18.5C11.5 19.3284 10.8284 20 10 20C9.17157 20 8.5 19.3284 8.5 18.5L8.5 1.5C8.5 0.671573 9.17157 -1.01779e-07 10 -6.55671e-08Z" fill="#271100"/>
  </svg>
  </div>

  

  </div>
</div>
</div>
 </section>
      
    </>
  )
}

export default ServicesPart2
