import React from 'react'
import { BiHomeAlt } from "react-icons/bi";
import { FiPhoneCall,FiMail } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import "./ContactUs.css"


const ContactUs = () => {
  return (
    <div className='main'>
        <h1>Contact Us</h1>

      <div className='submain'>
        {/* <h6 className='contactus'  style={{color:'orange' }}>--Contact Us</h6> */}
        <h2>Say Hello to the Collaboration Hub</h2>
      </div>

      <div className='content'>

<div className='orangebox'>

     <div className='boxContent'>

           <div class="box1">
               <h5><BiHomeAlt size={40} style={{paddingRight:"10px"}} /><img src={require('../images/home.svg')} alt='' />T-Hub,IIITCampus,Gachibowli, <span>Hyderabad,India</span></h5>
           </div>

           <div class="box2">
               <h5><FiPhoneCall size={40} style={{paddingRight:"10px"}} /> contact@starbuzzservices.com </h5>
           </div>

           <div class="box3">
               <h5><FiMail size={40} style={{paddingRight:"10px"}} /> +91 9998547156 </h5>
           </div>

           <div class="box4">
             <div>
               <h2> Follow Us </h2>
               <BsFacebook size={40} style={{paddingRight: "5px"}} />
               <AiFillTwitterCircle size={40} style={{paddingRight: "5px"}}  />
               <AiFillLinkedin size={40} style={{paddingRight: "5px"}}  />
               <AiOutlineInstagram size={40} style={{paddingRight: "5px"}}  />
             </div>
           </div>

     </div>
{/* nnnnnn      */}





 {/* nnnnn     */}
 </div>  

 

 <div className='form'>
   {/* <h1>Get In Touch</h1> */}

   <div className="container mt-5">

<h2 className="mb-3" style={{textAlign:"left"}}>Get In Touch</h2>
<form >
  <div className="mb-3">
    <input className="form-control" type="text" value="Name" id="name" required />
  </div>
  <div className="mb-3">
    
    <input className="form-control" type="email" value="Email" id="email" required />
  </div>
  <div className="mb-3">
    
    <textarea className="form-control" value="Message" id="message" required />
  </div>
  <button className="btn btn-danger" type="submit">
    Submit
  </button>
</form>
</div>


  </div> 

  </div>

  <div className='footer'>

    



  </div>

  


  </div>


  )
}


export default ContactUs