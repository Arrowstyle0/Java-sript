// for loops


for (let imperialValue = 0; imperialValue < 10; imperialValue++) {
    const element = imperialValue;

    if (element == 5) {
        console.log("the value is greatest(sarc)");
        
    }
    // console.log(`The imperialValue is : ${element}`);

}

for (let   i = 0;   i < 10;   i++) {

    // console.log(`OUTERLOOPVALUE : ${i}`);
    
    
    for (let j = 0;   j < 10 ; j++ ) {

        // console.log(`The inner loop value ${j} and inner loop ${i} `);

        // console.log(i + '*' + j + '='+ i*j);
        
        
    }
    

}


let myArr = ["DEADPOOL", "CATWOMEN","HUSKY"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}