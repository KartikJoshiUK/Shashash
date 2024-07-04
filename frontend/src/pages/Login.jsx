import React, { useContext, useState } from 'react'
import { LoginContext } from '../App'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setIsLoggedIn } = useContext(LoginContext)
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      })
    })
    const data = await response.json()
    setIsLoggedIn({
      isLoggedIn: true,
      userData : {
        username : data.username,
        email : data.email
      }
    })
    localStorage.setItem('token', data.token)
    console.log(data)
    navigate('/')
  }
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 p-4 mx-auto" style={{ maxWidth: "400px"}}>
      <h1 className="display-4">Login</h1>
      <form className="w-100" onSubmit={handleLogin}>
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
        <button className="btn btn-primary mt-4" type="submit">Login</button>
      </form>
    </div>
  )
}


