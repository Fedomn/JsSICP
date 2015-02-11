function filteredAccumulate(filter, combiner, null_value, term, a, next, b) {
    if(filteredNextA(filter,next,a) > b) return null_value;
    return combiner(term(filteredNextA(filter,next,a)),
        filteredAccumulate(filter, combiner, null_value, term, next(filteredNextA(filter,next,a)), next, b));
}

function filteredNextA(filter, next, a){
    if(filter(a)) return a;
    return filteredNextA(filter, next, next(a));
}