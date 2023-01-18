const outerFunc = () => {
    
    const test = 4 * 4;
    // return test;
    
    const innerFunc = () => {
        const test2 = 5*5;
        return test2
    }
    const innerFuncValue = innerFunc()
    
    const container = [test, innerFuncValue]

    return container 
    
}

console.log(outerFunc())