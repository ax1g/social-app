import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'

function App() {
  const [status, setStatus] = useState("unhealthy");

  useEffect(() => {
    fetch("api/health")
      .then(response => response.json())
      .then(data => setStatus(data.status))
  }, [])

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
        </div>
        <h1>Birdie - a social app</h1>
      </section>

      <main>
        <h2>Health Check: {status}</h2>
      </main>
    </>
  )
}

export default App
