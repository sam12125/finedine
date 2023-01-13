import React from 'react'
import "../App.css";
import {FaPhoneAlt} from 'react-icons/fa'
import socialmedia from '../assets/social_media.png'

function Footer() {
  return (
    <div>
        <div style={{backgroundColor:"#0B1426",display:"flex",justifyContent:"space-between",marginTop:"50px"}}>
        <div style={{marginLeft:"7%",marginTop:"20px"}}>
            <p style={{color:"#FC8181",fontSize:"20px"}}>Product</p>
            <p style={{color:"white",cursor:"pointer",marginTop:"-8px"}}>Features</p>
            <p style={{color:"white",cursor:"pointer"}}>Tablet Menu</p>
            <p style={{color:"white",cursor:"pointer"}}>Dine-in QR Menu</p>
            <p style={{color:"white",cursor:"pointer"}}>Delivery & Pick-UP Menu</p>
            <p style={{color:"#FC8181",fontSize:"20px",marginTop:"18px"}}>Business Types</p>
            <p style={{color:"white",marginTop:"-8px",cursor:"pointer"}}>Hotels</p>
            <p style={{color:"white",cursor:"pointer"}}>Cafes & Bakery</p>
            <p style={{color:"white",cursor:"pointer"}}>Coffee Shop</p>        
            <p style={{color:"white",cursor:"pointer"}}>Food Truck</p>
            <p style={{color:"white",cursor:"pointer"}}>Bar and Night Club</p>
            <p style={{color:"white",marginTop:"130px"}}>© 2022 Bambulabs Inc. All rights reserved</p>
            </div>
        <div style={{marginTop:"20px"}}>
        <p style={{color:"#FC8181",fontSize:"20px"}}>Partners</p>
            <p style={{color:"white",marginTop:"-8px"}}>Become a Reseller</p>
            <p style={{color:"white",cursor:"pointer"}}>Integrations</p>
            <p style={{color:"#FC8181",fontSize:"20px",marginTop:"90px"}}>Company</p>
            <p style={{color:"white",marginTop:"-8px",cursor:"pointer"}}>Careers</p>
            <p style={{color:"white",cursor:"pointer"}}>Help Center</p>
            <p style={{color:"white",cursor:"pointer"}}>Privacy & Terms</p>
            <p style={{color:"white",cursor:"pointer"}}>Blog</p>
        </div>
        <div style={{marginRight:"7",marginTop:"20px"}}>
        <p style={{color:"#FC8181",fontSize:"20px"}}>Contact Us</p>
        <p style={{color:"white"}}>9440 Santa Monica Blvd. Suite 301 Beverly Hills,</p>
        <p style={{color:"white"}}>CA 90210</p>
        <p style={{color:"white",cursor:"pointer"}}><FaPhoneAlt/>  +1 (954) 531-7622</p>
        <p style={{color:"white",cursor:"pointer"}}>info@finedinemenu.com</p>
        <img src={socialmedia} style={{cursor:"pointer",marginLeft:"-12px"}}/>
        </div>
      </div>
    </div>
  )
}

export default Footer