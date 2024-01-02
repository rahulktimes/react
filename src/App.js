//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar.js';
import Texts from './components/Texts.js';
function App() {
  let modechk="";
  let custStyle={
  color: 'green', 
  backgroundColor: '#8a918c'
  }
  const [mystyle, setMystyle] = useState({color: 'black',
  backgroundColor: '#8a918c'});
  const handleOnChange = ()=>{
  if(mystyle.color === 'black'){
    document.title="drak mode on";
    let modechk="";
    setMystyle({
    color: 'white',
    backgroundColor: '#8a918c'
    });
    let custStyle={
      color: 'green',
      backgroundColor: '#8a918c'
      }
  }
  else{
    document.title="drak mode off";
    let modechk="";
    setMystyle({
      color: '#ddd !important',
      backgroundColor: '#8a918c'
        });
        let custStyle={
          color: 'green',
          backgroundColor: 'white'
          }
  }

};
  return (

<>

<div className="container" style={mystyle}>
<Navbar homeText="Home" modechk={modechk} setStyle={mystyle} changeeve={handleOnChange} />
<Texts headingText="This is String/Word Manupulation" resulthtmlcolor={custStyle} />
</div>

</>
  );
}

export default App;
