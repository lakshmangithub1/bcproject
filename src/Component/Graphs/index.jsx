import React from 'react';
import './index.css'
import {PieChart, Pie, Tooltip, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar, LineChart, Line} from "recharts";


const Graphs = () => {

  const data = [
    {name:"Google", users:533524, revenue:5227124},
    {name:"Twitter", users:412534, revenue:2441133},
    {name:"instagram", users:912534, revenue:5857212},
    {name:"Telegram", users:255454, revenue:1555824},
    {name:"Whatsapp", users:2213334, revenue:3152154},
  ]

  return (
    <>
    
    <div className="App"> 
    

    <PieChart width={200} height={200} margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 10,
          }}>
        <Pie data={data} dataKey="users" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
        <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
    <Tooltip/>
    </PieChart> 
    </div>

    <div className='App'>
    <BarChart
          width={300}
          height={200}
          
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 10,
          }}
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="users" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart> 

    </div> 
    <div className='App'>
    <LineChart
          width={300}
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="users" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
        </LineChart> 
    </div>


      




    
    </>
  );
};

export default Graphs;