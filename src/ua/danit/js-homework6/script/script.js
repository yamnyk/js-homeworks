function createNewUser() {
    let user = {};

    Object.defineProperty(user, 'firstName', {
        writable:false,
        value: prompt('Enter first name',''),
    });
    Object.defineProperty(user, 'lastName', {
        writable:false,
        value: prompt('Enter last name',''),
    });
    Object.defineProperty(user, 'getLogin', {
        writable:false,
        value: function () {
            return (user.firstName.charAt(0) + user.lastName).toString().toLowerCase();
        }
    });



    return user;
}

let user = createNewUser();
user.getLogin();
console.log('original');
console.log(user);
console.log('getLogin()');
console.log(user.getLogin());
user.firstName = 'Horhe';
user.lastName = 'Moe';
console.log('try to change name by expression');
console.log(user);

// user.firstName.set();
// user.lastName.set();
// console.log('change name by setters');
// console.log(user);
