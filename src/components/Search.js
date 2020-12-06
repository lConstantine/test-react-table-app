import React, {useState} from 'react'

const Search = ({ onSearch }) => {

  const [value, setValue] = useState('')

  return (
    <div className="input-group mb-3 mt-3">
      <input type="text" className="form-control" value={value} onChange={(e) => setValue(e.target.value)}/>
      <div className="input-group-append">
        <button className="btn btn-outline-secondary search-button" onClick={() => onSearch(value)}>Search</button>
      </div>
    </div>
  )
}

export default Search