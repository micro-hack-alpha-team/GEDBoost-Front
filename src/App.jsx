import { useState } from 'react'
import Survey from './Utils/Survey'
import './App.css'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';




function App() {

  return (
    <>
      <Router>
        <div className='w-screen p-6'>
          <Survey />
        </div>
      </Router>
    </>
)}

export default App
