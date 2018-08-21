let numToFuct = +prompt('Enter number to numToFuct','');

function factorial (numToFuct){
    let res = 1;

    while(isNaN(numToFuct) || numToFuct < 0){
        numToFuct = +prompt('Enter number to numToFuct again','');
    }

    for (let i = 2; i <= numToFuct; i++) {
        res *= i;
    }

    return res;
}

alert(`${numToFuct} facotial is: ${factorial(numToFuct)}`);