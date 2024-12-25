// Example where 'fill' might configure a fill operation in a data structure
let array = new Array(5).fill(0); // Array with 5 elements filled with 0s
console.log(array); // Outputs: [0, 0, 0, 0, 0]

let customArray = new Array(10).fill({ fill: 1 }); // Array with 10 elements, each filled with { fill: 1 }
console.log(customArray); // Outputs: [{ fill: 1 }, { fill: 1 }, ..., { fill: 1 }] (10 elements)
