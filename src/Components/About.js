import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Dalchand from '../assets/Dalchand.png';
import './About.css';
export default class About extends React.Component {
    constructor() {
        super();
        this.data=[
            {
                id:1, title:"Fast", body:"Fast load times and lag free interaction, my highest priority.",faicon:"fa fa-tachometer"
            },
            {
                id:2, title:"Responsive", body:"My layouts will work on any device, big or small.", faicon:"fa fa-mobile"
            },
            {
                id:3, title:"Intuitive", body:"Strong preference for easy to use, intuitive UX/UI", faicon:"fa fa-lightbulb-o"
            },{
                id:4, title:"Dynamic", body:"Websites don't have to be static, I love making pages come to life.", faicon:"fa fa-rocket"
            }
        ]
        this.skills=[
            {
                id:1, skillName:"HTML", percentage:"90%"
            },
            {
                id:2, skillName:"CSS3", percentage:"70%"
            },
            {
                id:3, skillName:"Javascript", percentage:"80%"
            },
            {
                id:4, skillName:"React", percentage:"80%"
            },
            {
                id:5, skillName:"Angular", percentage:"75%"
            },
            {
                id:6, skillName:"Node.js", percentage:"75%"
            },
            {
                id:7, skillName:"Java", percentage:"70%"
            },
            {
                id:8, skillName:"Python", percentage:"65%"
            },
            {
                id:9, skillName:"Typescript", percentage:"60%"
            },{
                id:10, skillName:"PHP", percentage:"60%"
            },
            {
                id:11, skillName:"SQL", percentage:"60%"
            }
        ]
    }
    render() {
        return (
            <div style={{ "paddingTop": "80px", "color": "#444649" }} id="about">
                <h1 className="text-center"><span style={{"borderBottom":"3px solid black"}}>ABOUT</span></h1>
                <br></br>
                <br></br>
                <Container>
                    <Row style={{"textAlign":"center"}}>
                    { this.data.map(item=>
                            <Col xs={6} md={3} key={item.id} style={{"padding":"20px"}} key={item.id}>
                                <div className="wrapper">
                                    <div className="hexagon" style={{"backgroundColor":"#04c2c9","height":"100px","width":"100px","borderRadius":"50%","margin":"0 auto"}}>
                                        <i className={item.faicon} style={{"color":"white","fontSize":"5rem","paddingTop":"5px"}}></i>
                                    </div>
                                </div>
                                <br></br>
                                <h3>{item.title}</h3>
                                <p>{item.body}</p>
                            </Col>
                    )}
                    </Row>
                </Container>
                <br></br>
                <br></br>
                <Container>
                    <Row style={{"textAlign":"center"}}>
                        <Col xs={12} md={5}>
                            <div className="wrapperabout" style={{"height":"100%","width":"100%"}}>
                                <img src={Dalchand} style={{"height":"303px","width":"350"}}></img>
                                <br></br><br></br>
                                <h3>Who's this guy?</h3>
                                <p>I'm a Front-End Developer for <a href="https://www.opentext.com/" className="anchor">OpenText</a> in Hyderabad.
                                    I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                                    <br></br>
                                    <a href="#contact" className="anchor">Let's make something special</a>
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} md={7}>
                            <div className="wrapperabout" style={{"height":"100%","width":"100%"}}>
                                {this.skills.map(item=>
                                <div key={item.id} className="bar" style={{"width":"90%","textAlign":"left","marginBottom":"15px","backgroundColor":"#eee"}}>
                                    <div className="barfill" style={{"display":"inline-block","width":item.percentage,"height":"28px","backgroundColor":"#00a1a7"}}>
                                        <div className="tag" style={{"display":"inline-block","textAlign":"center","width":"110px","height":"100%","backgroundColor":"#04c2c9","color":"white"}}>
                                            <b>{item.skillName}</b>
                                        </div>
                                    </div>
                                    <span style={{"textAlign":"right","paddingRight":"5px","float":"right"}}>{item.percentage}</span>
                                </div>
                                )}
                            </div>
                        </Col>
                    </Row>
                    <br></br><br></br><br></br>
                </Container>
            </div>
        )
    }
}