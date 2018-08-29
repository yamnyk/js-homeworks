function comparingObjArrays(objArray1, objArray2, property) {
    return objArray2.filter(function (el) {
        for(key in el){
            if(key === property){
                return true
            }
        }
        return false
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
}];

let gogies2 = [{
    name: 'Goga',
    age: 22
}, {
    name: 'Gogo',
    age: 26
}, {
    name: 'Gog',
    age: 40
}, {
    name: 'Gogi',
    age: 18
}];

console.log(comparingObjArrays(gogies1, gogies2, 'name'));
