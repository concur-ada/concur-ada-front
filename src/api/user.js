import users from './testData/users.json';

export const login = (userName) => {
    let user;
    if (userName) {
        user = users.find(item => item.login.toLowerCase() === userName.toLowerCase());
    }
    return user;
};