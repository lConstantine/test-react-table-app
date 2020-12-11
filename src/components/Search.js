import React, {useState, useEffect} from 'react'

export const Search = ({ onSearch }) => {

  const [value, setValue] = useState('')

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        onSearch(value)
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  });

  return (
    <div className="input-group mb-3 mt-3">
      <input type="text" className="form-control" value={value} onChange={(event) => setValue(event.target.value)}/>
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" id="search-button" onClick={() => onSearch(value)}>Search</button>
      </div>
    </div>
  )
}
