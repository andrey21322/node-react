import React from 'react'
import Navbar from './pages/navbar/navbar'

import './App.css'

function App() {
  let bgUrl = 'images/bg.jpg'
    let styles = {
      bg: {
        backgroundImage: 'url(' + bgUrl + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }
    }
  return (
    <div>
      <section style={styles.bg}>
        <Navbar />
      </section>
    </div>
  )
}

export default App
