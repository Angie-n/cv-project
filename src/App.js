import { Component } from 'react';
import './styles/App.css';
import defaultProfileImage from "./assets/images/default-picture.png";
import * as infoObjects from "./helpers/infoObjects";
import * as formComponent from "./components/Form";
import * as previewComponent from "./components/Preview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      title: "",
      picture: defaultProfileImage,
      contacts: [infoObjects.Contact("phone", ""), infoObjects.Contact("email", ""), infoObjects.Contact("linkedIn", "")],
      skills: [],
      profile: "",
      education: [infoObjects.Education("", "", "", "")],
      experience: [infoObjects.Experience("", "", "", "", "", "")],
    }
  }

  render() {
    const {name, title, picture, contacts, skills, profile, education, experience} = this.state;

    return (
      <div>
        <form>
          <formComponent.Header></formComponent.Header>
          <formComponent.Introduction setState={p => this.setState(p)}></formComponent.Introduction>
          <formComponent.Contacts setState={p => this.setState(p)} contacts={contacts}></formComponent.Contacts>
          <formComponent.Qualifications setState={p => this.setState(p)} skills={skills} education={education} experience={experience}></formComponent.Qualifications>
        </form>
        <div id="preview">
          <previewComponent.Header name={name} title={title} picture={picture}></previewComponent.Header>
          <previewComponent.Sidebar contacts={contacts} skills={skills}></previewComponent.Sidebar>
          <previewComponent.Main profile={profile} education={education} experience={experience}></previewComponent.Main>
        </div>
      </div>
    )
  }
}

export default App;
