import React from 'react';
import Navigation from './Components/Navigation';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import WorkExperience from './Components/WorkExperience';
import Home from './Components/Home';
export default class App extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <div>
        <Home></Home>
        <Navigation></Navigation>
        <WorkExperience></WorkExperience>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    )
  } 
}
