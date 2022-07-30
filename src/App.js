import { Component } from 'react';
import './styles/App.css';
import defaultProfileImage from "./assets/images/default-picture.png";
import * as infoObjects from "./helpers/infoObjects";
import * as previewComponent from "./components/Preview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Jane Doe",
      title: "Professional Title",
      picture: defaultProfileImage,
      contacts: [infoObjects.Contact("phone", "(123) 456-7891"), infoObjects.Contact("email", "professional@gmail.com"), infoObjects.Contact("linkedIn", "www.linkedin.com/jane-doe-10533m22")],
      skills: ["Javascript", "HTML", "CSS", "Node.js", "React.js"],
      profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus porta enim, non accumsan massa blandit id. Proin consequat porttitor urna ut fermentum.",
      education: [infoObjects.Education("Degree/Course", "Start", "End", "Location"), infoObjects.Education("Degree/Course", "Start", "End", "Location")],
      experience: [infoObjects.Experience("Title", "Start", "End", "Company", "Location")],
    }
  }

  render() {
    const {name, title, picture, contacts, skills, profile, education, experience} = this.state;

    return (
      <div id="preview">
        <previewComponent.Header name={name} title={title} picture={picture}></previewComponent.Header>
        <previewComponent.Sidebar contacts={contacts} skills={skills}></previewComponent.Sidebar>
        <previewComponent.Main profile={profile} education={education} experience={experience}></previewComponent.Main>
      </div>
    )
  }
}

export default App;
