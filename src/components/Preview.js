import React from "react";
import "../styles/Preview.css";

const Header = props => {
    const {name, title, picture} = props;

    return (
        <div id="preview-heading">
          <div><figure><img src={picture} alt=""/></figure></div>
          <div>
            <h1>{name}</h1>
            <p>{title}</p>
          </div>
        </div>
    );
};

const Sidebar = props => {
    const {contacts, skills} = props;

    return (
        <div id="preview-sidebar">
          <div id="preview-contacts">
            <h2>Contacts</h2>
            <hr />
            <ul>
              {contacts.map((c,i) => {return <li key={"contact-" + i}><div>{c.icon}<p>{c.info}</p></div></li>})}
            </ul>
          </div>
          <div id="preview-skills">
            <h2>Skills</h2>
            <hr />
            <ul>
              {skills.map((s,i) => {return <li key={"skill-" + i}>{s}</li>})}
            </ul>
          </div>
        </div>
    );
};

const Main = props => {
    const {profile, education, experience} = props;

    return (
        <div id="preview-main">
          <div id="preview-profile">
            <h2>Profile</h2>
            <hr />
            <p>{profile}</p>
          </div>
          <div id="preview-education">
            <h2>Education</h2>
            <hr />
            <ul>
              {education.map((e,i) => {return <li key={"education-" + i}>
                <h3>{e.name}</h3>
                <p className="preview-date">{e.startDate} - {e.endDate}</p>
                <p>{e.location}</p>
              </li>})}
            </ul>
          </div>
          <div id="preview-experience">
            <h2>Work Experience</h2>
            <hr />
            <ul>
              {experience.map((e,i) => {return <li key={"experience-" + i}>
                <h3>{e.title}</h3>
                <p className="preview-date">{e.startDate} - {e.endDate}</p>
                <p>{e.company + ", " + e.location}</p>
              </li>})}
            </ul>
          </div>
        </div>
    );
};

export {Header, Sidebar, Main};