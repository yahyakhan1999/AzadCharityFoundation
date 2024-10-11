import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import donateLogo from '/donate.gif';
import azadLogo from '/azadLogo.png';

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
          <img src={azadLogo} className="logo react" alt="Azad Logo" />
        </Link>
      </div>
      <h1>Azad Charity Foundation</h1>
      
      {/* Donation form embed */}
      <div style={{ position: 'relative', overflow: 'hidden', height: '1200px', width: '100%' }}>
      <div dangerouslySetInnerHTML={{ __html: `
        <iframe
          title="Donation form powered by Zeffy"
          style="position: absolute; border: 0; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height: 100%;"
          src="https://www.zeffy.com/embed/donation-form/6c862652-07a0-4d86-86a6-bd5a992acd93"
          allowPaymentRequest="true"
          allowTransparency="true"
        ></iframe>
      ` }} />
    </div>




      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> Site in Progress
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Donate and Azad Charity Foundation icons to learn more
      </p>

      <Routes>
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
