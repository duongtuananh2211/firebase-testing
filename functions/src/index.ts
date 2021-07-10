import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

const app = admin.initializeApp({
  projectId: "spotify-clone-5ed36",
  // eslint-disable-next-line max-len
});
const db = app.firestore();

if (process.env.NODE_ENV === "TESTING") {
  db.settings({
    host: "localhost:8080",
    ssl: false,
  }),
  process.env.FIREBASE_AUTH_EMULATOR_HOST = "localhost:9099";
}


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

export const countSongs = functions.https.onCall(async () => {
  return (await db.collection("songs").get()).docs.length;
});
