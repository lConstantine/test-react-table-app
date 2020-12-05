import React from 'react'

const Table = ({ data }) => {

  console.log('data', data)

  return (
    <table className="table">
      <thead>
        <tr>
          <th >Id</th>
          <th >First Name</th>
          <th >Last Name</th>
          <th >Email</th>
          <th >Phone</th>
        </tr>
      </thead>
      <tbody>
        {data.map((it, idx) => (
          <tr key={idx}>
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