import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Character from "./components/Character";

   
    
    const App = () => {
      // Try to think through what state you'll need for this app before starting. Then build out
      // the state properties here.
      console.log(axios.get(`https://swapi.py4e.com/api/people/`));
      const [result, setResult] = useState([
      ]);
    
      useEffect(() => {
      const getResult = () => {
      axios
      .get(`https://swapi.py4e.com/api/people/`)
      .then((res) => {
      console.log("Data on system",res.data);
      setResult(res.data.results);
      })
      .catch((err) => {
      console.log("Error",err);
      debugger;
      });
        };
      getResult();
      }, []);
    
      return (
        <div className="App">
        <h1 className="Header">STAR WARS CHARACTERS!</h1>
        {result.map((results) => {
        return (
        <Character
        key={results.name}
        name={results.name}
        gender={results.gender}
        birthYear={results.birth_year}
        height={results.height}
        mass={results.mass}
        eye_color={results.eye_color}
        ></Character>
        
            );
          })}
        </div>
      );
    };
    
export default App;
