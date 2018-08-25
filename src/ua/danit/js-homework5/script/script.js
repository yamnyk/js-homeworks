function copyObject(obj){
    let clone = {};
    for (let key in obj) {
        if(typeof obj[key] === 'object'){
            console.log(typeof obj[key]);
            clone[key] = copyObject(obj[key]);
        }
        clone[key] = obj[key];
    }
    return clone;
}

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


let clo = copyObject(user);
console.log('clone is ');
clo.blabla = 'Gogi';
clo.pets.type = 'fucking peace of devil';
console.log(clo);
console.log('original is ');
console.log(user);

