
import './App.css';
import React, { useState } from 'react';
import axios from 'axios'
import Table from './components/Table'
import RowDetails from './components/RowDetails'
import ModeSelector from './components/ModeSelector'
import Search from './components/Search'
import Form from './components/Form'


const App = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [modeSelected, setModeSelected] = useState(false)
  const [row, setRow] = useState(null)
  const [search, setSearch] = useState('')

  console.log(data)

  const [currentPage, setCurrentPage] = useState(1)

  const fetchData = async(url) => {
    setLoading(true)
    try {
      await axios(url).then(resp => setData(resp.data))
    } catch(e) {
      console.log(e)
    }
    setLoading(false)
  }

  const onSelectMode = selectedMode => {
      fetchData(selectedMode)
      setModeSelected(true)
  }

  const onSelectRow = selectedRow => {
  setRow(selectedRow)
}

  const onSearch = value => {
    setSearch(value)
    setCurrentPage(1)
  }


  return (

    !modeSelected
    ? <div className="mode-selector-container">
        <ModeSelector onSelectMode={onSelectMode}/>
    </div>

    : <div className="container">

      { loading ? <h1 className="loader">Loading...</h1>
      : <>
          <div className="header">
            <Form data={data} setData={setData} />
            <Search onSearch={onSearch} />
          </div>
          <Table data={data} onSelectRow={onSelectRow} search={search} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
      }


      { row ? <RowDetails row={row} /> : null}

    </div>
  );
}

export default App;
