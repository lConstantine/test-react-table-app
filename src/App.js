
import './App.css';
import React, { useState } from 'react';
import axios from 'axios'
import Table from './components/Table'
import RowDetails from './components/RowDetails'
import ModeSelector from './components/ModeSelector'
import ReactPaginate from 'react-paginate'

const App = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [modeSelected, setModeSelected] = useState(false)
  const [row, setRow] = useState(null)

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


  // pagination

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 50

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber.selected+1)
  }

  const onSelectRow = selectedRow => {
  setRow(selectedRow)
}

  return (

    !modeSelected
    ? <div className="container">
        <ModeSelector onSelectMode={onSelectMode}/>
    </div>

    : <div className="container">

      { loading ? <h1>Loading...</h1>
      : <Table data={currentItems} onSelectRow={onSelectRow} />}

      {data.length > 50
        ? <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={20}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={paginate}
            containerClassName={'pagination'}
            activeClassName={'active'}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
          />
        : null
      }

      { row ? <RowDetails row={row} /> : null}

    </div>
  );
}

export default App;
