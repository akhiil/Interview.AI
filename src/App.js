import React from 'react';
import Header from './Component/header';
import Section1 from './Component/Section1';
import Section2 from './Component/Section2';
import Footer from './Component/Footer'

const App = () => {

  const goToSection = (value) => {
    window.location.replace(`/#${value}`);
  }

  return (
    <div>
      <div>
        <Header referenceToPage={(value) => goToSection(value)} />
      </div>
      <div id="section1">
        <Section1 referenceToPage={(value) => goToSection(value)} />
      </div>
      <div id="section2">
        <Section2 />
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </div>
  )
}

export default App;
