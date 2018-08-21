let n = +prompt('Enter your number','');

function fibo(n, cache) {
    cache = cache || [];
    if (cache[n]) {
        return cache[n];
    }
    if (n < 2) {
        return n;
    }
    return cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
}