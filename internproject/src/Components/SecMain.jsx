import React, { useState } from 'react';


const SecMain = () => {
  const [showAlert, setShowAlert] = useState("button is clicked");
  const handleButtonClick = () => {
    setShowAlert("Button is clicked"),
    console.log(showAlert)

  };
  return (
    <main>
      <h1 className="heading-home">
        A Wide Range Of Medical <span className="span-home"> Services</span>
      </h1>
      <p className="para-home">
        Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus.
      </p>
      <div className="btn-home">
        <div className="row">
          <div className="col-12">
            <button type="button" onClick={handleButtonClick} className="btn dark-btn">
              Medical Consultation
            </button>
            <button type="button" onClick={handleButtonClick} className="btn light-btn">
              Treatment Programs
            </button>
            <button type="button" onClick={handleButtonClick} className="btn light-btn">
              Lab Testing
            </button>
          </div>
        </div>
      </div>

      <div className="btn-home-line mt-3">
        <div className="row">
          <div className="col-12 col-lg-12 col-md-4 col-sm-12">
            <button type="button" onClick={handleButtonClick} className="btn btn1 btn-success">
              Urgent care
            </button>
            <button type="button" onClick={handleButtonClick} className="btn btn1 btn-light1">
              STD / STI
            </button>
            <button type="button" onClick={handleButtonClick} className="btn btn1 btn-light1">
              Women’s health
            </button>
          
            <button type="button" onClick={handleButtonClick} className="btn btn1 btn-light1">
              Men’s health
            </button>
            <button type="button" onClick={handleButtonClick} className="btn btn1 btn-light1">
              Psychiatry
            </button>
            <button type="button" onClick={handleButtonClick} className="btn btn1 btn-light1">
              Primary care
            </button>
            <button type="button" onClick={handleButtonClick} className="btn btn1 btn-light1">
              Dermatology
            </button>
            <button type="button" onClick={handleButtonClick} className="btn btn1 btn-light1">
              Miscellaneous
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SecMain;
