import React from 'react'
import './index.css'

const ParaCard = () => {
    return(
        <div className='para-bg'>
            <h2 className='para-head'>Order Details</h2>
            <p className='pa-para'>The total number of sessions within the data range. It is the period time a user is actively engaged with your website.page or app. etc</p>
            <div className='card-bg'>
                <div className='small-bg'>
                    <p className='sm-p'>Order value</p>
                    <h1 className='sm-h'>12.3K</h1>
                </div>
                <div className='small-bg'>
                    <p className='sm-p'>Order value</p>
                    <h1 className='sm-h'>12.3K</h1>
                </div>
                <div className='small-bg'>
                    <p className='sm-p'>Order value</p>
                    <h1 className='sm-h'>12.3K</h1>
                </div>
            </div>
            <div className='small-bg'>
                <p className='sm-p'>Downloads</p>
                <h1 className='sm-h'>12.3K</h1>
            </div>
        </div>
    )
}


export default ParaCard