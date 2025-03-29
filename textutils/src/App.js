import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.title = 'TextUtils - Light Mode';
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        // aboutText="About us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        {/* <About />*/}
        <TextForm heading="Enter your Text to analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;
