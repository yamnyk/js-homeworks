function comparingObjArrays(objArray1, objArray2, property) {
    let res = [];
    for (let i = 0; i < objArray1.length; i++) {
        console.log(objArray2[i][property]);
        console.log(objArray1.some(el => el[property] === objArray2[i][property]));
        console.log('______');
        objArray2.some(el => el[property] === objArray1[i][property]) ? true : res.push(objArray1[i]);
    }
    return res
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
    name: 'Gog',
    age: 40
}, {
    name: 'Gogi',
    age: 18
}];

console.log(comparingObjArrays(gogies1, gogies2, 'name'));
