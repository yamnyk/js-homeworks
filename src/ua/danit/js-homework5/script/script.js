let obj = {
    name: "Gogi",
    age: 23,
    height: 194,
    pets: {
        name: 'GogiDog',
        status: 'fucking devil'
    },
    gadjets: ['notebook', ['iphone5s', 'samsung...']]
};

function cloneObj (object) {
    let clone = {};
    for (let nameOfProperty in object) {
        if (typeof object[nameOfProperty] === "object") {
            clone[nameOfProperty] = cloneObj(object[nameOfProperty]);
        } else if (Array.isArray(object[nameOfProperty])) {
            for (let elementOfArray of object[nameOfProperty]) {
                if(Array.isArray(elementOfArray) || typeof elementOfArray === 'object'){
                    clone[nameOfProperty].push(cloneObj(elementOfArray));
                } else {
                    clone[nameOfProperty].push(elementOfArray);
                }
            }
        } else {
            clone[nameOfProperty] = object[nameOfProperty];
        }
    }
    return clone;
}

let result = cloneObj(obj);

console.log(`original object`);
console.log(obj);

result.name = 'Gogi';
result.pets.name = 'Lucius';
result.gadjets[1] = 'fuck';

console.log(`cloned peace of shit`);
console.log(result);
