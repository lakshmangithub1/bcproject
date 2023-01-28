import React from 'react';
import './App.css';
import Graphs from './Component/Graphs';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Component/NavBar';
import ProfileCard from './Component/ProfileCard';
import ActiveCard from './Component/ActiveCard';
import {PieChart, Pie, Tooltip, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar, LineChart, Line} from "recharts";


const App = () => <div > 
  <NavBar/>
  <div className='bg'>
    <ProfileCard />
    <ActiveCard />
    <ActiveCard />
    <ActiveCard />
    <ActiveCard />
    
  </div>
  <Graphs />
  
</div>

  

export default App;