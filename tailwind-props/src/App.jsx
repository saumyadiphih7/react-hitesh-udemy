// import { useState } from 'react'
import Card from './components/Card.jsx'
import './App.css'

function App() {
  
  let card="My Card Component named as Saumyadip Dutta"

  return (
    <> 
    <h1 className="text-3xl font-bold underline">
      Vite With Tailwind CSS

    </h1>
    <Card title={card}/>
    </>
  )
}

export default App
