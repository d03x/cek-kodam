import './App.css';

import { useState } from 'react';

import CardKhodam from './components/CardKhodam';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={``}>
        <div className="flex-col items-center justify-center fle">
        <CardKhodam />
        </div>
      </div>
    </>
  )
}

export default App
