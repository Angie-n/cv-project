import { Component } from 'react';
import './styles/App.css';
import defaultProfileImage from "./assets/images/default-picture.png";
import * as infoObjects from "./helpers/infoObjects";
import * as formComponent from "./components/Form";
import * as previewComponent from "./components/Preview";
import Control from './components/Crop';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      title: "",
      picture: infoObjects.Picture(defaultProfileImage, 0, 0, 0, 0, 1),
      contacts: [infoObjects.Contact("phone", ""), infoObjects.Contact("email", ""), infoObjects.Contact("linkedIn", "")],
      skills: [],
      profile: "",
      education: [infoObjects.Education("", "", "", "")],
      experience: [infoObjects.Experience("", "", "", "", "", "")],
      project: [infoObjects.Project("", "")],
      showCrop: false,
      cropIncrementSize: 10,
    }
  }

  render() {
    const {name, title, picture, contacts, skills, profile, education, experience, project, showCrop, cropIncrementSize} = this.state;

    return (
      <div>
        <form>
          <formComponent.Header></formComponent.Header>
          <formComponent.Introduction setState={p => this.setState(p)}></formComponent.Introduction>
          <formComponent.Contacts setState={p => this.setState(p)} contacts={contacts}></formComponent.Contacts>
          <formComponent.Qualifications setState={p => this.setState(p)} skills={skills} education={education} experience={experience} project={project}></formComponent.Qualifications>
        </form>
        <div id="preview">
          <previewComponent.Header name={name} title={title} picture={picture}></previewComponent.Header>
          <previewComponent.Sidebar contacts={contacts} skills={skills}></previewComponent.Sidebar>
          <previewComponent.Main profile={profile} education={education} experience={experience} project={project}></previewComponent.Main>
        </div>
        <Control setState={p => this.setState(p)} picture={picture} showCrop={showCrop} cropIncrementSize={cropIncrementSize}></Control>
      </div>
    )
  }
}

export default App;
