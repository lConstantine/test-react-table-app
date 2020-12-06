import React from "react";


const RowDetails = ({ row }) => {

  return (
    <div>
      <p>User selected: <b>{row.firstName} {row.lastName}</b></p>
      <p>Details:</p>
      <p><textarea defaultValue={row.description} /></p>
      <p>Address: <b>{row.address.streetAddress}</b></p>
      <p>City: <b>{row.address.city}</b></p>
      <p>State: <b>{row.address.state}</b></p>
      <p>Zip code: <b>{row.address.zip}</b></p>
    </div>
  );
};

export default RowDetails