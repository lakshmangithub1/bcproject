import React,{useEffect, useState} from 'react';
import './App.css';
import Graphs from './Component/Graphs';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Component/NavBar';
import ProfileCard from './Component/ProfileCard';
import ActiveCard from './Component/ActiveCard'; 
import LeftDashBoard from './Component/LeftDashBoard';
import BookingCard from './Component/BookingCard'; 
import ParaCard from './Component/ParaCard';
import SoundBar from './Component/SoundBar'; 
import BookingCardT from './Component/BookingCardT';
import {PieChart, Pie, Tooltip, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar, LineChart, Line} from "recharts";





const App = () => { 

  const [data, setData] = useState([])
  
  useEffect(() => {
      fetch('https://retoolapi.dev/DZybHH/data_api2').then(
        response => response.json()
      ).then(json => setData(json))
  },[]) 

  

  
  
  return( 
    
    
    
    
    <div className='bg'>
      <LeftDashBoard/>
      <div className='second-bg'>
        <ProfileCard/>
        <ParaCard/>
        <div className='s-row'>
          <BookingCard/>
          <BookingCardT/>
        </div>
        <div className='s-row2'>
          <BookingCard/>
          <BookingCardT/>
        </div>
        <Graphs dataSet = {data}/>
        
      </div>

      
    </div>
  )
}

  

export default App;