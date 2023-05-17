import React from 'react'
import "./MainSection.css"
import LeftSection from './LeftSection.js'
import RightSection from './RightSection.js'

const MainSection = () => {
    return (
        <div className='bg'>
            <div className="left">
                <LeftSection />
            </div>
            <div className="right">
                <RightSection />
            </div>
        </div>
    )
}

export default MainSection