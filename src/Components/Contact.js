import React from 'react';
import './Contact.css';
export default class Projects extends React.Component {
    constructor() {
        super();
        this.state = {
            name:"",
            email:"",
            message:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit(event) {
        //alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <div style={{ "backgroundColor": "#252934", "color": "white", "textAlign": "center","paddingBottom":"50px" }} id="contact">
                <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="svgcolor-light">
                    <path d="M0 0 L50 100 L100 0 Z" fill="#f5f5f5" stroke="#f5f5f5"></path>
                </svg>
                <br></br><br></br><br></br><br></br>
                <h1><span style={{ "borderBottom": "3px solid white" }}>CONTACT</span></h1>
                <br></br><br></br>
                <h5 style={{ "color": "#04c2c9", "fontWeight": "400" }}>Have a question or want to work together?</h5>
                <br></br><br></br>
                <div className="form">
                    <form onSubmit={this.handleSubmit} style={{"width":"100%","margin":"0 auto","background":"#252934"}}>
                        <input className="input" type="text" value={this.state.name} onChange={this.handleChange} placeholder="Name" name="name"/>
                        <input className="input" type="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" name="email" />
                        <textarea className="input" value={this.state.message} onChange={this.handleChange} name="message" style={{"minHeight":"150px"}} placeholder="Message" />
                        <div style={{"textAlign":"right"}}><input className="submit" type="submit" value="SUBMIT"/></div>
                    </form>
                </div>
            </div>
        )
    }
}