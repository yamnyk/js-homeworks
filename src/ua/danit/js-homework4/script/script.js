let n = prompt('Enter your number','');

while(+n != n || isNaN(+n)){
    n = prompt('Enter your number again','');
}

function fibo(n, cache) {
    cache = cache || [];
    if (cache[n]) {
        return cache[n];
    }
    if (n < 2) {
        return n;
    }
    return cache[n] = fibo(n - 1, cache) + fibo(n - 2, cache);
}

alert(fibo(n));