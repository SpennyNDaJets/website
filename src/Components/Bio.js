import React, { Component } from 'react';
import { Button } from './';

// CSS
import '../Assets/css/Bio.css';

class Bio extends Component {
  render() {
    return (
      <div className="bioContainer" id="bio">
        <div className="bioTitle">
          Hi There! I'm Spencer
        </div>
        <div className="bioTextContainer">
          <p className="bioText">
            I am a Computer and Electrical Engineering student at the University of Virginia, and
            I also have professional experience in Web Development. I enjoy using my software and 
            and hardware skills to build projects that people want to use. I am really interested
            in expanding my skills in backend development, machine learning techniques, and VR, so
            if you have a cool idea, please feel free to contact me!
            <br/> <br/>
            At UVa, I am a member of the Technology and Leadership Program (TLP). This program brings
            curious students together to facilate teamwork and learning by working on fun interdisplinary
            projects and interactive lectures. I have learned many useful technologies including being
            introduced to arduino, SQL, and encyption techniques.
            <br/> <br/>
            In my freetime, I like to play various sports with my friends, including soccer, volleyball,
            basketball, and squash. Since my Second Year, I have worked at Boylan Heights, the best sports 
            bar on the corner (shameless brag), as a bartender and manager. There is nothing like working
            in the resturant business which has helped me develop my soft skills as well as create lifelong
            friendships.
          </p>
        </div>
        <div className="projectButtonContainer">
          <Button
            styleName="blueButton"
            text="My Projects"
            reference="#bio"
          />
        </div>
      </div>
    );
  }
}

export default Bio;