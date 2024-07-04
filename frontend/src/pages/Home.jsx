import React from 'react'
import JokeCard from '../components/JokeCard'
export default function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column p-3 bg-light">
      <h1>DAD JOKES</h1>
      <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">
        {Array.from({ length: 10 }).map((_, i) => (
          <JokeCard key={i} />
        ))}
      </div>
    </div>
  )
}
