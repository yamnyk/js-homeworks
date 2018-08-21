let value = prompt('Enter two numbers','').split(' ');
let result = [];

let start = 1, finish;

if(+value[0] > +value[1]){
    start = +value[1];
    finish = +value[0];
} else {
    start = +value[0];
    finish = +value[1];
}

console.log('start '+ start);
console.log('finish ' + finish);

while (isNaN(start) || isNaN(finish)){
    value = +prompt ('Enter two numbers again', '');
}
while(parseInt(start) !== start || parseInt(finish) !== finish){
    value = +prompt ('Enter integer number')
}

let primes=[];

if(start === 1){
    primes.push(2);
    start = 3;
}

if(start === 2){
    primes.push(2);
    start = 3;
}
for(let itest=start;itest<=finish;itest+=2)
    if(!primes.some(function(pr){
        return !(itest%pr);
    })) {
        primes.push(itest);
    }
console.log('Result: '+primes.toString());
