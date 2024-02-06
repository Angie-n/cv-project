import React from "react";
import "../styles/Preview.css";
import * as infoObjects from "../helpers/infoObjects";

const Header = props => {
  const {name, title, picture} = props;
  let nameDisplay, titleDisplay;

  if(name === "") nameDisplay = "Jane Doe";
  else nameDisplay = name;
  if(title === "") titleDisplay = "Professional Title";
  else titleDisplay = title;

  return (
    <div id="preview-heading">
      <div><figure className="profile-picture-figure"><img src={picture.src} alt="" style={{marginLeft: picture.marginLeft + "%", marginRight: picture.marginRight + "%", marginTop: picture.marginTop + "%", marginBottom: picture.marginBottom + "%", transform: "scale(" + picture.scale + ")"}}/></figure></div>
      <div>
        <h1>{nameDisplay}</h1>
        <p>{titleDisplay}</p>
      </div>
    </div>
  );
};

const Sidebar = props => {
  const {contacts, skills} = props;
  let contactsDisplay = [...contacts];
  let skillsDisplay = [...skills];

  let isAllEmpty = true;
  for(let i = 0; i < contactsDisplay.length; i++) {
    if(contactsDisplay[i].info !== "") isAllEmpty = false;
  }
  if(isAllEmpty) {
      contactsDisplay[0] = infoObjects.Contact("phone", "(123) 456-7890");
      contactsDisplay[1] = infoObjects.Contact("email", "jane.the.professional@gmail.com");
      contactsDisplay[2] = infoObjects.Contact("linkedIn", "www.linkedin.com/pub/jane-doe/8dh12ja.");
      contactsDisplay[3] = infoObjects.Contact("github", "https://github.com/jane-doe");
  }
  if(skills.length === 0) skillsDisplay = ["HTML", "CSS", "Javascript", "Node.js", "React.js"];

  return (
    <div id="preview-sidebar">
      <div id="preview-contacts">
        <h2>Contacts</h2>
        <hr />
        <ul>
          {contactsDisplay.filter((c) => c.info !== '').map((c,i) => {return <li key={"contact-" + i}><div>{c.icon}<p>{c.info}</p></div></li>})}
        </ul>
      </div>
      <div id="preview-skills">
        <h2>Skills</h2>
        <hr />
        <ul>
          {skillsDisplay.map((s,i) => {return <li key={"skill-" + i}>{s}</li>})}
        </ul>
      </div>
    </div>
  );
};

const Main = props => {
  const {profile, education, experience, project} = props;
  let profileDisplay = profile;
  let educationDisplay = [...education];
  let experienceDisplay = [...experience];
  let projectDisplay = [...project];

  if(profile === "") profileDisplay = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus porta enim, non accumsan massa blandit id. Proin consequat porttitor urna ut fermentum.";
  if(education.length === 1 && education[0].name === "" && education[0].startDate === "" && education[0].endDate === "" && education[0].location === "") {
    educationDisplay[0] = infoObjects.Education("Computer Science B.S.", "2010", "2014", "University of Cool Tech", "4.0");
  }
  if(experience.length === 1 && experience[0].title === "" && experience[0].startDate === "" && experience[0].endDate === "" && experience[0].company === "" && experience[0].location === "" && experience[0].description === "") {
    experienceDisplay[0] = infoObjects.Experience("Web Developer", "2014", "Present", "Legit Corp", "123 First Street, CA", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
  }
  if(project.length === 1 && project[0].title === "" && project[0].description === "") {
    projectDisplay[0] = infoObjects.Project("Social Media App", "Suspendisse potenti. Vivamus pulvinar non ipsum quis tristique. Nunc accumsan blandit dui id scelerisque. Morbi id ligula tincidunt, posuere augue non, fermentum lectus. Aliquam erat volutpat. Ut mattis lobortis feugiat. Nunc lacinia nibh id finibus convallis.");
  }

  const getPreviewDate = e => {
    if(e.startDate && e.endDate) return e.startDate +  '-' + e.endDate;
    else if(e.startDate) return e.startDate;
    else return e.endDate;
  }

  function EducationDisplay() {
    const getGPA = (e) => {
      if(e.gpa) return 'GPA: ' + e.gpa;
      return '';
    }

    if(educationDisplay.length > 0) {
      return (
        <div id="preview-education">
          <h2>Education</h2>
          <hr />
          <ul className='education-item'>
            {educationDisplay.map((e,i) => {return <li key={"education-" + i}>
              <h3>{e.name}</h3>
              <p className="preview-date">{getPreviewDate(e)}</p>
              <p>{e.location}</p>
              <p>{getGPA(e)}</p>
            </li>})}
          </ul>
        </div>
      )
    }
    else return null;
  }

  function ExperienceDisplay() {
    if(experienceDisplay.length > 0) {
      return (
        <div id="preview-experience">
          <h2>Work Experience</h2>
          <hr />
          <ul>
            {experienceDisplay.map((e,i) => {return <li key={"experience-" + i}>
              <h3>{e.title}</h3>
              <p className="preview-date">{getPreviewDate(e)}</p>
              <p>{e.company + ": " + e.location}</p>
              <p>{e.description}</p>
            </li>})}
          </ul>
        </div>
      )
    }
    else return null;
  }

  function ProjectDisplay() {
    if(projectDisplay.length > 0) {
      return (
        <div id="preview-project">
          <h2>Projects</h2>
          <hr />
          <ul>
            {projectDisplay.map((e,i) => {return <li key={"project-" + i}>
              <h3>{e.title}</h3>
              <p>{e.description}</p>
            </li>})}
          </ul>
        </div>
      )
    }
    else return null;
  }

  return (
    <div id="preview-main">
      <div id="preview-profile">
        <h2>Profile</h2>
        <hr />
        <p>{profileDisplay}</p>
      </div>
      <EducationDisplay />
      <ExperienceDisplay />
      <ProjectDisplay />
    </div>
  );
};

export {Header, Sidebar, Main};