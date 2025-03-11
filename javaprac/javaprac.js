const products_data1 =  [ 'vegies','fruits','home kitchen','food essentials']
const products_data2 =  ['tools','lights','safety products','toys']

// console.log(products_data1.at(0).toUpperCase(), products_data1.at(1).toUpperCase(), products_data1.at(2).toUpperCase(), products_data1.at(3).toUpperCase());
// console.log(products_data2.at(0).toUpperCase(), products_data2.at(1).toUpperCase(), products_data2.at(2).toUpperCase(), products_data2.at(3).toUpperCase());
function clock() {
    let the_date =  new Date()
     console.log(the_date.toDateString(), console.log("Hello sir"));

     const products_data1 =  [ "vegies","fruits","home kitchen","food essentials"]
     const products_data2 =  ["tools","lights","safety products","toys"]
     
     console.log(products_data1.at(0).toUpperCase(), products_data1.at(1).toUpperCase(), products_data1.at(2).toUpperCase(), products_data1.at(3).toUpperCase());
     console.log(products_data2.at(0).toUpperCase(), products_data2.at(1).toUpperCase(), products_data2.at(2).toUpperCase(), products_data2.at(3).toUpperCase());

products_data1.forEach( function (items) {
    console.log(items.toUpperCase())

if (products_data1  === products_data2)
    console.log("The given data is appropriate")
else console.log( `The data requires the reanalysis ${ products_data2}`)


    
})
}

clock();