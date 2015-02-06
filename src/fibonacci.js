/**
 *        0                 (n==0)
 * F(n) = 1                 (n==1)
 *        F(n-1) + F(n-2)   (n>1)
 */
function fibonacci(n){
    if(n == 0 || n == 1) return n;
    return arguments.callee(n - 2) + arguments.callee(n - 1);
}