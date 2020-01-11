import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBWgXUqagIrYB_7x7xB_j0EsnbI0pLnk6k",
    authDomain: "expensify-66fd0.firebaseapp.com",
    databaseURL: "https://expensify-66fd0.firebaseio.com",
    projectId: "expensify-66fd0",
    storageBucket: "expensify-66fd0.appspot.com",
    messagingSenderId: "194778471844",
    appId: "1:194778471844:web:4198f1e3ad8ab6e1daf531",
    measurementId: "G-3GJP3W1BS9"
};

firebase.initializeApp(firebaseConfig)
const database = firebase.database()
database.ref().set({
    name: 'Andrew mead',
    age: 26,
    isSingle: false,
    location: {
        city: 'Philadelphia',
        country: 'United States'
    }
})

// database.ref().set('This is my data.')

database.ref('age').set(27)
database.ref('location').set('New York')

database.ref('attributes').set({
    height: 73,
    width: 150
})

console.log('I made a request to change the data.')