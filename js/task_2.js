import users from './users.js';

// Получить массив объектов пользователей по цвету глаз(поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
    return users.filter(({ eyeColor }) => eyeColor === color);
}

console.log(getUsersWithEyeColor(users, 'blue')); 