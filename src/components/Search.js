import React, {useState} from 'react'

const Search = () => {

  return (
    <div className="input-group mb-3 mt-3">
      <input type="text" className="form-control"/>
      <div className="input-group-append">
        <button className="btn btn-outline-secondary">Search</button>
      </div>
    </div>
  )
}

export default Search