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

    <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
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
          <Bar dataKey="users" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>



    </div>
    </>
  );
};

export default Graphs;