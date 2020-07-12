import React, { useState } from 'react'
import logo from './logo.svg'

import './css/custom-properties.css'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
      <header className={styles[`App-header`]}>
        <img
          alt="chris woz here"
          className={styles[`App-logo`]}
          src={logo}
        />
        <p>
          Edit 
          {' '}
          <code>src/App.jsx</code>
          {' '}
and save to reload.
        </p>
        <a
          className={styles[`App-link`]}
          href="https://reactjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className={styles.nested}>
            Learn React
          </span>
        </a>
      </header>
    </div>
  )
}

export default App
