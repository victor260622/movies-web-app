export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/tailwind.css"],

  runtimeConfig: {
    OMDB_API_KEY: process.env.OMDB_API_KEY,
    firebaseAdmin: {
      projectId: process.env.PROJECT_ID,
      clientEmail: process.env.FIREBASE_CONFIG_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_CONFIG_PRIVATE_KEY,
    },

    public: {
      OMDB_API_URL: process.env.OMDB_API_URL,
      firebase: {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID,
        measurementId: process.env.MEASUREMENT_ID,
      },
    },
  },
});
