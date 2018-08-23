let user = {
    login: 'YamniskLox',
    pass: '123456',
    id:123,
    blabla: null,
    changeName: function(newName) {
        this.login = newName;
    },
    pets: {
        name: 'Bobik',
        type: 'dog'
    }
};

function copyObject(obj){
    let clone = {};

    for (let key in obj) {
        console.log(typeof obj[key]);
        if(typeof(obj[key]) !== 'object'){
            clone[key] = obj[key];
        } else {
            copyObject(obj[key]);
        }
    }

    clone.name = 'Pip';
    clone.pets.type = 'fluffy pies of shit';
    console.log('clone is ');
    console.log(clone);
    console.log('original is ');
    console.log(obj);
}

console.log(copyObject(user));