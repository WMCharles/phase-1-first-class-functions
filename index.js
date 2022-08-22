function receivesAFunction(sum){
    return sum()
}
function returnsANamedFunction(){
    return function sum(x){
        console.log(x**2)
    }
}
function returnsAnAnonymousFunction(){
    return function(){};
}