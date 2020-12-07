import React, {useEffect, useState} from 'react'


const Form = ({ data, setData }) => {

  const [isFormVisible, setIsFormVisible] = useState(false)
  const [id, setId] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false)

  useEffect( () => {
      if (id !== '' && firstName !== '' && lastName !== '' && email !== '' && phone !== '') {
        if (id.trim !== '' && firstName.trim !== '' && lastName.trim !== '' && email.trim !== '' && phone.trim !== '') {
          setIsSubmitEnabled(true)
        } else {
          setIsSubmitEnabled(false)
        }
      }
  }, [id, firstName, lastName, email, phone])


  const onSubmit = () => {

    const newData = [{
      id,
      firstName,
      lastName,
      email,
      phone,
      address: {
        streetAddress: '',
        city: '',
        state: '',
        zip: ''
      },
      description: '',
    }, ...data]

    setData(newData)
    setIsFormVisible(false)
  }


  return (
          !isFormVisible
          ? <button className="button-top btn btn-primary btn-sm" onClick={() => setIsFormVisible(!isFormVisible)}>Add Info</button>
          : <form className="form" onSubmit={onSubmit}>
              <table className="form-table">
                <thead>
                  <tr>
                    <td>
                      <label htmlFor="id">id</label>
                    </td>
                    <td>
                      <label htmlFor="firstName">firstName</label>
                    </td>
                    <td>
                      <label htmlFor="lastName">lastName</label>
                    </td>
                    <td>
                      <label htmlFor="email">email</label>
                    </td>
                    <td>
                      <label htmlFor="phone">phone</label>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="number"
                        name="id"
                        min="0"
                        max="1000"
                        value={id}
                        pattern="\d{1,3}|^1000$"
                        required
                        placeholder="0 - 1000"
                        onChange={(e) => setId(e.target.value)} />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        required
                        placeholder="Ivan"
                        onChange={(e) => setFirstName(e.target.value)} />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        required
                        placeholder="Ivanov"
                        onChange={(e) => setLastName(e.target.value)} />
                    </td>
                    <td>
                      <input
                        type="email"
                        name="email"
                        value={email}

                        required
                        placeholder="mail@mail.ru"
                        onChange={(e) => setEmail(e.target.value)} />
                    </td>
                    <td>
                      <input
                        type="tel"
                        name="phone"
                        value={phone}
                        pattern="^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$"
                        required
                        placeholder="7(987)654-3211"
                        onChange={(e) => setPhone(e.target.value)} />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="footer">
                <button
                  className="btn btn-primary add-button"
                  disabled={!isSubmitEnabled}>
                    Add
                </button>
                <a onClick={() => setIsFormVisible(false)}
                  href="#"
                  className="btn btn-danger add-button">
                    Back
                </a>
              </div>
            </form>
  )
}

export default Form