import React, { useEffect, useState } from "react";
import "./css/JokeCard.css";
export default function JokeCard() {
  const [joke, setJoke] = useState(null);
  const fetchJoke = () => {
    const url = "https://icanhazdadjoke.com/";
    fetch(url, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setJoke(data);
      });
  };
  useEffect(() => {
    if (joke == null) {
      fetchJoke();
    }
  }, []);

  const saveJoke = (jokeUrl) => {
    const url = "http://localhost:5000/api/favorites";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        jokeUrl: jokeUrl,
      }),
    }).then(async (response) => {
      const data = await response.json();
      console.log(data);
    });
  };
  return (
    <div
      className="card joke-card d-flex my-4 p-4"
      style={{
        width: "500px",
        height: "200px",
        borderRadius: "10px",
        maxWidth: "100%",
      }}
    >
      {joke ? (
        <>
          <div
            style={{ flex: 1 }}
            className="justify-content-center align-items-center"
          >
            <img
              src={`https://icanhazdadjoke.com/j/${joke.id}.png`}
              className="card-img-top object-fit-contain"
              alt={joke.joke}
              style={{ objectFit: "contain", borderRadius: "10px" }}
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={() =>
              saveJoke(`https://icanhazdadjoke.com/j/${joke.id}.png`)
            }
          >
            Save
          </button>
        </>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100%", color: "#888" }}
        >
          Loading...
        </div>
      )}
    </div>
  );
}
