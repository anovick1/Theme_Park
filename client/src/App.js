import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'
import Home from './components/Home'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}
