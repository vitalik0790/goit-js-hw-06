import users from './users.js';

// Получить массив имен пользователей по полу(поле gender).

const getUsersWithGender = (users, gender) => {
    return users.filter(user => user.gender === gender).map(({ name }) => name);
};

console.log(getUsersWithGender(users, 'male'));