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
    setIsFormVisible(!isFormVisible)
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
                        type="text"
                        id="id"
                        min="0"
                        max="1000"
                        value={id}
                        onChange={(e) => setId(e.target.value)} />
                      </td>
                    <td><input type="text" id="firstName" value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} /></td>
                    <td><input type="text" id="lastName" value={lastName}
                    onChange={(e) => setLastName(e.target.value)} /></td>
                    <td><input type="email" id="email" value={email}
                    onChange={(e) => setEmail(e.target.value)} /></td>
                    <td><input type="tel" id="phone" value={phone}
                    onChange={(e) => setPhone(e.target.value)} /></td>
                  </tr>
                </tbody>
              </table>
              <button
                className="btn btn-primary add-button"
                disabled={!isSubmitEnabled}>
                  Add
              </button>
            </form>
  )
}

export default Form