import React from 'react';
import './App.css';
import line from './line-1@1x.svg';
import sectionHeading from './components/sectionHeading';
import sectionItem from './components/sectionItem';
import cvTitle from './components/cvTitle';


function App() {
  return (
    <div className = "app">
      <cvTitle />
      <sectionHeading name = {'Education'} />
      <img src = {line} alt = "line"/>
      <sectionItem name = {'New York University'} time = {'09.2020  -  06.2024'}
      description = {'Undergrad Computer Science and Data Science'} />
    </div>
  );
}

export default App;
