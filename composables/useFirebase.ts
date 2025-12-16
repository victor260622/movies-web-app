import { initializeApp, type FirebaseApp, type FirebaseOptions } from "firebase/app";
import { useRuntimeConfig } from "nuxt/app";

let app: FirebaseApp;

export default function useFirebase(): FirebaseApp {
  if (!app) {
    const runtimeConfig = useRuntimeConfig().public.firebase as FirebaseOptions;

    const config: FirebaseOptions = {
      apiKey: runtimeConfig.apiKey,
      authDomain: runtimeConfig.authDomain,
      projectId: runtimeConfig.projectId,
      storageBucket: runtimeConfig.storageBucket,
      messagingSenderId: runtimeConfig.messagingSenderId,
      appId: runtimeConfig.appId,
      measurementId: runtimeConfig.measurementId,
    };

    app = initializeApp(config);
  }
  return app;
}