function countChange(amount, n){
    var m = n || 5;
    if(amount == 0) return 1;
    if(amount < 0 || n == 0) return 0;
    return countChange(amount, m - 1) + countChange(amount - getCurrencyValue(m), m);
}

function getCurrencyValue(n){
    switch (n){
        case 1: return 1;
        case 2: return 5;
        case 3: return 10;
        case 4: return 25;
        case 5: return 50;
    }
}