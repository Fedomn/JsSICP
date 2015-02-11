/**
 * @param term是关于一个以a为参数的函数，计算完之后得到的值参与整体求和
 * @param a
 * @param next函数是a如何递进到b的函数
 * @param b
 */
function product(term, a, next, b){
    if(a > b) return 1;
    return term(a) * product(term, next(a), next, b);
}