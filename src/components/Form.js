import React from "react";
import "../styles/Form.css";

const Header = () => {
    return (
        <h1>CV Application</h1>
    );
}

const Introduction = props => {
    const {name, title, profile, picture} = props;
    return (
        <section>
            <h2>Basic Information</h2>
            <p>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" max="50"></input>
            </p>
            <p>
                <label htmlFor="title">Job Title</label>
                <input type="text" id="title" name="title" max="50"></input>
            </p>
            <p>
                <label htmlFor="profile">Profile</label>
                <textarea id="profile" name="profile"></textarea>
            </p>
            <p>
                <label htmlFor="picture">Profile Picture</label>
                <input type="file" id="picture" name="picture" accept="image/*"></input>
            </p>
        </section>
    );
}

const Contacts = props => {
    const {contacts} = props;
    return (
        <section>
            <h2>Contacts</h2>
            <p>
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone"></input>
            </p>
            <p>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" max="254"></input>
            </p>
            <p>
                <label htmlFor="linkedIn">LinkedIn</label>
                <input id="linkedIn" name="linkedIn" max="256"></input>
            </p>
            <p>
                <label htmlFor="skill">Add Contact</label>
                <input type="text" id="skill" name="skill"></input>
                <button>+</button>
            </p>
        </section>
    );
}

const Qualifications = props => {
    const {skills, education, experience} = props;

    return (
        <section>
            <h2>Qualifications</h2>
            <h3>Skills</h3>
            <p>
                <label htmlFor="skill">Add Skill</label>
                <input type="text" id="skill" name="skill"></input>
                <button>+</button>
            </p>
            <h3>Education</h3>
            <div id="form-education"> 
                <button>+ Add Education</button>
            </div>
            <h3>Experience</h3>
            <button>+ Add Experience</button>
        </section>
    );
}

export {Header, Introduction, Contacts, Qualifications};