import React, { useState } from 'react'

const LongButton = () => {
  const [showAlert, setShowAlert] = useState("button is clicked");
  const handleButtonClick = () => {
    setShowAlert("Button is clicked"),
    console.log(showAlert)

  };
  return (
    <>
      <section>
  <div className="long-button mt-5 container">

    <button className="button2" onClick={handleButtonClick}> <span className="started">Get Started  
<span className="reactangle-button">
        <svg    xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
          <path d="M5.72205e-06 8.99998C5.72205e-06 8.69061 0.264291 8.43748 0.592862 8.43748H14.0675L9.0425 3.18865C8.82261 2.95905 8.84054 2.60295 9.08243 2.39447C9.19643 2.2992 9.33929 2.24998 9.48215 2.24998C9.64304 2.24998 9.80389 2.3115 9.92072 2.43455L15.8457 8.62205C16.0511 8.83629 16.0511 9.16381 15.8457 9.37791L9.92072 15.5654C9.69965 15.7961 9.32465 15.8115 9.08322 15.6039C8.84132 15.3951 8.8234 15.0393 9.04329 14.8097L14.0675 9.56248H0.592505C0.264291 9.56248 5.72205e-06 9.30936 5.72205e-06 8.99998Z" fill="white"/>
        </svg>
      </span>
    </span>   
     </button>
  </div>
 </section> 
    </>
  )
}

export default LongButton
