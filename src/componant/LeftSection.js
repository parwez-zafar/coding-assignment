import React from 'react'
import './Section1.css'
import book from '../image/book.png'
import clock from '../image/Icon_Clock.png'
import live from '../image/live.png'
import scholarship from '../image/scholarship.png'
import add from '../image/ads.png'
const Section1 = () => {
    return (
        <div className='section-1'>
            <div className="container">
                <div className="text">
                    <h1>Access curated courses worth</h1>
                    <br />
                    <h1><span className="red">
                        ₹ 18,500
                    </span> at just
                        <span className='blue'>₹ 99</span>
                        per year!</h1>
                </div>

                <div className="bookSection text d-flex">
                    <img src={book} alt="book icon " /> <h2><span className='blue'>100+ </span>Job relevent courses</h2>
                </div>
                <div className="clockSection text d-flex">
                    <img src={clock} alt="clock icon " /> <h2><span className='blue'>20,000+ </span>Hours of content</h2>
                </div>
                <div className="liveSection text d-flex">
                    <img src={live} alt="live icon " /> <h2><span className='blue'>Exclusive </span>webinar access</h2>
                </div>
                <div className="scholarshipSection text d-flex">
                    <img src={scholarship} alt="scholarship icon " /> <h2>Scholarship worth <span className='blue'>₹ 94,500</span></h2>
                </div>
                <div className="addSection text d-flex">
                    <img src={add} alt="add icon " /> <h2><span className='blue'>Add Free</span> learning experience</h2>
                </div>

            </div>
        </div>
    )
}

export default Section1