function findIcon(type) {
    switch(type) {
        case 'phone':
            return <i class="fa-solid fa-phone"></i>;
        case 'email':
            return <i class="fa-solid fa-envelope"></i>
        case 'linkedIn':
            return <i class="fa-brands fa-linkedin"></i>
        default:
            return <i class="fa-solid fa-globe"></i>;
    }
}

const Contact = (type, info) => {
    const icon = findIcon(type);
    return {type, info, icon};
}

const Education = (name, startDate, endDate, location) => {
    return {name, startDate, endDate, location};
}

const Experience = (title, startDate, endDate, company, location) => {
    return {title, startDate, endDate, company, location}
}

export {Contact, Education, Experience}