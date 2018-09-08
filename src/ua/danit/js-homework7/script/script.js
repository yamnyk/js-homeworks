function comparingObjArrays(objArray1, objArray2, property) {
        return !objArray1.filter(function (){
            return objArray2.some(el => el[property] === objArray1[i][property])
        });
}

let gogies1 = [{
    name: 'Goga',
    age: 22
}, {
    name: 'Gogo',
    age: 26
}, {
    name: 'Gog',
    age: 40
}, {
    name: 'Izya',
    age: 30
}];

let gogies2 = [{
    name: 'Goga',
    age: 22
}, {
    name: 'Gogy',
    age: 41
}, {
    name: 'Gogo',
    age: 26
}, {
    name: 'Gogp',
    age: 40
}, {
    name: 'Gogi',
    age: 18
}];

console.log(comparingObjArrays(gogies1, gogies2, 'name'));
