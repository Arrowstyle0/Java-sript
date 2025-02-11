// for of

// ["","",""]
// [{},{},{}]


const arr =[1,2,3,4,5,6,7]

for (const val of arr) {
    
    // console.log(val);

}

const greetings  = "Hello ALPHA!"
    for (const greet of greetings) {
        // console.log(`Each character is ${greet}`);
           
    }

// MAPS

const map = new Map()
map.set('BRI', 45);
map.set('da', 46);
map.set('dawg',45);

// console.log(map)

for (const [val,value] of map) {
    
    // console.log(val, ':-', value);
    
}

const myObject  = {
    'game1'  : 'MAXPYNE',
    'game'   : 'GrandTheifAuto'

}

// for (const uio of myObject) {
//     console.log(uio);
     
// }


const myfield  = {
    operator : 'figma',
    lang : 'JS(JAVA SCRIPT)',
    databases : 'mongoDB',
    swift : "wbjda"
}

for (const key in myfield) {
        console.log( key );
        
    }
for (const key in myObject) {

    console.log(`${key} shortcut is for ${myfield[key]}`);
   
}

const data = ["dad" , "sfs" , "aaa"]

    for (const annd in data)
        console.log(data)