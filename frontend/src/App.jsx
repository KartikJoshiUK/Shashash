import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Error404 from "./pages/Error404";
import Error401 from "./pages/Error401";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./container/Navbar";

export const LoginContext = React.createContext();
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState({isLoggedIn : false});
  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      fetch('http://localhost:5000/api/auth/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        setIsLoggedIn({
          isLoggedIn: true,
          userData : data
        })
      })
    }
  }, [])
  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/favorites"
          element={isLoggedIn.isLoggedIn ? <Favorites /> : <Error401 />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </LoginContext.Provider>
  );
}
