import { initializeApp, type FirebaseApp } from "firebase/app";

const firebaseConfig = useRuntimeConfig().firebase;
let app: FirebaseApp;

export default function useFirebase() {
  if (!app) app = initializeApp(firebaseConfig);

  return app;
}
