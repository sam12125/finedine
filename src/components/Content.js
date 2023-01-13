import React from 'react'
import "../App.css";
import order from '../assets/order.png'
import language from '../assets/language.png'
import country from '../assets/country.png'
import device from '../assets/device.png'
import { FaArrowRight } from "react-icons/fa";
import {FaCheck} from 'react-icons/fa';

function Content() {
  return (
    <div>
        <div style={{ display: "flex",marginTop:"2%",padding:"5px"}}>
        <div style={{ width: "120%", marginTop: "4%" }}>
          <h1 style={{ fontSize: "75px", marginLeft: "10%" }}>
            The simplest way
          </h1>
          <h1
            style={{ fontSize: "75px", marginTop: "-75px", marginLeft: "10%" }}
          >
            to
          </h1>
          <h1
            style={{
              fontSize: "75px",
              marginTop: "-85px",
              marginLeft: "10%",
              color: "rgb(236, 82, 130)",
            }}
          >
            create your menu
          </h1>
          <p
            style={{
              color: "#677080",
              marginLeft: "10%",
              fontSize: "25px",
              width: "80%",
              marginTop: "-40px",
            }}
          >
            FineDine’s mobile ordering and fast-checkout increase average order
            value by 20%, save 15 minutes per table and generate 40% more tips.
          </p>
          <div
            style={{
              marginLeft: "10%",
              display: "flex",
              gap: "6px",
              marginTop: "20px",
            }}
          >
            <button
              style={{
                backgroundColor: "rgb(230, 3, 75)",
                color: "white",
                fontSize: "16px",
                borderStyle: "none",
                borderRadius: "5px",
                padding: "20px",
                width: "130px",
              }}
            >
              Try now
            </button>
            <button
              style={{
                backgroundColor: "white",
                color: "rgb(236, 82, 130)",
                fontSize: "16px",
                borderStyle: "none",
                borderRadius: "5px",
                padding: "20px",
              }}
            >
              Book a demo
            </button>
          </div>
        </div>
        <div style={{ width: "80%" }}>
          <img
            src="https://finedine.imgix.net/images/7f1f7041-8c92-44e5-88d2-41b57fd770e2.png?auto=format&dpr=1&auto=compress"
            style={{ width: "100%", height: "90%" }}
          />
        </div>
      </div>

      <div style={{ display: "flex",marginTop:"4%"}}>
        <div style={{width:"80%",marginLeft:"5%",marginTop:"6%"}}>
          <p style={{color:"rgb(230, 3, 75)",fontSize:"18px"}}>MAXIMIZED REVENUE</p>
          <h2 style={{fontSize:"40px",marginTop:"-18px"}}>Dine-in Ordering & Payment Solutions</h2>
          <p style={{color: "#677080",fontSize:"20px",marginTop:"-15px"}}>
            Enhance your guest experience with FineDine Tablet or QR Mobile
            ordering solutions. Let your customers view your branded digital
            menu, place their orders and pay the bills to avoid errors and save
            time. Your staff will have more time for hospitality.FineDine
            increases the order amounts with smart upsells and cross-sells.
          </p>
          <p style={{color:"rgb(230, 3, 75)",fontSize:"18px",marginTop:"5px"}}>Learn More <FaArrowRight/></p>
        </div>
        <div style={{width:"100%"}}>
          <img src="https://finedine.imgix.net/images/6a043611-cb13-4510-be82-20c0785cbe47.png?auto=format&dpr=1&auto=compress" style={{width:"90%"}} />
        </div>
      </div>

      <div style={{ display: "flex",gap:"60px",marginTop:"10%"}}>
        <div style={{width:"80%",marginLeft:"8%",marginTop:"10%"}}>
          <p style={{color:"rgb(230, 3, 75)",fontSize:"18px"}}>EXCELLENT CUSTOMER SATISFACTION</p>
          <h2 style={{fontSize:"40px",marginTop:"-18px"}}>FineDine Fast Checkout</h2>
          <p style={{color: "#677080",fontSize:"20px",marginTop:"-15px"}}>
          Keep your traditional service experience while offering an easy payment process. Spend less time settling and splitting the bills, turn tables faster and collect more tips.Integrated with the world’s leading POS and payment systems - no app needed.
          </p>
          <p style={{color:"rgb(230, 3, 75)",fontSize:"18px",marginTop:"5px"}}>Learn More <FaArrowRight/></p>
        </div>
        <div style={{width:"100%"}}>
          <img src="https://www.finedinemenu.com/images/content/homepage_fastcheckout_image.png" style={{width:"90%"}} />
        </div>
      </div>

      <div style={{ display: "flex",gap:"60px",marginTop:"10%"}}>
        <div style={{width:"80%",marginLeft:"8%",marginTop:"10%"}}>
          <p style={{color:"rgb(230, 3, 75)",fontSize:"18px"}}>LOWEST COMMISSION RATE ON THE MARKET</p>
          <h2 style={{fontSize:"38px",marginTop:"-18px"}}>FineDine Delivery & Pick-up Menu with Zero Commission</h2>
          <p style={{color: "#677080",fontSize:"20px",marginTop:"-15px"}}>
          Share your menu with regular customers to take online delivery and pick-up orders. Eliminate high commissions and increase your profit margins. Own your customer data, create engagement and reach out to new customers.
          </p>
          <p style={{color:"rgb(230, 3, 75)",fontSize:"18px",marginTop:"5px"}}>Learn More <FaArrowRight/></p>
        </div>
        <div style={{width:"100%"}}>
          <img src="https://finedine.imgix.net/images/fead078d-8071-45f9-b470-f3392d61a550.png?auto=format&dpr=1&auto=compress" style={{width:"90%"}} />
        </div>
      </div>

      
      <div style={{marginTop:"8%"}}>
        <h1 style={{textAlign:"center"}}>Why operators choose FineDine</h1>
        <div style={{display:"flex",justifyContent:"space-between",marginLeft:"9%",marginRight:"5%",marginTop:"40px"}}>
            <div>
                <img src="https://finedine.imgix.net/images/49c48f2c-87ec-4b44-8d2f-377cec0cb12c.png?auto=format&dpr=1&auto=compress" style={{width:"80%"}}/>
                <h2 style={{fontSize:"25px",width:"90%"}}>Increase Your Revenue More Than 30%</h2>
                <p style={{color: "#677080",fontSize:"18px"}}><FaCheck/> Increased Table Turnover</p>
                <p style={{color: "#677080",fontSize:"18px"}}><FaCheck/>  Increased Ticket Sizes</p>
                <p style={{color: "#677080",fontSize:"18px"}}><FaCheck/>     Increased Tips</p>
            </div>
            <div>
            <img src="https://finedine.imgix.net/images/419568d0-508a-44e7-8ecf-f42cf89be891.png?auto=format&dpr=1&auto=compress" style={{width:"80%"}}/>
                <h2 style={{fontSize:"25px",width:"90%"}}>Decrease Operational Costs by 30%</h2>
                <p style={{color: "#677080",fontSize:"18px"}}><FaCheck/> Eliminate Human Errors</p>
                <p style={{color: "#677080",fontSize:"18px"}}><FaCheck/>  Increased Labor Productivity</p>
                <p style={{color: "#677080",fontSize:"18px"}}><FaCheck/> Low Maintenance Cost</p>
            </div>
            <div>
            <img src="https://finedine.imgix.net/images/8f39d02b-e74d-4101-b574-c30dc748b17b.png?auto=format&dpr=1&auto=compress" style={{width:"80%"}}/>
                <h2 style={{fontSize:"25px",width:"90%"}}>Gain More Control Over Your Business</h2>
                <p style={{color: "#677080",fontSize:"18px"}}><FaCheck/> Real-Time Data</p>
                <p style={{color: "#677080",fontSize:"18px"}}><FaCheck/> Data Analytics for Smarter Decisions</p>
                <p style={{color: "#677080",fontSize:"18px"}}><FaCheck/> Update with One Click</p>
            </div>
        </div>
      </div>

      <div style={{ display: "flex",gap:"60px",marginTop:"10%",marginRight:"5%"}}>
        <div style={{width:"80%",marginLeft:"8%",marginTop:"10%"}}>
          <h1 style={{fontSize:"50px"}}>Some numbers that matter</h1>
          <p style={{fontSize:"18px",marginTop:"-20px"}}>There is a reason why we are the best in the market.</p>
        <div style={{display:"flex",gap:"40%"}}>
            <div>
                <div style={{display:"flex",gap:"10px"}}>
                    <div>
                    <img src={country} style={{marginTop:"37px"}}/>
                    </div>
                    <div>
                    <h1>70</h1>
                    <p style={{marginTop:"-20px"}}>Countries</p>
                    </div>
                </div>
                <div style={{display:"flex",gap:"10px"}}>
                <div>
                    <img src={language} style={{marginTop:"37px"}}/>
                    </div>
                    <div>
                    <h1>70</h1>
                    <p style={{marginTop:"-20px"}}>Languages</p>
                    </div>
                </div>
            </div>
            <div>
            <div style={{display:"flex",gap:"10px"}}>
            <div>
                    <img src={device} style={{marginTop:"37px"}}/>
                    </div>
                    <div>
                    <h1>70</h1>
                    <p style={{marginTop:"-20px"}}>Devices</p>
                    </div>
                </div>
                <div style={{display:"flex",gap:"10px"}}>
                <div>
                    <img src={order} style={{marginTop:"37px"}}/>
                    </div>
                    <div>
                    <h1>70</h1>
                    <p style={{marginTop:"-20px"}}>Orders</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div style={{width:"100%"}}>
          <img src="https://finedine.imgix.net/images/1f8e5b13-b25b-4487-87f0-20a92836c062.png?auto=format&dpr=1&auto=compress" style={{width:"90%"}} />
        </div>
      </div>



    </div>
  )
}

export default Content