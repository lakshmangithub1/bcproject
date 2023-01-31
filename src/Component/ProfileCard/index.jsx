import React from 'react'
import './index.css'

const ProfileCard = () => {
    return(
        <div className="main-card">
            <h4 className='main-head'>Welcome to your Dashboard</h4>
            <hr className='line2'/> 
            <h1 className='id-head'>1232-4322-6565</h1>
            <p className='para'>Member ID</p>
            <hr className='line'/> 
            <div className='bottom-card'>
                <div className='name-card'>
                    <h5 className='name'>Akash Andrew</h5>
                   
                </div>
                <h4 className='membership'>View your Membership</h4>
            </div>
            

        </div>
    )
}

export default ProfileCard