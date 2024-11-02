const uniqueSuffix = new Date().toISOString().replace(/[:.\-Z]/g, ''); //20241102T013616888
console.log("uniqueSuffix: ", uniqueSuffix);
const uniqueSuffix2 = new Date().toISOString().replace(/[^0-9]/g, ''); //20241102013616943
console.log("uniqueSuffix2: ", uniqueSuffix2);

