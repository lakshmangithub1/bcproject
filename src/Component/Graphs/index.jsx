import React from 'react';
import './index.css'
import {PieChart, Pie, Tooltip, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar, LineChart, Line} from "recharts";


const Graphs = props => {

  const {dataSet} = props 
  const {end_year, intensity} = dataSet 
  const finalData = dataSet.filter((item => item.intensity == '48'))

  return (
    <>
    
    <div className="App"> 

    <PieChart width={200} height={200} margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 10,
          }}>
        <Pie data={dataSet} dataKey="users" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
        <Pie data={dataSet} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
    <Tooltip/>
    </PieChart>

    <BarChart
          width={300}
          height={200}
          
          data={finalData}
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

      <LineChart
          width={300}
          height={200}
          data={finalData}
          margin={{
            top: 20,
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
          <Line type="monotone" dataKey="users" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
        </LineChart> 




    </div>
    </>
  );
};

export default Graphs;