import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './section1/header/Navbar/Navbar';
import Header from './section1/header';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import Section5 from './section5';
import Section6 from './section6';
import Section7 from './section7';
import Section8 from './section8';
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Navbar />
        <Header />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </Router>

    </div>
  );
}

export default App;