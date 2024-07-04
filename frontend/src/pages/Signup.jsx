import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username : userName,
        email,
        password,
      })
    })
    const data = await response.json()
    navigate('/login')
    console.log(data)
  }
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 p-4 mx-auto" style={{ maxWidth: "400px"}}>
      <h1 className="display-4">Signup</h1>
      <form className="w-100" onSubmit={handleSignup}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="userNameInput"
            placeholder="name@example.com"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label htmlFor="userNameInput">User Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="emailInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="passwordInput">Password</label>
        </div>
        <button className="btn btn-primary mt-4" type="submit">Signup</button>
      </form>
    </div>
  )
}



