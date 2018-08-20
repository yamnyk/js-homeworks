let credentials = prompt('Enter your Name and Age. \n Example: Ivan 42').split(' ');
let name = credentials[0];
let age = +credentials[1];

while(isNaN(age) || name === '' || name === ' '
|| age === '' || age === ' ' || age.toString() !== credentials[1]){
    let newCreds = prompt('Enter correct credentials \n Example: Ivan 42').split(' ');
    credentials[0] = newCreds[0];
    credentials[1] = newCreds[1];
}

if(age < 18){
    alert('You are not allowed to visit this website');
} else if(18 <= age && age <= 22){
    confirm('Are you sure you want to continue?') ? alert(`Welcome, ${credentials[0]}`) : alert('You are not allowed to visit this website');
} else if(age > 22){
    alert(`Welcome, ${credentials[0]}`);
}