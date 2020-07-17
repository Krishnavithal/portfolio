import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Shortener from '../assets/shortener.png';
import Billing from '../assets/billing.jpg';
import ScoreBoard from '../assets/scoreboard.jpg';
import './Projects.css';
export default class Projects extends React.Component {
    constructor() {
        super();
        this.data=[
            {
                id:1,name:"SHORTY URL",list:["React | Redux","CSS","Express | Node.js","MongoDB"],description:"A fast and simple URL Shortener",sourceCode:"#",cardTitle:"linear-gradient(to right bottom, #838383, #2e2e2e)", cardTitleName:"linear-gradient(to right bottom, rgba(131, 131, 131, 0.9), rgba(46, 46, 46, 0.9))",src:Shortener
            },
            {
                id:2,name:"M-BILLING",list:["Android",  "Java","Firebase"],description:"A Supermarket Billing System for Android",sourceCode:"#",cardTitle:"linear-gradient(to right bottom, #eca026, rgba(185, 19, 19, 0.911))",cardTitleName:"linear-gradient(to right bottom, rgba(236, 160, 38, 0.9), rgba(185, 19, 19, 0.9))",src:Billing
            },
            {
                id:3,name:"SCORE BOARD",list:["HTML5","CSS3","Javascript"],description:"A web based Score counter for Kabaddi",sourceCode:"#",cardTitle:"linear-gradient(to right bottom, #44b2e6, #05044d)",cardTitleName:"linear-gradient(to right bottom, rgba(68, 178, 230, 0.9), rgba(5, 4, 77, 0.9))",src:ScoreBoard
            }
        ]
    }
    render() {
        return (
            <div style={{ "paddingTop": "80px","paddingBottom":"120px", "color": "#444649", "backgroundColor": "#f5f5f5" }} id="portfolio">
                <h1 className="text-center"><span style={{ "borderBottom": "3px solid black" }}>PROJECTS</span></h1>
                <br></br>
                <br></br>
                <Container>
                    <Row>
                        {this.data.map(item=>                            
                            <Col md={4} xs={12} key={item.id}>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <div className="card-title" style={{"backgroundImage":item.cardTitle}}>
                                                <img src={item.src} height="70px" width="70px" style={{"marginRight":"1rem"}}></img>
                                                <div style={{"paddingTop":"2rem","display":"inline-block"}}> 
                                                    <span className="card-title-name" style={{"backgroundImage":item.cardTitleName}}>{item.name}</span>
                                                </div>
                                            </div>
                                            <div className="uldiv">
                                                <ul>
                                                    {item.list.map((items,i)=>
                                                        <li key={i}>{items}</li>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flip-card-back" style={{"backgroundImage":item.cardTitle}}>
                                            <div style={{"marginTop":"6rem","fontSize":"1.1rem"}}>
                                                <p style={{"marginBottom":"2rem"}}>{item.description}</p>
                                                <a className="button" href={item.sourceCode}>SOURCE CODE</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        )}
                    </Row>
                </Container>
            </div>
        )
    }
}