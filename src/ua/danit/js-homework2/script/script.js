let value = +prompt('Enter your number','');
var result = [];
while (isNaN(value)){
    value = +prompt ('Ведите число еще раз', '');
}
while(parseInt(value) !== value){
    value = +prompt ('Введите целое число!!!')
}

if (value === 1){
    console.log('Резюлтат:' + 1);
}

if (value === 2){
    console.log('Резюлтат:' + 2);
}

if (value === 3){
    console.log('Резюлтат:' + '2, ' + '3');
}
if (value > 3){
    if(value===2) console.log(2);
    let primes=[2];
    for(let itest=3;itest<=value;itest+=2)
        if(!primes.some(function(pr){return !(itest%pr)}))
            primes.push(itest);
    console.log(primes.toString());
}