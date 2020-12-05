import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Table from './components/Table'

const App = () => {

  const [data, setData] = useState(false)
  const [loading, setLoading] = useState(false)

  const littleDataUrl = `http://www.filltext.com/?rows=32&id={number|1000}
  &firstName={firstName}&lastName={lastName}&email={email}
  &phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
  const bigDataUrl = `http://www.filltext.com/?rows=1000&id={number|1000}
  &firstName={firstName}&delay=3&lastName={lastName}&email={email}
  &phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`


  useEffect( () => {
    const fetchData = async() => {
      setLoading(true)
      try {
        await axios(littleDataUrl).then(resp => console.log(resp.data))
      } catch(e) {
        console.log(e)
      }
      setLoading(false)
    }

    fetchData()

  }, [] )

  return (
    <div className="container">
      { loading ? <h1>Loading...</h1>
      : <Table />}
    </div>
  );
}

export default App;
