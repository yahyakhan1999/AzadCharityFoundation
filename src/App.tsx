import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import donateLogo from '/donate.gif';
import './App.css';
import DonatePage from './DonatePage'; // Ensure this path is correct
import AboutPage from './AboutPage';   // Ensure this path is correct

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Link to="/donate">
          <img src={donateLogo} className="logo react" alt="Donate logo" />
        </Link>
        <Link to="/about">
          <img src="/AzadCharityFoundation/azadLogo.png" className="logo react" alt="Azad Logo" />
        </Link>
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

      <Routes>
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
