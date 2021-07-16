// Write your Character component here
import React, { useState } from "react";
import styled from "styled-components";

const MainCharacter = styled.div`
  
  position: relative;
  height: ${(props) => (props.expanded ? `22rem` : `5rem`)};
  overflow: hidden;
  transition: all 0.6s ease;
  background-color: black;
  color:white;
  border-bottom: 2px solid #bbb;
  opacity: 0.9;
  h2 {
    font-size: 2.5rem;
    line-height: 5rem;
    margin: 0;
    padding-left: 2rem;
    text-align: left;
  }
  span.arrow-down {
    font-size: 2rem;
    position: absolute;
    top: ${(props) => (props.expanded ? "1.9rem" : "0.7rem")};
    right: 2%;
  }
  p {
    font-size: 1.5rem;
    line-height: 2rem;
    padding-left: 2.2rem;
    text-align: left;
  }
  cursor: pointer;
  margin: 0 auto;
  width: 70%;
  max-width: 65rem;
`;

export default function Character({name, gender, birthYear, height , eye_color}) {
  const [expanded, setExpanded] = useState(false);
 
  return (
    <MainCharacter expanded={expanded} onClick={() => setExpanded(!expanded)}>
    <span className="arrow-down">
    {expanded  ? `${String.fromCharCode(8963) }`
    : `${String.fromCharCode(8964)}`}
         
      </span>
      <p>Name: {name}</p>
      <p>Birth-Year: {birthYear}</p>
      <p>Gender: {gender}</p>
      <p>Height: {height}</p>
      <p>Eye-Color: {eye_color}</p>
    </MainCharacter>
  );
}