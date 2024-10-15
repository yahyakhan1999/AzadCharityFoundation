import React from 'react';
import './AboutPage.css';

const DonatePage: React.FC = () => {
  return (
    <div className="donate">
      <h1>Donate to Azad Charity Foundation</h1>
      
      <section>
        <h2>Donation Process</h2>
        <p>
          Donations can be made via the following methods:
          <ul>
            <li>Western Union</li>
            <li>MoneyGram</li>
            <li>Ria Transfer</li>
            <li>WorldRemit</li>
          </ul>
        </p>
        <h3>Contact Information:</h3>
        <p>
          Name: Ssebuliba Fatah<br />
          Country: Uganda<br />
          Contact: +256763080892<br />
          Email: <a href="mailto:azadcharityfoundation256@gmail.com">azadcharityfoundation256@gmail.com</a>
        </p>
      </section>
    </div>
  );
};

export default DonatePage;
