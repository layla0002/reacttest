import './index.css';
import { useState } from 'react';
import {TextField} from '@material-ui/core'

import React from 'react';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
 

//functional component (that return smth)
// pretty simple cuz it takes input which is the props and give an output which is in return 
//input(is props) and output"return" our ( JSX)
function App() {
  const [ name, setName] = useState(""); //name>variable, setname>setfunction, usestate>default value given at the start
  const [age, setAge] = useState("");
  
  return (

    <div
      style={{
        marginLeft: "40%",
        
      }}
    >
      <h2>Kindly fill the form!</h2>
      <TextField
        value={name}
        label="Enter your name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div
    >
      <TextField
        value={age}
        label="Enter your age"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      
    </div>
    <div style={{
      margin: 'auto',
      display: 'block',
      width: 'fit-content'
    }}>
      <h3>What is your gender?</h3>
      <FormControl component="fieldset">
      <FormLabel component="legend">Select Your Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1">
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
      </RadioGroup>
    </FormControl>
    </div>
    
    </div>
    
    
  );
};


export default App;



// class component 
// has a render function that has the ability to return in it the JSX
//only class based components could have STATE in a component
{/* import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
} */}