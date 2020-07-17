import React from 'react';
import './WorkExperience.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import WorkIcon from './WorkIcon';
import EduIcon from './EduIcon';
import 'react-vertical-timeline-component/style.min.css';
//import WorkIcon from '../assets/workicon.png';
export default class WorkExperience extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div style={{ "paddingTop": "80px", "paddingBottom": "80px", "backgroundColor": "rgb(245, 245, 245)" }} id="work-experience">
                <h1 className="text-center"><span style={{ "borderBottom": "3px solid black" }}>WORK EXPERIENCE</span></h1>
                <br></br>
                <br></br>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(227, 27, 109)', color: '#fff', 'fontSize':'0.5rem','fontWeight':'normal' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(227, 27, 109)' }}
                        date="June 2020-Present"
                        iconStyle={{ background: 'rgb(227, 27, 109)', color: '#fff' }} icon={<WorkIcon></WorkIcon>}>
                        <h3 className="vertical-timeline-element-title">Associate Software Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">OpenText Technologies</h4>
                        <p>
                            Front End Web Development using Angular.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(4, 194, 201)', color: '#fff', 'fontSize':'0.5rem' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(4, 194, 201)' }}
                        date="Sep 2019-May-2020"
                        iconStyle={{ background: 'rgb(4, 194, 201)', color: '#fff' }} icon={<WorkIcon></WorkIcon>}>
                        <h3 className="vertical-timeline-element-title">Associate Quality Assurance Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">OpenText Technologies</h4>
                        <p>
                            Test Automation using Selenium, CodedUI.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(227, 27, 109)', color: '#fff', 'fontSize':'0.5rem' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(227, 27, 109)' }}
                        date="June 2019 - Aug 2019"
                        iconStyle={{ background: 'rgb(227, 27, 109)', color: '#fff' }} icon={<WorkIcon></WorkIcon>}>
                        <h3 className="vertical-timeline-element-title">Engineering Intern</h3>
                        <h4 className="vertical-timeline-element-subtitle">OpenText Technologies</h4>
                        <p>
                            Test Automation using CodedUI.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(4, 194, 201)', color: '#fff', 'fontSize':'0.5rem' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(4, 194, 201)' }}
                        date="Jan 2019 - Mar 2019"
                        iconStyle={{ background: 'rgb(4, 194, 201)', color: '#fff' }} icon={<WorkIcon></WorkIcon>}>
                        <h3 className="vertical-timeline-element-title">Web Developer Intern</h3>
                        <h4 className="vertical-timeline-element-subtitle">Geeky Web Wizards IT Solutions</h4>
                        <p>
                            Test Automation using CodedUI.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: 'rgb(227, 27, 109)', color: '#fff', 'fontSize':'0.5rem' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(227, 27, 109)' }}
                        date="2015 - 2019"
                        iconStyle={{ background: 'rgb(227, 27, 109)', color: '#fff' }} icon={<EduIcon></EduIcon>}>
                        <h3 className="vertical-timeline-element-title">B. Tech(Computer Science and Engineering)</h3>
                        <h4 className="vertical-timeline-element-subtitle">Anurag Group of Institutions</h4>
                        <p>
                            CGPA: 9.5/10
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        )
    }
}