import users from './users.js';

const getSortedUniqueSkills = (users) =>
    users
        .reduce((acc, item) => [...acc, ...item.skills], [])
        .filter((current, index, array) => array.indexOf(current) === index)
        .sort();

console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */