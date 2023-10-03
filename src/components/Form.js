import React from "react";
import "../styles/Form.css";
import * as infoObjects from "../helpers/infoObjects";

const Header = () => {
    return (
        <h1>CV Application</h1>
    );
}

const Introduction = props => {
    const setState = props.setState;

    return (
        <section>
            <h2>Basic Information</h2>
            <p>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" max="50" onChange={e => setState({name: e.target.value})}></input>
            </p>
            <p>
                <label htmlFor="title">Job Title</label>
                <input type="text" id="title" name="title" max="50" onChange={e => setState({title: e.target.value})}></input>
            </p>
            <p>
                <label htmlFor="profile">Profile</label>
                <textarea id="profile" name="profile" onChange={e => setState({profile: e.target.value})}></textarea>
            </p>
            <p id="form-profile-image">
                <label htmlFor="picture">Profile Picture</label>
                <input type="file" id="picture" name="picture" accept="image/*" onChange={e => setState({picture: infoObjects.Picture(window.URL.createObjectURL(e.target.files[0]), 0, 0, 0, 0, 1)})}></input>
                <button type="button" className="crop-btn" onClick={e => setState({showCrop: true})}><i className="fa-solid fa-crop-simple"></i><p>Crop</p></button>
            </p>
        </section>
    );
}

const Contacts = props => {
    const contacts = props.contacts;
    const setState = props.setState;

    const changeContact = (value, i) => {
        let newContact = [...contacts];
        newContact[i].info = value;
        setState({contacts: newContact});
    }

    const deleteContact = i => {
        let newContact = [...contacts];
        newContact.splice(i, 1);
        setState({contacts: newContact});
    }

    const createContactInput = i => {
        return (
            <p>
                <label htmlFor="otherContact">Other</label>
                <input className="otherContact" name="otherContact" onChange={e => changeContact(e.target.value, i)} value={contacts[i].info}></input>
                <button type="button" className="form-delete-btn" onClick={e => deleteContact(i)}><i className="fa-solid fa-delete-left"></i></button>
            </p>
        );
    }

    return (
        <section>
            <h2>Contacts</h2>
            <ul>
                <li>
                    <p>             
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" onChange={e => changeContact(e.target.value, 0)}></input>
                    </p>
                </li>
                <li>
                    <p>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" max="254" onChange={e => changeContact(e.target.value, 1)}></input>
                    </p>
                </li>
                <li>
                    <p>
                    <label htmlFor="linkedIn">LinkedIn</label>
                    <input id="linkedIn" name="linkedIn" max="256" onChange={e => changeContact(e.target.value, 2)}></input>
                    </p>
                </li>
                {contacts.slice(3, contacts.length).map((c,i) => {return <li key={"otherContactInput-" + i}>{createContactInput(3+i)}</li>})}
            </ul>
            <button type="button" onClick={e => setState({contacts: contacts.concat([infoObjects.Contact("other", "")])})}>+ Add Contact</button>
        </section>
    );
}

const Qualifications = props => {
    const {skills, education, experience, project} = props;
    const setState = props.setState;

    const createSkillInput = i => {
        const changeSkill = value => {
            let newSkill = [...skills];
            newSkill[i] = value;
            setState({skills: newSkill});
        }

        const removeSkill = () => {
            let newSkill = [...skills];
            newSkill.splice(i, 1);
            setState({skills: newSkill});
        }

        return (
            <p className="skill-field">
                <input type="text" id="skill" name="skill" onChange={e => changeSkill(e.target.value)} value={skills[i]}></input>
                <button title="Delete Skill" type="button" className="form-delete-btn" onClick={e => removeSkill()}><i className="fa-solid fa-delete-left"></i></button>
            </p>
        );
    }

    const createEducationInput = (ed, i) => {
        const changeEducation = (type, value) => {
            switch(type) {
                case "name":
                    ed.name = value;
                    break;
                case "startDate":
                    ed.startDate = value;
                    break;
                case "endDate":
                    ed.endDate = value;
                    break;
                case "location":
                    ed.location = value;
                    break;
                default:
            }
            let newEducation = [...education];
            newEducation[i] = ed;
            setState({education: newEducation});
        }

        const removeEducation = () => {
            let newEducation = [...education];
            newEducation.splice(i, 1);
            setState({education: newEducation});
        }


        return (
            <div className="education-field">
                <p>
                    <label htmlFor="degreeOrCourse">Degree/Course</label>
                    <input type="text" id="degreeOrCourse" name="degreeOrCourse" onChange={e => changeEducation("name", e.target.value)} value={education[i].name}></input>
                </p>
                <p>
                    <label htmlFor="educationStartDate">Start Date</label>
                    <input type="text" id="educationStartDate" name="educationStartDate" onChange={e => changeEducation("startDate", e.target.value)} value={education[i].startDate}></input>
                </p>
                <p>
                    <label htmlFor="educationEndDate">End Date</label>
                    <input type="text" id="educationEndDate" name="educationEndDate" onChange={e => changeEducation("endDate", e.target.value)} value={education[i].endDate}></input>
                </p>
                <p>
                    <label htmlFor="educationLocation">Location</label>
                    <input type="text" id="educationLocation" name="educationLocation" onChange={e => changeEducation("location", e.target.value)} value={education[i].location}></input>
                </p>
                <button title="Delete Education" type="button" className="form-delete-btn" onClick={e => removeEducation()}>X</button>
            </div>
        );
    }

    const createExperienceInput = (exp, i) => {
        const changeExperience = (type, value) => {
            switch(type) {
                case "title":
                    exp.name = value;
                    break;
                case "startDate":
                    exp.startDate = value;
                    break;
                case "endDate":
                    exp.endDate = value;
                    break;
                case "company":
                    exp.company = value;
                    break;
                case "location":
                    exp.location = value;
                    break;
                case "description":
                    exp.description = value;
                    break;
                default:
            }
            let newExperience = [...experience];
            newExperience[i] = exp;
            setState({experience: newExperience});
        }

        const removeExperience = () => {
            let newExperience = [...experience];
            newExperience.splice(i, 1);
            setState({experience: newExperience});
        }

        return (
            <div className="experience-field">
                <p>
                    <label htmlFor="experienceTitle">Title</label>
                    <input type="text" id="experienceTitle" name="experienceTitle" onChange={e => changeExperience("title", e.target.value)} value={experience[i].title}></input>
                </p>
                <p>
                    <label htmlFor="experienceStartDate">Start Date</label>
                    <input type="text" id="experienceStartDate" name="experienceStartDate" onChange={e => changeExperience("startDate", e.target.value)} value={experience[i].startDate}></input>
                </p>
                <p>
                    <label htmlFor="experienceEndDate">End Date</label>
                    <input type="text" id="experienceEndDate" name="experienceEndDate" onChange={e => changeExperience("endDate", e.target.value)} value={experience[i].endDate}></input>
                </p>
                <p>
                    <label htmlFor="experienceCompany">Company</label>
                    <input type="text" id="experienceCompany" name="experienceCompany" onChange={e => changeExperience("company", e.target.value)} value={experience[i].company}></input>
                </p>
                <p>
                    <label htmlFor="experienceLocation">Location</label>
                    <input type="text" id="experienceLocation" name="experienceLocation" onChange={e => changeExperience("location", e.target.value)} value={experience[i].location}></input>
                </p>
                <p>
                    <label htmlFor="experienceDescription">Description</label>
                    <textarea id="experienceDescription" name="experienceDescription" onChange={e => changeExperience("description", e.target.value)} value={experience[i].description}></textarea>
                </p>
                <button title="Delete Experience" type="button" className="form-delete-btn" onClick={e => removeExperience()}>X</button>
            </div>
        );
    }

    const createProjectInput = (proj, i) => {
        const changeProject = (type, value) => {
            switch(type) {
                case "title":
                    proj.title = value;
                    break;
                case "description":
                    proj.description = value;
                    break;
                default:
            }
            let newProject = [...project];
            newProject[i] = proj;
            setState({project: newProject});
        }

        const removeProject = () => {
            let newProject = [...project];
            newProject.splice(i, 1);
            setState({project: newProject});
        }

        return (
            <div className="project-field">
                <p>
                    <label htmlFor="projectTitle">Title</label>
                    <input type="text" id="projectTitle" name="projectTitle" onChange={e => changeProject("title", e.target.value)} value={project[i].title}></input>
                </p>
                <p>
                    <label htmlFor="projectDescription">Description</label>
                    <textarea id="projectDescription" name="projectDescription" onChange={e => changeProject("description", e.target.value)} value={project[i].description}></textarea>
                </p>
                <button title="Delete Project" type="button" className="form-delete-btn" onClick={e => removeProject()}>X</button>
            </div>
        );
    }

    return (
        <section>
            <h2>Qualifications</h2>
            <h3>Skills</h3> 
            <div id="form-skills">
                <ul>{skills.map((e,i) => {return <li key={"skillInput-" + i}>{createSkillInput(i)}</li>})}</ul>
                <button type="button" onClick={e => setState({skills: skills.concat([""])})}>+ Add Skill</button>
            </div>
            <h3>Education</h3>
            <div id="form-education"> 
                <ul>{education.map((e,i) => {return <li key={"educationInput-" + i}>{createEducationInput(e, i)}</li>})}</ul>
                <button type="button" onClick={e => setState({education: education.concat([infoObjects.Education("", "", "", "")])})}>+ Add Education</button>
            </div>
            <h3>Experience</h3>
            <div id="form-experience">
                <ul>{experience.map((e,i) => {return <li key={"experienceInput-" + i}>{createExperienceInput(e, i)}</li>})}</ul>
                <button type="button" onClick={e => setState({experience: experience.concat([infoObjects.Experience("", "", "", "", "", "")])})}>+ Add Experience</button>
            </div>
            <h3>Projects</h3>
            <div id="form-project">
                <ul>{project.map((e,i) => {return <li key={"projectInput-" + i}>{createProjectInput(e, i)}</li>})}</ul>
                <button type="button" onClick={e => setState({project: project.concat([infoObjects.Project("", "")])})}>+ Add Project</button>
            </div>
        </section>
    );
}

export {Header, Introduction, Contacts, Qualifications};