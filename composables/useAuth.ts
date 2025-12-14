import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export default function useFirebaseAuth() {
  const auth = getAuth();
  const formInput = useState("authForm", () => ({
    name: "",
    email: "",
    password: "",
  }));

  const errorBag = useState("authError", () => ({
    name: "",
    email: "",
    password: "",
  }));

  function signIn() {}

  function signUp() {
    createUserWithEmailAndPassword(
      auth,
      formInput.value.email,
      formInput.value.password,
    )
      .then((userCredential) => {})
      .catch((error) => {
        console.log("Error: " + error);
      });
  }

  function logOut() {}

  return {
    auth,
    formInput,
    signIn,
    signUp,
    logOut,
  };
}
