import React, { useEffect, useState } from 'react'
import JokeCard from '../components/JokeCard';

export default function Favorites() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/favorites', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => setJokes(data))
  }, [])
  console.log(jokes);
  return (
    <div>
      <h1>Favorites</h1>
      <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">
        {jokes.map((joke, i) => (
          <JokeCard key={i} joke={joke} />
        ))}
      </div>
    </div>
  )
}
