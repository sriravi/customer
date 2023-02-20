import logo from './logo.svg';
import './App.css';
import './component/header/Header';
import Header from './component/header/Header';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get("http://127.0.0.1:5000/test");
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  function getCustomerData() {
    console.log(">>> data :"+ JSON.stringify(data));
    return <div>{data}</div>
  }
  return (
    <>
      <Header />
      <Button variant="text" onClick={ () => getCustomerData() }>Get Customer</Button>    
      <div>
      {data}
      </div>
    </>
  );
}

export default App;
