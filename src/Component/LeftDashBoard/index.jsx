import React, {useState} from 'react'
import './index.css' 

const LeftDashBoard = () => { 

    const [isClicked, setIsCLicked] = useState(false) 

    const onClickDollar = () => {
        setIsCLicked(!isClicked)
    }
    
    return( 
        <div>
            <div className='maincard'>
                <div className='mm-card'>
                    <h1 className='white-head'>Dashboard</h1>
                    <p className='white-logo' onClick={onClickDollar}>$</p> 
                </div>
                
                {isClicked && <div className='cc'>
                    <h3 className='mm-head'>Home</h3>
                    <h3 className='mm-head'>Started</h3>
                    <h3 className='mm-head'>Tables</h3>
                    <h3 className='mm-head'>Scope</h3>
                    <h3 className='mm-head'>Insights</h3>
                    <h3 className='mm-head'>About</h3>
                </div>}
                
                    
            </div>
            <div className='left-card'>
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
                
            </div>
        </div>
        
        
    )
}

export default LeftDashBoard