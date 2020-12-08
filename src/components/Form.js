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
        if (id.trim() !== '' && firstName.trim() !== '' && lastName.trim() !== '' && email.trim() !== '' && phone.trim() !== '') {
          setIsSubmitEnabled(true)
        }
      }

      if (isSubmitEnabled) {
        if (id === '' || firstName === '' || lastName === '' || email === '' || phone === '') {
          if (id.trim() === '' || firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || phone.trim() === '') {
            setIsSubmitEnabled(false)
          }
        }
      }

  }, [id, firstName, lastName, email, phone])


  const onSubmit = () => {

    const newData = [{
      id: Number(id),
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
          : <form className="form" id="form" onSubmit={onSubmit}>
              <table className="form-table">
                <thead>
                  <tr>
                    <td>
                      <label htmlFor="id">ID</label>
                    </td>
                    <td>
                      <label htmlFor="firstName">First Name</label>
                    </td>
                    <td>
                      <label htmlFor="lastName">Last Name</label>
                    </td>
                    <td>
                      <label htmlFor="email">Email</label>
                    </td>
                    <td>
                      <label htmlFor="phone">Phone</label>
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
                <button
                  type="reset"
                  className="btn btn-danger add-button"
                  onClick={() => setIsFormVisible(false)}>
                    Back
                </button>
              </div>
            </form>
  )
}

export default Form