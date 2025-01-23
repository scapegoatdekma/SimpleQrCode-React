import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QrCode from './components/QrCode/QrCode'

function App() {
  const [count, setCount] = useState(0)
  const [qrValue, setQrValue] = useState();

  return (
    <>
    <QrCode size={512}/>
    </>
  )
}

export default App
