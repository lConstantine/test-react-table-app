import React from "react";

const RowDetails = ({ row }) => {

  console.log(row)

  return (
    <div>
      <p>Выбран пользователь: <b>{row.firstName} {row.lastName}</b></p>
      <p>Описание:</p>
      <p><textarea defaultValue={row.description} /></p>
      <p>Адрес проживания: <b>{row.address.streetAddress}</b></p>
      <p>Город: <b>{row.address.city}</b></p>
      <p>Провинция/штат: <b>{row.address.state}</b></p>
      <p>Индекс: <b>{row.address.zip}</b></p>
    </div>
  );
};

export default RowDetails