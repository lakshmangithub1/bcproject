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
                <div className='main-row'>
                    <h1>Dashboard</h1>
                    <p>$</p>
                </div>
            </div>
        </div>
        
        
    )
}

export default LeftDashBoard