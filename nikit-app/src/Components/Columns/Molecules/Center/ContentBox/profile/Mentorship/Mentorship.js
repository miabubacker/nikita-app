import React, { useState } from "react";
import "./Mentorship.scss";
import AddCircleLineIcon from "remixicon-react/AddCircleLineIcon";
import PhoneFillIcon from "remixicon-react/PhoneFillIcon";
import Message3LineIcon from "remixicon-react/Message3LineIcon";
import TimeFillIcon from "remixicon-react/TimeFillIcon";
import HandCoinLineIcon from "remixicon-react/HandCoinLineIcon";
import CheckboxCircleFillIcon from "remixicon-react/CheckboxCircleFillIcon";
import SuitcaseFillIcon from "remixicon-react/SuitcaseFillIcon";
export default function Mentorship() {
  const [plan, setPlan] = useState(true);
  return (
    <section className="mentorship_Container">
      <div className="mentormain">
        <div className="topLayer">
          <div className="mydesign">
            6+ years of industry experience in design
          </div>
          <div>
            <h2>Mentorship</h2>
          </div>
          <p className="content">
            Help for junior UI/UX designers and those moving into product
            development.
          </p>
        </div>
      </div>
      <div className="payment_Methods">
      <div class="btn3_container">
    <span class={`btn ${plan&&'btn1'}`} onClick={() => {
              setPlan(true);
            }}>Standard plan</span>
    <span class={`btn main ${plan? 'active':""}`}></span>
    <span class={`btn ${!plan&&'btn2'}`}onClick={() => {
              setPlan(false);
            }}>Sessions</span>
  </div>

        {/* <div className={`items `}>
          <div
            className={`classic ${plan&&'plan'} `}
            onClick={() => {
              setPlan(true);
            }}
          >
            Standard plan
          </div>
          <div
            className={`classic`}
            onClick={() => {
              setPlan(false);
            }}
          >
            session
          </div>
        </div> */}
        {plan && (
          <div className="info_section">
            <div className="amount">
              $100<span>/month</span>
            </div>
            <div className="contact_details">
              <div className="contact">
                <PhoneFillIcon color="white" />
                <p>2 calls per month (45 min/call)</p>{" "}
              </div>
              <div className="contact">
                <Message3LineIcon color="white" />
                <p>Unlimited Q&A via chat</p>{" "}
              </div>
              <div className="contact">
                <TimeFillIcon color="white" />
                <p>Expect responses in 12 hours</p>{" "}
              </div>
              <div className="contact">
                <SuitcaseFillIcon color="white" />
                <p>Hands-on support</p>
              </div>
            </div>
            <div className="fund">
              <div className="contact check">
                <CheckboxCircleFillIcon color="green" />
                <p>Free consultation via chat</p>
              </div>
              <div className="contact">
                <HandCoinLineIcon color="white" />
                <p>Refund within 3 days</p>
              </div>
            </div>
            <div></div>
          </div>
        )}
        {!plan && (
          <div className="info_section">
            <div className="workday">
              <div className="workpain">
                <div className="upper">
                <p>Work Review</p>
                <div className="duration">
                  <TimeFillIcon size={14} />
                  <p>45 minutes</p>
                </div>
                </div>
                <div className="workamount">
                  <p className="price">$99</p>
                  <p className="per">per session</p>
                </div>
              </div>
              
              <div className="workpain">
                <div className="upper">
                <p>Portfolio Feedback</p>
                <div className="duration">
                  <TimeFillIcon size={14} />
                  <p>45 minutes</p>
                </div>
                </div>
                <div className="workamount">
                  <p className="price">$99</p>
                  <p className="per">per session</p>
                </div>
              </div>

              <div className="workpain">
                <div className="upper">
                <p>Resume Feedback</p>
                <div className="duration">
                  <TimeFillIcon size={14} />
                  <p>45 minutes</p>
                </div>
                </div>
                <div className="workamount">
                  <p className="price">$99</p>
                  <p className="per">per session</p>
                </div>
              </div>
              
         
            </div>
            {/* <div className='amount'>$100<span>/month</span></div>
        <div className='contact_details'>
<div className='contact'><PhoneFillIcon color='white'/><p>2 calls per month (45 min/call)</p> </div>
<div className='contact'><Message3LineIcon color='white'/><p>Unlimited Q&A via chat</p> </div>
<div className='contact'><TimeFillIcon color='white'/><p>Expect responses in 12 hours</p> </div>
<div className='contact'><SuitcaseFillIcon color='white'/><p>Hands-on support</p></div>
        </div>
        <div className='fund'>
        <div className='contact check'><CheckboxCircleFillIcon color='green'/><p>Free consultation via chat</p></div>
        <div className='contact'><HandCoinLineIcon color='white'/><p>Refund within 3 days</p></div>
        </div>
        <div> 
        </div> */}
          </div>
        )}
        <div className="button_Container">
          <div className="learnmore">
            Learn more <AddCircleLineIcon />
          </div>
          <div className="whatsapp">Order on Whatsapp</div>
        </div>
      </div>
    </section>
  );
}
