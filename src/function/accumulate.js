/**
 * @param combiner是描述如何将当前项与前面项的积累结果组合起来
 * @param null_value是描述所有项用完时的基本值
 * @param term是关于一个以a为参数的函数
 * @param a
 * @param next函数是a如何递进到b的函数
 * @param b
 */
function accumulate(combiner, null_value, term, a, next, b) {
    if(a > b) return null_value;
    return combiner(term(a), accumulate(combiner, null_value, term, next(a), next, b));
}

