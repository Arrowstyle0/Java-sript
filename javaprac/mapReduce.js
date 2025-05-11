

const items = ["py", "java","js","iosteam"]

  const value =   items.forEach( (prod) => {
        //   console.log(prod);
  } )
  
    

// console.log(value);
const numbers = [10,200,30,40,50,60]

const nemesis = numbers.filter( (num) => num < 400)
 
// console.log(nemesis);


const jiva = []

numbers.forEach ( ( numbers)  => {
    if ( nemesis < 400 ) {
        numbers.push(nemesis)
    }
})

// console.log(numbers);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let bookrev = books.filter( (bk) => bk.publish >= 2000 && bk.edition >= 2010  )

const bookset = []

  books.forEach ( (books) => {
        if(books.publish > 1985) {
                books.push(bookset)
        }
                

                        
  }) 
  
console.log(books);
