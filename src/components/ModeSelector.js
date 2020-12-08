import React from 'react'

const ModeSelector = ({ onSelectMode }) => {

  const littleDataUrl = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
  const bigDataUrl = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`

  return (
    <div>
      <button className="btn btn-primary mode-button" onClick={() => onSelectMode(littleDataUrl)}>32 ITEMS</button>
      <button className="btn btn-warning mode-button" onClick={() => onSelectMode(bigDataUrl)}>1000 ITEMS</button>
    </div>
  )
}

export default ModeSelector