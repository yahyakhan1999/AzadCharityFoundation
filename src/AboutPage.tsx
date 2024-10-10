import React from 'react';
import './AboutPage.css';
import pdfFile from './assets/constitution.pdf';

const AboutPage: React.FC = () => {
  return (
    <div className="about">
      <h1>About Azad Charity Foundation</h1>

      <section>
        <h2>Preamble</h2>
        <p>
          Azad Charity Foundation is a community-based organization that operates in Central Cell,
          Central Ward, Sironko Town Council, Budadiri, Sironko District in Eastern Uganda. We are
          dedicated to helping orphans, widows, poor, and displaced people affected by heavy
          rainfall during the rainy seasons. Our services include agriculture, emergency relief aid,
          food packages, water and sanitation aid, education services, healthcare, and orphan care.
        </p>
      </section>

      <section>
        <h2>Vision Statement</h2>
        <p>
          To reach every needy person in the community and surrounding areas through a pyramid
          approach and a tree approach.
        </p>
      </section>

      <section>
        <h2>Mission Statement</h2>
        <p>
          To reduce poverty levels in communities by promoting self-reliance and income-generating activities.
        </p>
      </section>

      <section>
        <h2>Objectives</h2>
        <ul>
          <li>To ensure a healthy child</li>
          <li>To promote religious doctrines to every child in the community</li>
          <li>To provide food to every needy family</li>
          <li>To provide school materials to needy children</li>
          <li>To provide clean water to every person in the community</li>
          <li>To improve agriculture for quality foodstuffs</li>
          <li>To construct an orphanage for orphans and homeless children</li>
          <li>To construct schools and boreholes</li>
          <li>To provide food aid to orphans, the poor, and needy children</li>
        </ul>
      </section>

      <section>
        <h2>Organizational Structure</h2>
        <p>
          The organizational structure includes the following roles:
          <ul>
            <li>Chairperson</li>
            <li>Vice Chairperson</li>
            <li>Secretary</li>
            <li>Treasurer</li>
            <li>Publicity Secretary</li>
            <li>Advisor</li>
            <li>Four Committee Members</li>
          </ul>
        </p>
      </section>

      <section>
        <h2>Our Constitution</h2>
        <p>
          You can view or download our constitution by clicking the link below:
        </p>
        <a href={pdfFile} target="_blank" rel="noopener noreferrer">
          View or Download Constitution
        </a>
        <p>Or view it directly below:</p>
        <iframe
          src={pdfFile}
          width="100%"
          height="600px"
          title="Constitution PDF"
        >
          This browser does not support PDFs. Please download the PDF to view it: <a href={pdfFile}>Download Constitution</a>.
        </iframe>
      </section>

      <section>
        <h2>Finances</h2>
        <p>
          The organization’s finances consist of:
          <ul>
            <li>Savings from members</li>
            <li>Donations from donors</li>
            <li>Donations from international organizations/foundations</li>
            <li>Grants from international agencies</li>
          </ul>
          The bank account will be managed by three signatories, with any two of the three able to make transactions. The account will be opened at Diamond Trust Bank, Mbale Branch.
        </p>
      </section>

      <section>
        <h2>Donation Process</h2>
        <p>
          Donations can be made via:
          <ul>
            <li>Western Union</li>
            <li>MoneyGram</li>
            <li>Ria Transfer</li>
            <li>WorldRemit</li>
          </ul>
          Contact Information:
          <p>
            Name: Ssebuliba Fatah<br />
            Country: Uganda<br />
            Contact: +256763080892<br />
            Email: <a href="mailto:azadcharityfoundation256@gmail.com">azadcharityfoundation256@gmail.com</a>
          </p>
        </p>
      </section>

      <section>
        <h2>Meetings</h2>
        <p>
          - Annual General Meetings (AGM) are held in the second week of January each year.<br />
          - Special meetings are called for emergency matters.<br />
          - Executive meetings are conducted every three months.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
