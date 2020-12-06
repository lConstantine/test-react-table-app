import React, { useState, useMemo } from 'react'
import ReactPaginate from 'react-paginate'


const Table = ({ data, onSelectRow, search, currentPage, setCurrentPage }) => {

  const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = useState(config);

    const sortedItems = useMemo(() => {
      const sortableItems = [...items];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);

    const requestSort = key => {
      let direction = 'asc';
      if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
        direction = 'desc';
      }
      setSortConfig({ key, direction });
    }

    return { items: sortedItems, requestSort, sortConfig };
  }

  const { items, requestSort, sortConfig } = useSortableData(data);



  const getFilteredData = (items, search) => {

     if (!search) {
       return items
     }


    return items.filter(it => {
      return it.firstName.toLowerCase().includes(search.toLowerCase())
      || it.lastName.toLowerCase().includes(search.toLowerCase())
      || it.email.toLowerCase().includes(search.toLowerCase())
    })
  }



  const filteredData = getFilteredData(items, search)

  const itemsPerPage = 50

  const pageCount = Math.ceil(filteredData.length / itemsPerPage)

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = filteredData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber.selected+1)
  }




  return (
    <div>
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => requestSort('id')} >Id {sortConfig && sortConfig.key === 'id' ? <small>{sortConfig.direction}</small> : null}</th>
          <th onClick={() => requestSort('firstName')}>First Name {sortConfig && sortConfig.key === 'firstName' ? <small>{sortConfig.direction}</small> : null}</th>
          <th onClick={() => requestSort('lastName')}>Last Name {sortConfig && sortConfig.key === 'lastName' ? <small>{sortConfig.direction}</small> : null}</th>
          <th onClick={() => requestSort('email')}>Email {sortConfig && sortConfig.key === 'email' ? <small>{sortConfig.direction}</small> : null}</th>
          <th onClick={() => requestSort('phone')}>Phone {sortConfig && sortConfig.key === 'phone' ? <small>{sortConfig.direction}</small> : null}</th>
        </tr>
      </thead>
      <tbody>
        {currentItems.map((it, idx) => (
          <tr key={idx} onClick={() => onSelectRow(it)}>
            <td>{it.id}</td>
            <td>{it.firstName}</td>
            <td>{it.lastName}</td>
            <td>{it.email}</td>
            <td>{it.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>

    {data.length > 50
      ? <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
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
          forcePage={currentPage}
        />
      : null
    }
    </div>
  )
}

export default Table