const functions = require("firebase-functions");


const exports.randomNumber = functions.https.onRequest((request, response) => {

    const number = Math.round(Math.random() * 100);

    res.send(number);
})

export const documentWriteListener = functions.firestore
  .document('collection/{documentUid}')
  .onWrite((change, context) => {

    if (!change.before.exists) {
      // New document Created : add one to count
      db.doc(docRef).update({ numberOfDocs: FieldValue.increment(1) });
    } else if (change.before.exists && change.after.exists) {
      // Updating existing document : Do nothing
    } else if (!change.after.exists) {
      // Deleting document : subtract one from count
      db.doc(docRef).update({ numberOfDocs: FieldValue.increment(-1) });
    }

    return;
  });
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });