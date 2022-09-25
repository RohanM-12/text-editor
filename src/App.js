// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

function App() {


  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>
  {
    setAlert({
      msg:message,
      type : type
    })

    setTimeout(() => {
      setAlert(null); 
    }, 2000);
     
  }



    const [mode,setMode] =useState('light');

    const toggleMode=()=>
    {
      
           
        if(mode==='light')
        {
           setMode('dark');
           document.body.style.backgroundColor='#5c5d5e';
           showAlert('Dark mode has been eabled','Success');
        }
        else
        {
           setMode('light');
           document.body.style.backgroundColor='white';
           showAlert('Light mode has been eabled','Success');
        }
       
    
    }
  

  return (
    <>
   <Router>
     <Navbar title="Text-Utils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
       
        <div className="container my-3">

        <Switch>
      
          <Route exact path="/about">
            <About />
          </Route>
          <Route  exact path="/">
            <TextForm mode={mode} showAlert={showAlert} heading="Enter the text to analyze below" />
          </Route>
        </Switch>
     
        </div>

      </Router>

    </>
  );
}

export default App;
