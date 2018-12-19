import * as functions from "firebase-functions";

import { Example1 } from "@example";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((_request, response) => {
  response.send(Example1.EXAMPLE_1);
});
