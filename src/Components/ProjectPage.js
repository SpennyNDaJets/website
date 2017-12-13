import React, { Component } from 'react';
import { Project } from './';

import AlarmSystem from '../Assets/Images/alarmSystem.jpg';
import CavalierFrogger from '../Assets/Images/cavalierFrogger.jpg';
import FundRace from '../Assets/Images/fundRace.jpg';
import ECGMachine from '../Assets/Images/ECG.jpg';
import Marco from '../Assets/Images/marco.jpg';
import MusicAnaylzer from '../Assets/Images/musicFrequencyAnalyzer.jpg';

import '../Assets/css/ProjectPage.css';

class ProjectPage extends Component {

  render() {
    let projects = [
      {title:"FundRace", description:"Full Stack development with two other engineers. FundRace is an online collegiate solution for raising funds for a variety of school programs: from scientific research to clubs to charity events. Currently being built using ReactJS and Graph.cool.", image: FundRace, styleName:"blue"},
      {title:"Marco the Follower", description:"Design, Circuit Builder, and Software Engineer with a team consisting of one mechanical and one systems engineer. Marco is an Event Driven robot that follows the lead robot while staying on the black road.  Completed using an Arduino microcontroller!", image: Marco, styleName:"orange"},
      {title:"Cavalier Frogger", description:"Software Developer. Cavalier Frogger is a spin off of the classic 1981 arcade game, Frogger. It adds a UVa-Virginia Tech rivalry twist, while providing the UVa player with a few advantages. Completed using Python and the Pygame library!", image: CavalierFrogger, styleName:"blue"},
      {title:"Alarm System", description:"Design and Software Engineer team consisting of one mechanical and one electrical engineer. A prototype alarm system using a lock controlled by a solonoid, a piezo alarm, and keypad unlock system. Completed using an Arduino microcontroller!", image: AlarmSystem, styleName:"orange"},
      {title:"ECG Machine", description:"Electrical Design with a team of four engineers. Consistantly and accurately detects heartbeats. Designed using NI Multisim and NI Ultiboard, printed, and soldered. Completed!", image: ECGMachine, styleName:"blue"},
      {title:"Music Freq Anaylzer", description:"Electrical Design with a team of two engineers. Flashes one of two LEDs (tremble or bass) depending of frequency of note. Intensity strengthens as amplitude of note increases. using NI Multisim and NI Ultiboard. Completed! I have a cool video of it analyzing ACDC's Thunderstruck!", image: MusicAnaylzer, styleName:"orange"}
    ];
    return (
      <div className="projectPageContainer">
        <div className="projectPageTitle">
            Here are some of my Projects!
            <hr className="breakLine"/>
        </div>
        <ul className="projectList">
          {projects.map( project => {
            return (
              <li className="project">
                <Project
                  title={project.title}
                  image={project.image}
                  description={project.description}
                  styleName={project.styleName}
                />
              </li>
            );
          })}
        </ul>
        <div className="moreProjectsTitle">
          Check out my<a href="https://github.com/SpennyNDaJets" className="inTextLink"> GitHub </a>
          for more cool projects!
        </div>
      </div>
    );
  }
}

export default ProjectPage;