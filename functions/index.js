// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

export const onCadeauUpdate =
    functions.firestore.document('cadeaux/{cadeauId}').onUpdate(change => { 
        const before = change.before.data();
        const after = change.after.data();

        const payload = {
            data: {
                name: String(after.name),
                quantite: String(after.quantite)
            }
        }
        return admin.messaging().sendToTopic('cadeaux-disponibles', payload)
            .catch(error => console.log('FCM failed', error));
    });
