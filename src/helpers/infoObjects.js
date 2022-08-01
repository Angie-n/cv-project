function findIcon(type) {
    switch(type) {
        case 'phone':
            return <i className="fa-solid fa-phone"></i>;
        case 'email':
            return <i className="fa-solid fa-envelope"></i>
        case 'linkedIn':
            return <i className="fa-brands fa-linkedin"></i>
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
    return {title, startDate, endDate, company, location, description}
}

export {Contact, Education, Experience}