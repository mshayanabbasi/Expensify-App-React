//
// Object Destructuring
//

// const person = {
//     name: 'Shayan',
//     age: 22,
//     location: {
//         city: 'Karachi',
//         temp: 8
//     }
// }

// const { name: firstName='Anonymous' , age } = person

// console.log(`${firstName} is ${age}`)

// const { city, temp: temperature } = person.location

// if (city && temperature) {
//     console.log(`It is ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// }

// const { name: publisherName = 'self-published' } = book.publisher

// console.log(publisherName)

//
// Array destructuring
//

// const address = ['1299 S Junipar Street', 'Philadelphia', 'Pennsylvania', '19147']

// const [street, city, state] = address

// console.log(`You are in ${city} ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [itemName, mediumPrice] = item
console.log(`A medium ${itemName} costs ${mediumPrice}`)