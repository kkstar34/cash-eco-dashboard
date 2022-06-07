const functions = require("firebase-functions");


const exports.randomNumber = functions.https.onRequest((request, response) => {

    const number = Math.round(Math.random() * 100);

    res.send(number);
})
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });