function findIcon(type) {
    switch(type) {
        case 'phone':
            return <i className="fa-solid fa-phone"></i>;
        case 'email':
            return <i className="fa-solid fa-envelope"></i>
        case 'linkedIn':
            return <i className="fa-brands fa-linkedin"></i>
        case 'github':
            return <i className="fa-brands fa-github"></i>
        default:
            return <i className="fa-solid fa-globe"></i>;
    }
}

const Contact = (type, info) => {
    const icon = findIcon(type);
    return {type, info, icon};
}

const Education = (name, startDate, endDate, location) => {
    return {name, startDate, endDate, location};
}

const Experience = (title, startDate, endDate, company, location, description) => {
    return {title, startDate, endDate, company, location, description};
}

const Project = (title, description) => {
    return {title, description};
}

const Picture = (src, marginLeft, marginRight, marginTop, marginBottom, scale) => {
    return {src, marginLeft, marginRight, marginTop, marginBottom, scale};
}

export {Contact, Education, Experience, Project, Picture}