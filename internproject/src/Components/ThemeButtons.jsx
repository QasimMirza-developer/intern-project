import {React,useState} from 'react'


const ThemeButtons = () => {
  
    const [showAlert, setShowAlert] = useState("button is clicked");
    const handleButtonClick = () => {
      setShowAlert("Button is clicked"),
      console.log(showAlert)

    };





  return (
    <>
    <section className="theme" id='theme'>
<div className="button-groups container" >
                <div className="row">
                    <div className="col-12 col-lg-4 col-md-4  mt-3">
            <button type="button" className="btn btn2 btn-light"  onClick={handleButtonClick}>Acute bronchitis <span className="green">$59<span className="dot">.99<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none"><g clipPath="url(#clip0_0_627)">
                <path d="M8.125 3.99997C8.125 4.14618 8.06396 4.29247 7.94189 4.4039L4.19189 7.83247C3.94775 8.05568 3.55225 8.05568 3.30811 7.83247C3.06396 7.60925 3.06396 7.24765 3.30811 7.02443L6.61719 3.99997L3.30859 0.974971C3.06445 0.751757 3.06445 0.39015 3.30859 0.166935C3.55273 -0.0562792 3.94824 -0.0562792 4.19238 0.166935L7.94238 3.59551C8.06445 3.70711 8.125 3.85354 8.125 3.99997Z" fill="#25D366"/>  </g></svg> </span></span>
            </button>
            
           




              </div>
                  <div className="col-12 col-lg-4 col-md-4  mt-3">
                        <button type="button" className="btn btn2 btn-light" onClick={handleButtonClick}>Allergies <span className="green">$59<span className="dot">.99<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none"><g clipPath="url(#clip0_0_627)">
                            <path d="M8.125 3.99997C8.125 4.14618 8.06396 4.29247 7.94189 4.4039L4.19189 7.83247C3.94775 8.05568 3.55225 8.05568 3.30811 7.83247C3.06396 7.60925 3.06396 7.24765 3.30811 7.02443L6.61719 3.99997L3.30859 0.974971C3.06445 0.751757 3.06445 0.39015 3.30859 0.166935C3.55273 -0.0562792 3.94824 -0.0562792 4.19238 0.166935L7.94238 3.59551C8.06445 3.70711 8.125 3.85354 8.125 3.99997Z" fill="#25D366"/>  </g></svg> </span></span>
                        </button>
                        
             </div>
             <div className="col-12 col-lg-4 col-md-4  mt-3">
                <button type="button" className="btn btn2 btn-light" onClick={handleButtonClick}>Cold Sore <span className="green">$59<span className="dot">.99<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none"><g clipPath="url(#clip0_0_627)">
                    <path d="M8.125 3.99997C8.125 4.14618 8.06396 4.29247 7.94189 4.4039L4.19189 7.83247C3.94775 8.05568 3.55225 8.05568 3.30811 7.83247C3.06396 7.60925 3.06396 7.24765 3.30811 7.02443L6.61719 3.99997L3.30859 0.974971C3.06445 0.751757 3.06445 0.39015 3.30859 0.166935C3.55273 -0.0562792 3.94824 -0.0562792 4.19238 0.166935L7.94238 3.59551C8.06445 3.70711 8.125 3.85354 8.125 3.99997Z" fill="#25D366"/>  </g></svg> </span></span>
                </button>
                
     </div>
     <div className="col-12 col-lg-4 col-md-4  mt-3">
        <button type="button" className="btn btn2 btn-light" onClick={handleButtonClick}>COVID-19 Rx <span className="green">$59<span className="dot">.99<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none"><g clipPath="url(#clip0_0_627)">
            <path d="M8.125 3.99997C8.125 4.14618 8.06396 4.29247 7.94189 4.4039L4.19189 7.83247C3.94775 8.05568 3.55225 8.05568 3.30811 7.83247C3.06396 7.60925 3.06396 7.24765 3.30811 7.02443L6.61719 3.99997L3.30859 0.974971C3.06445 0.751757 3.06445 0.39015 3.30859 0.166935C3.55273 -0.0562792 3.94824 -0.0562792 4.19238 0.166935L7.94238 3.59551C8.06445 3.70711 8.125 3.85354 8.125 3.99997Z" fill="#25D366"/>  </g></svg> </span></span>
        </button>
        
</div>
     <div className="col-12 col-lg-4 col-md-4  mt-3">
        <button type="button" className="btn btn2 btn-light" onClick={handleButtonClick}>Dental infection<span className="green">$59<span className="dot">.99<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none"><g clipPath="url(#clip0_0_627)">
            <path d="M8.125 3.99997C8.125 4.14618 8.06396 4.29247 7.94189 4.4039L4.19189 7.83247C3.94775 8.05568 3.55225 8.05568 3.30811 7.83247C3.06396 7.60925 3.06396 7.24765 3.30811 7.02443L6.61719 3.99997L3.30859 0.974971C3.06445 0.751757 3.06445 0.39015 3.30859 0.166935C3.55273 -0.0562792 3.94824 -0.0562792 4.19238 0.166935L7.94238 3.59551C8.06445 3.70711 8.125 3.85354 8.125 3.99997Z" fill="#25D366"/>  </g></svg> </span></span>
        </button>
        
</div>
<div className="col-12 col-lg-4 col-md-4  mt-3 ">
    <button type="button" className="btn btn2 btn-light"onClick={handleButtonClick}>Ear infection<span className="green">$59<span className="dot">.99<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none"><g clipPath="url(#clip0_0_627)">
        <path d="M8.125 3.99997C8.125 4.14618 8.06396 4.29247 7.94189 4.4039L4.19189 7.83247C3.94775 8.05568 3.55225 8.05568 3.30811 7.83247C3.06396 7.60925 3.06396 7.24765 3.30811 7.02443L6.61719 3.99997L3.30859 0.974971C3.06445 0.751757 3.06445 0.39015 3.30859 0.166935C3.55273 -0.0562792 3.94824 -0.0562792 4.19238 0.166935L7.94238 3.59551C8.06445 3.70711 8.125 3.85354 8.125 3.99997Z" fill="#25D366"/>  </g></svg> </span></span>
    </button>
    
</div>
<div className="col-12 col-lg-4 col-md-4  mt-3">
    <button type="button" className="btn btn2 btn-light" onClick={handleButtonClick}>Flu (Influenza) <span className="green">$59<span className="dot">.99<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none"><g clipPath="url(#clip0_0_627)">
        <path d="M8.125 3.99997C8.125 4.14618 8.06396 4.29247 7.94189 4.4039L4.19189 7.83247C3.94775 8.05568 3.55225 8.05568 3.30811 7.83247C3.06396 7.60925 3.06396 7.24765 3.30811 7.02443L6.61719 3.99997L3.30859 0.974971C3.06445 0.751757 3.06445 0.39015 3.30859 0.166935C3.55273 -0.0562792 3.94824 -0.0562792 4.19238 0.166935L7.94238 3.59551C8.06445 3.70711 8.125 3.85354 8.125 3.99997Z" fill="#25D366"/>  </g></svg> </span></span>
    </button>
    
</div>
<div className="col-12 col-lg-4 col-md-4  mt-3">
    <button type="button" className="btn btn2 btn-light" onClick={handleButtonClick}>Food poisoning <span className="green">$59<span className="dot">.99<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none"><g clipPath="url(#clip0_0_627)">
        <path d="M8.125 3.99997C8.125 4.14618 8.06396 4.29247 7.94189 4.4039L4.19189 7.83247C3.94775 8.05568 3.55225 8.05568 3.30811 7.83247C3.06396 7.60925 3.06396 7.24765 3.30811 7.02443L6.61719 3.99997L3.30859 0.974971C3.06445 0.751757 3.06445 0.39015 3.30859 0.166935C3.55273 -0.0562792 3.94824 -0.0562792 4.19238 0.166935L7.94238 3.59551C8.06445 3.70711 8.125 3.85354 8.125 3.99997Z" fill="#25D366"/>  </g></svg> </span></span>
    </button>
    
</div>
<div className="col-12 col-lg-4 col-md-4  mt-3">
    <button type="button" className="btn btn2 btn-light" onClick={handleButtonClick}>Heatburn<span className="green">$59<span className="dot">.99<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none"><g clipPath="url(#clip0_0_627)">
        <path d="M8.125 3.99997C8.125 4.14618 8.06396 4.29247 7.94189 4.4039L4.19189 7.83247C3.94775 8.05568 3.55225 8.05568 3.30811 7.83247C3.06396 7.60925 3.06396 7.24765 3.30811 7.02443L6.61719 3.99997L3.30859 0.974971C3.06445 0.751757 3.06445 0.39015 3.30859 0.166935C3.55273 -0.0562792 3.94824 -0.0562792 4.19238 0.166935L7.94238 3.59551C8.06445 3.70711 8.125 3.85354 8.125 3.99997Z" fill="#25D366"/>  </g></svg> </span></span>
    </button>
    
</div>
<div className="col-12 col-lg-4 col-md-4  mt-3">
    <button type="button" onClick={handleButtonClick} className="btn btn2 btn-light" >Migraine relief <span className="green">$59<span className="dot">.99<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none"><g clipPath="url(#clip0_0_627)">
        <path d="M8.125 3.99997C8.125 4.14618 8.06396 4.29247 7.94189 4.4039L4.19189 7.83247C3.94775 8.05568 3.55225 8.05568 3.30811 7.83247C3.06396 7.60925 3.06396 7.24765 3.30811 7.02443L6.61719 3.99997L3.30859 0.974971C3.06445 0.751757 3.06445 0.39015 3.30859 0.166935C3.55273 -0.0562792 3.94824 -0.0562792 4.19238 0.166935L7.94238 3.59551C8.06445 3.70711 8.125 3.85354 8.125 3.99997Z" fill="#25D366"/>  </g></svg> </span></span>
    </button>
    
</div>
<div className="col-12 col-lg-4 col-md-4  mt-3">
    <button type="button" onClick={handleButtonClick} className="btn btn2 btn-light">motion sickness <span className="green">$59<span className="dot">.99<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none"><g clipPath="url(#clip0_0_627)">
        <path d="M8.125 3.99997C8.125 4.14618 8.06396 4.29247 7.94189 4.4039L4.19189 7.83247C3.94775 8.05568 3.55225 8.05568 3.30811 7.83247C3.06396 7.60925 3.06396 7.24765 3.30811 7.02443L6.61719 3.99997L3.30859 0.974971C3.06445 0.751757 3.06445 0.39015 3.30859 0.166935C3.55273 -0.0562792 3.94824 -0.0562792 4.19238 0.166935L7.94238 3.59551C8.06445 3.70711 8.125 3.85354 8.125 3.99997Z" fill="#25D366"/>  </g></svg> </span></span>
    </button>
    
</div>
<div className="col-12 col-lg-4 col-md-4  mt-3">
    <button type="button" onClick={handleButtonClick} className="btn btn2 btn-light">Nausea / vomiting <span className="green">$59<span className="dot">.99<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none"><g clipPath="url(#clip0_0_627)">
        <path d="M8.125 3.99997C8.125 4.14618 8.06396 4.29247 7.94189 4.4039L4.19189 7.83247C3.94775 8.05568 3.55225 8.05568 3.30811 7.83247C3.06396 7.60925 3.06396 7.24765 3.30811 7.02443L6.61719 3.99997L3.30859 0.974971C3.06445 0.751757 3.06445 0.39015 3.30859 0.166935C3.55273 -0.0562792 3.94824 -0.0562792 4.19238 0.166935L7.94238 3.59551C8.06445 3.70711 8.125 3.85354 8.125 3.99997Z" fill="#25D366"/>  </g></svg> </span></span>
    </button>
    
</div>
<div className="col-12 col-lg-4 col-md-4  mt-3">
    <button type="button" onClick={handleButtonClick} className="btn btn2 btn-light">Oral herpes<span className="green">$59<span className="dot">.99<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none"><g clipPath="url(#clip0_0_627)">
        <path d="M8.125 3.99997C8.125 4.14618 8.06396 4.29247 7.94189 4.4039L4.19189 7.83247C3.94775 8.05568 3.55225 8.05568 3.30811 7.83247C3.06396 7.60925 3.06396 7.24765 3.30811 7.02443L6.61719 3.99997L3.30859 0.974971C3.06445 0.751757 3.06445 0.39015 3.30859 0.166935C3.55273 -0.0562792 3.94824 -0.0562792 4.19238 0.166935L7.94238 3.59551C8.06445 3.70711 8.125 3.85354 8.125 3.99997Z" fill="#25D366"/>  </g></svg> </span></span>
    </button>
    
</div>

<div className="col-12 col-lg-4 col-md-4  mt-3">
    <button type="button" onClick={handleButtonClick} className="btn btn2 btn-light">pain relief <span className="green">$59<span className="dot">.99<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none"><g clipPath="url(#clip0_0_627)">
        <path d="M8.125 3.99997C8.125 4.14618 8.06396 4.29247 7.94189 4.4039L4.19189 7.83247C3.94775 8.05568 3.55225 8.05568 3.30811 7.83247C3.06396 7.60925 3.06396 7.24765 3.30811 7.02443L6.61719 3.99997L3.30859 0.974971C3.06445 0.751757 3.06445 0.39015 3.30859 0.166935C3.55273 -0.0562792 3.94824 -0.0562792 4.19238 0.166935L7.94238 3.59551C8.06445 3.70711 8.125 3.85354 8.125 3.99997Z" fill="#25D366"/>  </g></svg> </span></span>
    </button>
    
</div>
<div className="col-12 col-lg-4 col-md-4  mt-3">
    <button type="button" onClick={handleButtonClick} className="btn btn2 btn-light">Paxlovid <span className="green">$59<span className="dot">.99<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none"><g clipPath="url(#clip0_0_627)">
        <path d="M8.125 3.99997C8.125 4.14618 8.06396 4.29247 7.94189 4.4039L4.19189 7.83247C3.94775 8.05568 3.55225 8.05568 3.30811 7.83247C3.06396 7.60925 3.06396 7.24765 3.30811 7.02443L6.61719 3.99997L3.30859 0.974971C3.06445 0.751757 3.06445 0.39015 3.30859 0.166935C3.55273 -0.0562792 3.94824 -0.0562792 4.19238 0.166935L7.94238 3.59551C8.06445 3.70711 8.125 3.85354 8.125 3.99997Z" fill="#25D366"/>  </g></svg> </span></span>
    </button>
    
</div>
<div className="col-12 col-lg-4 col-md-4  mt-3">
    <button type="button" onClick={handleButtonClick} className="btn btn2 btn-light">Pediatric<span className="green">$59<span className="dot">.99<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none"><g clipPath="url(#clip0_0_627)">
        <path d="M8.125 3.99997C8.125 4.14618 8.06396 4.29247 7.94189 4.4039L4.19189 7.83247C3.94775 8.05568 3.55225 8.05568 3.30811 7.83247C3.06396 7.60925 3.06396 7.24765 3.30811 7.02443L6.61719 3.99997L3.30859 0.974971C3.06445 0.751757 3.06445 0.39015 3.30859 0.166935C3.55273 -0.0562792 3.94824 -0.0562792 4.19238 0.166935L7.94238 3.59551C8.06445 3.70711 8.125 3.85354 8.125 3.99997Z" fill="#25D366"/>  </g></svg> </span></span>
    </button>
    
</div>
<div className="col-12 col-lg-4 col-md-4  mt-3">
    <button type="button" onClick={handleButtonClick} className="btn btn2 btn-light">Phone consult <span className="green">$59<span className="dot">.99<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none"><g clipPath="url(#clip0_0_627)">
        <path d="M8.125 3.99997C8.125 4.14618 8.06396 4.29247 7.94189 4.4039L4.19189 7.83247C3.94775 8.05568 3.55225 8.05568 3.30811 7.83247C3.06396 7.60925 3.06396 7.24765 3.30811 7.02443L6.61719 3.99997L3.30859 0.974971C3.06445 0.751757 3.06445 0.39015 3.30859 0.166935C3.55273 -0.0562792 3.94824 -0.0562792 4.19238 0.166935L7.94238 3.59551C8.06445 3.70711 8.125 3.85354 8.125 3.99997Z" fill="#25D366"/>  </g></svg> </span></span>
    </button>
    
</div>
<div className="col-12 col-lg-4 col-md-4  mt-3">
    <button type="button" onClick={handleButtonClick} className="btn btn2 btn-light">Pink eye <span className="green">$59<span className="dot">.99<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none"><g clipPath="url(#clip0_0_627)">
        <path d="M8.125 3.99997C8.125 4.14618 8.06396 4.29247 7.94189 4.4039L4.19189 7.83247C3.94775 8.05568 3.55225 8.05568 3.30811 7.83247C3.06396 7.60925 3.06396 7.24765 3.30811 7.02443L6.61719 3.99997L3.30859 0.974971C3.06445 0.751757 3.06445 0.39015 3.30859 0.166935C3.55273 -0.0562792 3.94824 -0.0562792 4.19238 0.166935L7.94238 3.59551C8.06445 3.70711 8.125 3.85354 8.125 3.99997Z" fill="#25D366"/>  </g></svg> </span></span>
    </button>
    
</div>
<div className="col-12 col-lg-4 col-md-4  mt-3">
    <button type="button" onClick={handleButtonClick} className="btn btn2 btn-light">Sinus infection<span className="green">$59<span className="dot">.99<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none"><g clipPath="url(#clip0_0_627)">
        <path d="M8.125 3.99997C8.125 4.14618 8.06396 4.29247 7.94189 4.4039L4.19189 7.83247C3.94775 8.05568 3.55225 8.05568 3.30811 7.83247C3.06396 7.60925 3.06396 7.24765 3.30811 7.02443L6.61719 3.99997L3.30859 0.974971C3.06445 0.751757 3.06445 0.39015 3.30859 0.166935C3.55273 -0.0562792 3.94824 -0.0562792 4.19238 0.166935L7.94238 3.59551C8.06445 3.70711 8.125 3.85354 8.125 3.99997Z" fill="#25D366"/>  </g></svg> </span></span>
    </button>
    
</div>
<div className="col-12 col-lg-4 col-md-4  mt-3">
    <button type="button" onClick={handleButtonClick} className="btn btn2 btn-light">Strep throat <span className="green">$59<span className="dot">.99<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none"><g clipPath="url(#clip0_0_627)">
        <path d="M8.125 3.99997C8.125 4.14618 8.06396 4.29247 7.94189 4.4039L4.19189 7.83247C3.94775 8.05568 3.55225 8.05568 3.30811 7.83247C3.06396 7.60925 3.06396 7.24765 3.30811 7.02443L6.61719 3.99997L3.30859 0.974971C3.06445 0.751757 3.06445 0.39015 3.30859 0.166935C3.55273 -0.0562792 3.94824 -0.0562792 4.19238 0.166935L7.94238 3.59551C8.06445 3.70711 8.125 3.85354 8.125 3.99997Z" fill="#25D366"/>  </g></svg> </span></span>
    </button>
    
</div>
<div className="col-12 col-lg-4 col-md-4  mt-3">
    <button type="button" onClick={handleButtonClick} className="btn btn2 btn-light">Stye <span className="green">$59<span className="dot">.99<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none"><g clipPath="url(#clip0_0_627)">
        <path d="M8.125 3.99997C8.125 4.14618 8.06396 4.29247 7.94189 4.4039L4.19189 7.83247C3.94775 8.05568 3.55225 8.05568 3.30811 7.83247C3.06396 7.60925 3.06396 7.24765 3.30811 7.02443L6.61719 3.99997L3.30859 0.974971C3.06445 0.751757 3.06445 0.39015 3.30859 0.166935C3.55273 -0.0562792 3.94824 -0.0562792 4.19238 0.166935L7.94238 3.59551C8.06445 3.70711 8.125 3.85354 8.125 3.99997Z" fill="#25D366"/>  </g></svg> </span></span>
    </button>
    
</div>
<div className="col-12 col-lg-4 col-md-4  mt-3">
    <button type="button" onClick={handleButtonClick} className="btn btn2 btn-light">Thrush (oral) <span className="green">$59<span className="dot">.99<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none"><g clipPath="url(#clip0_0_627)">
        <path d="M8.125 3.99997C8.125 4.14618 8.06396 4.29247 7.94189 4.4039L4.19189 7.83247C3.94775 8.05568 3.55225 8.05568 3.30811 7.83247C3.06396 7.60925 3.06396 7.24765 3.30811 7.02443L6.61719 3.99997L3.30859 0.974971C3.06445 0.751757 3.06445 0.39015 3.30859 0.166935C3.55273 -0.0562792 3.94824 -0.0562792 4.19238 0.166935L7.94238 3.59551C8.06445 3.70711 8.125 3.85354 8.125 3.99997Z" fill="#25D366"/>  </g></svg> </span></span>
    </button>
    
</div>
<div className="col-12 col-lg-4 col-md-4  mt-3">
    <button type="button" onClick={handleButtonClick} className="btn btn2 btn-light">URI (upper respiratory) <span className="green">$59<span className="dot">.99<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none"><g clipPath="url(#clip0_0_627)">
        <path d="M8.125 3.99997C8.125 4.14618 8.06396 4.29247 7.94189 4.4039L4.19189 7.83247C3.94775 8.05568 3.55225 8.05568 3.30811 7.83247C3.06396 7.60925 3.06396 7.24765 3.30811 7.02443L6.61719 3.99997L3.30859 0.974971C3.06445 0.751757 3.06445 0.39015 3.30859 0.166935C3.55273 -0.0562792 3.94824 -0.0562792 4.19238 0.166935L7.94238 3.59551C8.06445 3.70711 8.125 3.85354 8.125 3.99997Z" fill="#25D366"/>  </g></svg> </span></span>
    </button>
    
</div>
<div className="col-12 col-lg-4 col-md-4  mt-3">
    <button type="button" onClick={handleButtonClick} className="btn btn2 btn-light">UTI <span className="green">$59<span className="dot">.99<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none"><g clipPath="url(#clip0_0_627)">
        <path d="M8.125 3.99997C8.125 4.14618 8.06396 4.29247 7.94189 4.4039L4.19189 7.83247C3.94775 8.05568 3.55225 8.05568  3.30811 7.83247C3.06396 7.60925 3.06396 7.24765 3.30811 7.02443L6.61719 3.99997L3.30859 0.974971C3.06445 0.751757 3.06445 0.39015 3.30859 0.166935C3.55273 -0.0562792 3.94824 -0.0562792 4.19238 0.166935L7.94238 3.59551C8.06445 3.70711 8.125 3.85354 8.125 3.99997Z" fill="#25D366"/>  </g></svg> </span></span>
    </button>
    
</div>
 </div>
</div>

</section> 
      
    </>
  )
}

export default ThemeButtons
