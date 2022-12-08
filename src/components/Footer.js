import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { CDBFooter, CDBFooterLink, CDBBox } from 'cdbreact';

 const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img src={require('../images/logo.png')} alt='' width="150px" height="100px" style={{paddingLeft: "50px"}} />
              
            </a>
            <p className="my-3" style={{ width: '250px' }}>
            StarBuzz is the leading and number one Influencer Marketing platform in India.
            </p>
            
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Pagaes
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">About Us</CDBFooterLink>
              <CDBFooterLink href="/">Contact us</CDBFooterLink>
              <CDBFooterLink href="/">Media</CDBFooterLink>
              <CDBFooterLink href="/">Privacy Policy</CDBFooterLink>
              <CDBFooterLink href="/">Terms and Conditions</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Services
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Influencer Marketing</CDBFooterLink>
              <CDBFooterLink href="/">Campaign Discovery</CDBFooterLink>
              <CDBFooterLink href="/">Campaign analysis</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Follow us 
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <BsFacebook size={40} style={{paddingRight: "5px"}} />
              <AiFillTwitterCircle size={40} style={{paddingRight: "8px"}}  />
              <AiFillLinkedin size={40} style={{paddingRight: "5px"}}  />
              <AiOutlineInstagram size={40} style={{paddingRight: "5px"}}  />
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <hr/>
        <small className="text-center style={{'0'}}"> Copyright &copy; starbuzz Pvt Ltd. All Right Reserved.</small>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer