import './App.css';
import {useState} from 'react';
import Navbar from './Components/Navbar';
import {GiHamburgerMenu} from 'react-icons/gi';

function App() {
  const [showNav, serShowNav] = useState(false);
  return (
    <div className="App">
      <header>
        <GiHamburgerMenu onClick={() => serShowNav(!showNav)}/>
        {/* <h3>UnB/FGA</h3> */}
      </header>
      <Navbar show= {showNav} />
    </div>
  );
}

export default App;
