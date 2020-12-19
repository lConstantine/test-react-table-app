
// import '../App.css';
import React, { useState } from 'react';
// import axios from 'axios'
import { Table } from '../Table/Table'
import { RowDetails } from '../RowDetails/RowDetails'
import { ModeSelector } from '../ModeSelector/ModeSelector'
import { Search } from '../Search/Search'
import { Form } from '../Form/Form'
import { littleDataMock } from '../../serverMock/littleDataMock.js';
import { bigDataMock } from '../../serverMock/bigDataMock.js';


export const Main = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [modeSelected, setModeSelected] = useState(false)
  const [row, setRow] = useState(null)
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)


   /* so I decided to mock the server request here due to the issues with
      https - http conflict on github pages */

  const fetchData = async(url) => {
    setLoading(true)
    try {
      await serverMock(url).then(response => setData(response.data))
    } catch(e) {
      console.log(e)
    }
    setLoading(false)
  }

  const serverMock = (url) => {
    if (url.includes('rows=32')) {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve({
          data: littleDataMock
        }), 300)
      })
    }

    if (url.includes('rows=1000')) {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve({
          data: bigDataMock
        }), 800)
      })
    }
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
          <Table
            data={data}
            onSelectRow={onSelectRow}
            search={search}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage} />
        </>
      }


      { row ? <RowDetails row={row} /> : null}

    </div>
  );
}
