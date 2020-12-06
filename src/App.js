import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Table from './components/Table'
import RowDetails from './components/RowDetails'

const App = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [sorting, setSorting] = useState({ field: '', order: '' })
  const [row, setRow] = useState(null)

  const littleDataUrl = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
  const bigDataUrl = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`


  useEffect( () => {
    const fetchData = async() => {
      setLoading(true)
      try {
        await axios(littleDataUrl).then(resp => setData(resp.data))
      } catch(e) {
        console.log(e)
      }
      setLoading(false)
    }

    fetchData()

  }, [] )

const sort = field => {
  console.log(field)
}

const onSelect = selectedRow => {
  setRow(selectedRow)
}

  return (
    <div className="container">

      { loading ? <h1>Loading...</h1>
      : <Table data={data} sort={sort} onSelect={onSelect} />}

      { row ? <RowDetails row={row} /> : null}

    </div>
  );
}

export default App;
