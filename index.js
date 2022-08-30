
function receivesAFunction(par1) {
    return par1()


}
function returnsANamedFunction() {
    function namedFunction() {
        console.log("haha")
    }
return namedFunction;

}
function returnsAnAnonymousFunction()  {
    return () => {
        console.log(" ")
    }    
}