import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig)
const database = firebase.database()

export {
    firebase, 
    database as default
}; 


// // child_removed
// database.ref('expense').on('child_removed', (snapShot) => {
//     console.log(snapShot.key, snapShot.val())
// })

// // child_changed
// database.ref('expense').on('child_changed', (snapShot) => {
//     console.log(snapShot.key, snapShot.val())
// })

// // child_added
// database.ref('expense').on('child_added', (snapShot) => {
//     console.log(snapShot.key, snapShot.val())
// })

// database.ref('expense').push({
//     description: 'Rent',
//     note: '',
//     amount: 1022323,
//     createdAt: 1231231313
// })

// database.ref('expense')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = []

//         snapshot.forEach((childSnapShot) => {
//             expenses.push({
//                 id: childSnapShot.key,
//                 ...childSnapShot.val()
//             })
//         })
//         console.log(expenses)
//     })

// database.ref('expense').on('value', (snapShot) => {
//     const expenses = []
//     snapShot.forEach(childSnapShot => {
//         expenses.push({
//             id: childSnapShot.key,
//             ...childSnapShot.val()
//         })
//     })
//     console.log(expenses)
// })

// database.ref('expense').push({
//     description: 'Rent',
//     note: '',
//     amount: 1022323,
//     createdAt: 1231231313
// })

// database.ref('expense').push({
//     description: 'Rent',
//     note: '',
//     amount: 1022323,
//     createdAt: 1231231313
// })


// database.ref('/notes/-LzwfO1VjfFktQ9Q_wXg').remove()


// database.ref('/notes/-LzwfO1VjfFktQ9Q_wXg').update({
//     body: 'Buy Food'
// })


// database.ref('notes').push({
//     title: 'Course topics',
//     body: 'React Native, Angular, Python'
// })

// const notes = [{
//     id: '12',
//     title: 'Biking',
//     body: 'Biking this is the rider'
// }, {
//     id: '13',
//     title: 'Motor',
//     body: 'Motor mechanic'
// }]

// database.ref('notes').set(notes)
// database.ref('notes/12')

// database.ref().update({
//     name: 'Andrew'
// })

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// })
// setTimeout(() => {
//     database.ref('age').set(29)
// }, 3500)

// setTimeout(() => {
//     database.ref().off(onValueChange)
// }, 7000)

// setTimeout(() => {
//     database.ref('age').set(30)
// }, 10500)
// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     }).catch(error => {
//         console.log('Error fetching data', error)
//     })

// database.ref().set({
//     name: 'Andrew mead',
//     age: 26,
//     stressLevel: 6,
//     isSingle: false,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Philadelphia',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((e) => {
//     console.log('This failed.', e)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })

// // database.ref().set('This is my data.')

// database.ref('age').set(27)
// database.ref('location').set('New York')

// database.ref('attributes').set({
//     height: 73,
//     width: 150
// }).then(() => {
//     console.log('Second set call worked.')
// }).catch((e) => {
//     console.log('Things didnt for the second error', e)
// })

// database.ref('isSingle').set(null)

// database.ref('isSingle').remove()
// .then(() => {
//     console.log('Data was removed.')
// }).catch((e) => {
//     console.log('Data was not removed',e)
// })

// console.log('I made a request to change the data.')