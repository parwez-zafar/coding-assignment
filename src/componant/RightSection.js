import React from 'react'
import './RightSection.css';
import check_1 from '../image/check-1.png'
import check_2 from '../image/check-2.png'
import check_3 from '../image/check-3.png'
import clock from '../image/red-clock.png'
import razorpay from '../image/razorpay.png'

const RightSection = () => {
    return (
        <>
            <div className="rightcontainer">
                <div className="sec-1">
                    <div className='number' >
                        <h2>1</h2>
                        <p>Sign Up</p>
                    </div>
                    <div className='number' >
                        <h2>2</h2>
                        <p>Subscribe</p>
                    </div>
                </div>
                <h2 className='plan'>Select your subcription plan</h2>
                <div className="sec-3">
                    <p>Offer expired</p>
                    <div className="innerSec-3">
                        <div className="innerSec-3-1">
                            <img src={check_1} alt="" />
                            <h2>12 Months Subscription</h2>
                        </div>
                        <div>
                            <h2>Total ₹99</h2>
                            <h2>₹8 /mo</h2>
                        </div>
                    </div>
                </div>


                <div className="sec-3, sec-4">
                    <p>Recommended</p>
                    <div className="innerSec-3 innerSec-4">
                        <div className="innerSec-3-1">
                            <img src={check_2} alt="" />
                            <h2>12 Months Subscription</h2>
                        </div>
                        <div>
                            <h2>Total ₹179</h2>
                            <h2>₹15 /mo</h2>
                        </div>
                    </div>
                </div>
                <div className="sec-3 sec-5">
                    <div className="innerSec-3 innerSec-5">
                        <div className="innerSec-3-1">
                            <img src={check_3} alt="" />
                            <h2>6 Months Subscription</h2>
                        </div>
                        <div>
                            <h2>Total ₹149</h2>
                            <h2>₹25 /mo</h2>
                        </div>
                    </div>
                </div>
                <div className="sec-3 sec-5">
                    <div className="innerSec-3 innerSec-5">
                        <div className="innerSec-3-1">
                            <img src={check_3} alt="" />
                            <h2>3 Months Subscription</h2>
                        </div>
                        <div>
                            <h2>Total ₹99</h2>
                            <h2>₹33 /mo</h2>
                        </div>
                    </div>
                </div>



                <div className="sec-6">
                    <div className="sec-6-1">
                        <h2>Subscription Fee</h2>
                        <h2>₹18,500</h2>
                    </div>
                    <div className="sec-6-2">
                        <div className="sec-6-2-1">
                            <h2>Limited time offer</h2>
                            <h2>- ₹18,401</h2>
                        </div>
                        <div className="sec-6-2-2">
                            <img src={clock} alt="" />
                            <p>Offer valid till 25th March 2023 </p>
                        </div>
                    </div>
                    <div className="sec-6-3">
                        <h2>Total (Incl. of 18% GST)</h2>
                        <h2>₹149</h2>
                    </div>
                </div>

                <div className="btn-div">
                    <button className='cancel'>CANCEL</button>
                    <button className='proceed'>PROCEED TO PAY</button>
                </div>
                <img className='razorpay' src={razorpay} alt="" />
            </div>




        </>
    )
}

export default RightSection