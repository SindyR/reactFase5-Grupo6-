import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h3> Bienvenidos </h3>
      <h3>Diseño de sitios Web</h3>
      <h1>TRABAJO FINAL-FASE 5 </h1>
      <div className="card">
        <h2>Integrandes</h2>
        <h3> Hugo Stiven Echeverry </h3>
        <h3> Sindy Lorena Rosada </h3>

        <h2> Enlace al proyecto </h2>
        <a href="inicio.html">click para ir al proyecto</a>
      </div>
    </>
  )
}

export default App
