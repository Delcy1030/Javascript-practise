let myNum = [1,4,9]
let total =myNum.reduce(function(acc,curVal){
    console.log(`current value : ${curVal}   accumulator :${acc}`)
    return acc+curVal;
},0)
console.log(total)
//reduce function