//import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About'
import Alert from './components/Alert'
// import{
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type :type
    })
    setTimeout(() =>{
      setAlert(null)
    },1500)
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
    }
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    {/* <Router></Router> */}
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm heading="Enter your Text Below to Analyze" showAlert={showAlert} mode={mode}/>
      {/* <Routes>
        <Route exact path="/" element={<TextForm heading="Enter your Text Below to Analyze" showAlert={showAlert} mode={mode}/>
        }>
        </Route>
        <Route exact path="/about" element={<About/>}>
        </Route>
      </Routes> */}
    </div>
    </> 
  );
}

export default App;
