import React from "react";
import finedine from "../assets/finedine.png";
import "../App.css";
import { useState } from "react";

function Navbar() {

    const [state1,setState1] = useState(true)
    const [state2,setState2] = useState(true)
    const [state3,setState3] = useState(true)
    const [state4,setState4] = useState(true)
    const [state5,setState5] = useState(true)
    const [state6,setState6] = useState(true)
    const [state7,setState7] = useState(true)

const onMouseEnter1 = () => {
    setState1(false)
}

const onMouseLeave1 = () => {
    setState1(true)
}

const onMouseEnter2 = () => {
  setState2(false)
}

const onMouseLeave2 = () => {
  setState2(true)
}

const onMouseEnter3 = () => {
  setState3(false)
}

const onMouseLeave3 = () => {
  setState3(true)
}

const onMouseEnter4 = () => {
  setState4(false)
}

const onMouseLeave4 = () => {
  setState4(true)
}

const onMouseEnter5 = () => {
  setState5(false)
}

const onMouseLeave5 = () => {
  setState5(true)
}

const onMouseEnter6 = () => {
  setState6(false)
}

const onMouseLeave6 = () => {
  setState6(true)
}

const onMouseEnter7 = () => {
  setState7(false)
}

const onMouseLeave7 = () => {
  setState7(true)
}
  return (
    <div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          cursor: "pointer",
          padding: "8px",
          marginLeft: "7%",
          marginRight: "7%"
        }}
      >
        <img src={finedine} style={{ width: "140px" , height:"35px" , marginTop:"10px"}} />
        <p className="nav" style={{color:state1==true?'#5C6577':'#E6034B'}} onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave1}>Home</p>
        <p className="nav" style={{color:state2==true?'#5C6577':'#E6034B'}} onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>About us</p>
        <p className="nav" style={{color:state3==true?'#5C6577':'#E6034B'}} onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave3}>Solutions</p>
        <p className="nav" style={{color:state4==true?'#5C6577':'#E6034B'}} onMouseEnter={onMouseEnter4} onMouseLeave={onMouseLeave4}>Blogs</p>
        <p className="nav" style={{color:state5==true?'#5C6577':'#E6034B'}} onMouseEnter={onMouseEnter5} onMouseLeave={onMouseLeave5}>Inquiry</p>
        <p className="nav" style={{color:state6==true?'#5C6577':'#E6034B'}} onMouseEnter={onMouseEnter6} onMouseLeave={onMouseLeave6}>Contact us</p>
        <p className="nav" style={{color:state7==true?'#5C6577':'#E6034B'}} onMouseEnter={onMouseEnter7} onMouseLeave={onMouseLeave7}>Services</p>
      </div> 

    </div>
  );
}

export default Navbar;
