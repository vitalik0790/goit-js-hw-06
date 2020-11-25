import users from './users.js';

// Получить массив имен всех пользователей(поле name).

const getUserNames = users => {
    return users.map(({ name }) => name);
    // return users.map(user => user.name);
}

console.log(getUserNames(users));

