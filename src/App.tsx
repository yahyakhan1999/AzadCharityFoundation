import { useState } from 'react'
import donateLogo from '/donate.gif'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={donateLogo} className="logo react" alt="Donate logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="/azadLogo.png" className="logo react" alt="Azad Logo" />
        </a>
      </div>
      <h1>Azad Charity Foundation</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
