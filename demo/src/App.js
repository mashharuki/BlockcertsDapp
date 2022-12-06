import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { Certificate } from '@blockcerts/cert-verifier-js';
import blockcerts from "./assets/data/blockcertsv2.json";

/**
 * App component
 * @returns 
 */
function App() {

  // certificate
  let certificate;  
  
  /**
   * initAction
   */
  async function initAction() {
    certificate = new Certificate(blockcerts);
    await certificate.init();
    console.log("certificate:", certificate);
  };

  /**
   * verifyAction
   */
  async function verifyAction() {
    certificate = new Certificate(blockcerts);
    await certificate.init();
    console.log("certificate:", certificate);

    // verify
    const verificationResult = await certificate.verify(({code, label, status, errorMessage}) => {
      console.log('Code:', code, label, ' - Status:', status);
      if (errorMessage) {
        console.log(`The step ${code} fails with the error: ${errorMessage}`);
      }
    });
  
    if (verificationResult.status === 'failure') {
      console.log(`The certificate is not valid. Error: ${verificationResult.errorMessage}`);
    } else {
      console.log("verificationResult.status:", verificationResult.status);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={initAction}
        >
          init
        </button>
        <button
          onClick={verifyAction}
        >
          verify
        </button>
      </header>
    </div>
  );
}

export default App;
