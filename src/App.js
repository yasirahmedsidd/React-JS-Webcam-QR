import React, { useState } from 'react'
import "./App.css"
import QrReader from 'react-qr-reader'

const App = () => {
  const [result, setResult] = useState("")
  const handleScan = (data) => {
    data && console.log("I ran")
    data && setResult(data)
  }
  const handleError = () => {

  }


  return (
    <div>
      <div style={{ width: 500, height: 500 }}>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
      </div>
      <p>{result}</p>
    </div>
  )
}

export default App
