//阶乘：一个非负整数n的阶乘是所有的正整数小于或等于 n之积：
function factorial(n){
    if(n < 0) return -1;
    if(n == 0) return 1;
    return n * arguments.callee(n - 1);
}

