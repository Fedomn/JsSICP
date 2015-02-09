function pascalTriangle(n){
    var result = '1';
    if(n === 1) return result + '\n';
    for(var i = 1; i <= n-1; i++)
        result = result + ' ' + pascalFactorial(n - 1) / (pascalFactorial(i) * pascalFactorial(n - 1 - i));
    return pascalTriangle(n - 1) + result + '\n';
}

function pascalFactorial(n){
    if(n === 1 || n === 0 ) return 1;
    return pascalFactorial(n - 1) * n;
}
