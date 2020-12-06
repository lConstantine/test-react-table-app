import React from 'react'

const Table = ({ data, sort, onSelect }) => {

  console.log('data', data)

  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => sort('id')} >Id</th>
          <th onClick={() => sort('firstName')}>First Name</th>
          <th onClick={() => sort('lastName')}>Last Name</th>
          <th onClick={() => sort('email')}>Email</th>
          <th onClick={() => sort('phone')}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {data.map((it, idx) => (
          <tr key={idx} onClick={() => onSelect(it)}>
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