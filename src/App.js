import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';


import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


function App() {

  const [BtnDarkMode, setBtnDarkMode] = useState('enable dark mode');
  const [BtnModeColor, setBtnModeColor] = useState('primary');
  const [BtnDarkModeColor2, setBtnDarkModeColor2] = useState('primary');
  const [BtnBorderColor, setBtnBorderColor] = useState('light');
  const [color, setcolor] = useState('black');
  const [inputColor, setinputColor] = useState('white');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    // here setAlert is object 
    setAlert({
      // here name could be  same or different any.
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1700);

  }

  const RemoveBodyClass = () => {

    // these are function to remove background color jab ek bar mode change kiya gaya ho
    // if we will not do this color jo hai same rah jayega so it is necessary
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');

  }
  // this is a function to convert in desirable mode in which you want 
  let toggleMode = (cls) => {

    RemoveBodyClass();
    // this function is to add background color according to mode 
    document.body.classList.add('bg-' + cls);
 
    // setBtnDarkMode('disable dark mode');
    // document.body.style.backgroundColor = 'black';

    // the first one is converter button
    setBtnModeColor('primary');
    // this is dark mode enable button
    setBtnDarkModeColor2('light');

    //showAlert("Dark mode is enabled", "success");

    // this code is for change in title on crome tab 
    document.title = "Text-Converter-Dark Mode";



    
    setBtnDarkMode('enable dark mode');
    document.body.style.backgroundColor = 'black';

    // setinputColor('white');
    // showAlert("Dark mode is disabled", "success");
    document.title = "Text-Converter";
    setBtnModeColor(cls);
    setBtnDarkModeColor2('primary');

    let bgcolor = toggleMode = (cls);
    if (bgcolor == 'light') {
      setcolor('black');
      setBtnBorderColor('light');
      setBtnModeColor('primary');

    }
    else {
      setcolor('white');
      setBtnBorderColor('light');
      setBtnModeColor(cls);

    }
    setinputColor(bgcolor);


  }
  return (
    <>
      <Router>
        
        <Navbar title="TextConverter" aboutText="about"  toggleMode={toggleMode} BtnDarkMode={BtnDarkMode} BtnDarkModeColor2={BtnDarkModeColor2} />
        <Alert alert={alert} />
        <div className="container">

          <Switch>
            <Route exact path="/About">
              <About color={color} />
            </Route>

            <Route path="/">
              <TextForm heading="Text-Converter | Word Counter | Character Counter | Remove Extra Spaces " showAlert={showAlert} color={color} inputColor={inputColor} BtnModeColor={BtnModeColor} BtnBorderColor={BtnBorderColor} />

            </Route>
          </Switch>

        </div>
        <div className="container my-3">
        </div>       
      </Router>
    </>
  );
}

export default App;
