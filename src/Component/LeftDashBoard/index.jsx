import React from 'react'
import './index.css' 

const LeftDashBoard = () => {
    
    return(
        <div className='dashboard-card'>
            <button className='dash-butt' type='button' disabled>Dashboard</button>
            <div className='name-card'>
                <h3 className='name-head'>Widgets</h3>
            </div>
            <div className='name-card'>
                <h3 className='name-head'>UI Elements</h3>
            </div>
            <div className='name-card'>
                <h3 className='name-head'>Advanced UI</h3>
            </div>
            <div className='name-card'>
                <h3 className='name-head'>Email</h3>
            </div>
            <div className='name-card'>
                <h3 className='name-head'>Editors</h3>
            </div>
            <div className='name-card'>
                <h3 className='name-head'>Charts</h3>
            </div>
            <div className='name-card'>
                <h3 className='name-head'>Summary</h3>
            </div>
            <div className='name-card'>
                <h3 className='name-head'>Countries</h3>
            </div>
            <div className='name-card'>
                <h3 className='name-head'>Subject</h3>
            </div>
            <div className='name-card'>
                <h3 className='name-head'>Topic</h3>
            </div>
            <div className='name-card'>
                <h3 className='name-head'>Tables</h3>
            </div>
            <div className='name-card'>
                <h3 className='name-head'>Calender</h3>
            </div>
            <div className='name-card'>
                <h3 className='name-head'>Maps</h3>
            </div>
            
            <div className='name-card'>
                <h3 className='name-head'>User Pages</h3>
            </div>
            <div className='name-card'>
                <h3 className='name-head'>General Pages</h3>
            </div>
            <div className='name-card'>
                <h3 className='name-head'>Error Pages</h3>
            </div>
        </div>
    )
}

export default LeftDashBoard