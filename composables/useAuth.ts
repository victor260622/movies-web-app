  import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    getAuth,
    updateProfile,
    signOut,
    setPersistence,
    inMemoryPersistence,
    onAuthStateChanged,
    sendEmailVerification,
    getIdToken,
  } from "firebase/auth";
  import { navigateTo, useState } from "nuxt/app";
  import useFirebase from "./useFirebase";
  import { ref } from "vue";

  export default function useFirebaseAuth() {
    const app = useFirebase();
    const auth = getAuth(app);

    const currentUser = ref<any>(null);
    const loading = ref(true);
    
    const formInput = useState("authForm", () => ({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }));

    onAuthStateChanged(auth, (user) => {
      currentUser.value = user;
      loading.value = false;
    });

    async function signIn() {
      try {
        await setPersistence(auth, inMemoryPersistence);

        const userCreds = await signInWithEmailAndPassword(
          auth,
          formInput.value.email,
          formInput.value.password
        );

        if (!userCreds.user.emailVerified) {
          alert("Debes verificar tu correo antes de iniciar sesión.");
          return;
        }

        const token = await getIdToken(userCreds.user);
        const res = await $fetch("/api/auth", {
          method: "POST",
          body: { idToken: token },
        }) as { message: string };

        if (res.message === "Login successful") {
          navigateTo("/movies");
        }
      } catch (error: any) {
        switch (error.code) {
          case "auth/invalid-credential":
          case "auth/wrong-password":
            alert("Correo o contraseña incorrectos.");
            navigateTo("/signup");
            break;
          case "auth/user-not-found":
            alert("No existe un usuario con ese correo.");
            navigateTo("/signup");
            break;
          case "auth/too-many-requests":
            alert("Demasiados intentos fallidos. Intenta más tarde.");
            break;
          case "auth/user-disabled":
            alert("Tu cuenta ha sido deshabilitada. Contacta al soporte.");
            break;
          case "auth/network-request-failed":
            alert("Error de conexión. Revisa tu red.");
            break;
          default:
            alert("Ocurrió un error al iniciar sesión. Intenta nuevamente.");
            console.error("Error en signIn:", error);
        }
      }
    }

    async function signUp() {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formInput.value.email,
          formInput.value.password
        );
        await sendEmailVerification(userCredential.user);

        await updateProfile(userCredential.user, {
          displayName: `${formInput.value.firstName} ${formInput.value.lastName}`,
        }).then(() => {
            navigateTo("/login")
        });
      } catch (error: any) {
        console.error("Error en signUp:", error.message);
      }
    }

    async function verifyAuth () {
      interface AuthCheckResponse {
        user?: any;
        [key: string]: any;
      }
      const res = await $fetch<AuthCheckResponse>('/api/auth-check');
      if (res.user) {
        currentUser.value = res.user;
        return true;
      }
    }

 async function logOut() {
    try {
      await signOut(auth);
      await $fetch("/api/logout", { method: "POST" });
      currentUser.value = null;
      navigateTo("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  }

    return { auth, currentUser, formInput, signIn, signUp, logOut, loading, verifyAuth  };
  }