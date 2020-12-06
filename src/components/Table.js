import React, { useState, useMemo } from 'react'


const Table = ({ data, onSelectRow }) => {

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


  return (
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
        {items.map((it, idx) => (
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
  )
}

export default Table