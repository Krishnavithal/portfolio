import React from 'react';
import './Home.css';
export default class Home extends React.Component{
    constructor(){
        super();
        this.state={
            arrow:"fa fa-angle-right"
        }
    }
    hover=()=>{
        this.setState({
            arrow:"fa fa-angle-down"
        })
    }
    hoverLeave=()=>{
        this.setState({
            arrow:"fa fa-angle-right"
        })
    }
    render(){
        return (
            <div id="home" className="canvas">
                <div className="wrapper">
                    <h1> Hello, I'm <span style={{"color":"#e31b6d"}}>Dalchand Kumawat.</span></h1>
                    <h1>I'm a full-stack web developer. </h1>
                    <br></br><br></br>
                    <a href="#work-experience" className="viewwork" onMouseOver={this.hover} onMouseLeave={this.hoverLeave}>View my work <i className={this.state.arrow}></i></a>
                </div>
            </div>
        )
    }
}