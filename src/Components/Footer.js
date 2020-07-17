import React from 'react';
import './Footer.css';
export default class Footer extends React.Component {
    constructor() {
        super();
        this.data = [
            {
                id: 1, faicon: "fa fa-linkedin", href: "https://www.linkedin.com/in/dalchand-kumawat-b7568082/"
            },
            {
                id: 2, faicon: "fa fa-facebook", href: "www.facebook.com"
            },
            {
                id: 3, faicon: "fa fa-instagram", href: "https://www.instagram.com/kumawat_dalchand/"
            },
            {
                id: 4, faicon: "fa fa-github", href: "https://github.com/dalchandkumawat"
            }
        ]
    }
    render() {
        return (
            <div className="footer">
                <div style={{"margin":"0 auto","marginTop":"-80px","background":"#e31b6d","width":"50px","cursor":"pointer"}}>
                    <a href="#home"><i className="fa fa-angle-double-up" style={{"fontSize":"3rem"}}></i></a>
                </div>
                <div className="wrapperfooter">
                    {this.data.map(item =>
                        <a href={item.href} key={item.id}>
                            <div className="social">
                                <i className={item.faicon} style={{ "fontSize": "1.5rem" }}></i>
                            </div>
                        </a>
                    )}
                    <br></br><br></br>
                    <p style={{ "color": "#8f9aa7" }}>DALCHAND KUMAWAT <span style={{ "color": "#e31b6d" }}>&#169; 2020</span></p>
                </div>
            </div>
        )
    }
}