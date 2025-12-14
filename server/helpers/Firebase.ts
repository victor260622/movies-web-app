import admin from "firebase-admin";

const config = process.env.FIREBASE_CONFIG;

class FirebaseHelper {
  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(config as admin.ServiceAccount),
      databaseURL: "https://streaming-web-app-7a9ce.firebaseio.com",
    });
  }
}
export default FirebaseHelper;
