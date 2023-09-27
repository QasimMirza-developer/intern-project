import React, { useState } from 'react'


const SubmittionForm = () => {
  const [showAlert, setShowAlert] = useState("Form submitted");
  const handleButtonClick = () => {
    setShowAlert("Form submitted"),
    console.log(showAlert)

  };
  return (
    <>
    <section data-aos="fade-up" data-aos-offset="400" data-aos-duration="1200" >
  <div className="submittion-form" id='Contact'>
    
     <div className="left_submittin-form">
      <img className="ms-3 " src="./Images/doctor.png" alt="Doctor-image"/>
     </div>
     <div className="right-submittin-form">
<h2 className="submittion-heading">Join As A  <span className="orange">Provider</span></h2>

      <form>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="Email" placeholder="Enter your first name" />
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">Subject</label>
          <input type="text" className="form-control" id="Password" placeholder="Enter your  subject"/>
        </div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">Attactment</label>
          <input className="form-control attactment bg-body" disabled  id="formFile" placeholder="No file attached"/>
        </div>
   
<div className='mb-3'>
          <div className="form-group">
    <label htmlFor="myBox">Description</label>
    <textarea className="form-control  form-height" id="myBox" rows="3" placeholder='Write description here...'></textarea>
  </div>
  </div>
        <div className="d-flex justify-content-end"> 
<div className='submit-button'></div>
        <button type="submit" className=" bttn-baseline " onClick={handleButtonClick}>Submit request</button>
      </div>
      </form>
     </div>
</div>
 </section>
      
    </>
  )
}

export default SubmittionForm
