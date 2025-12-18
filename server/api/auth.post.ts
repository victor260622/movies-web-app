import FirebaseHelper from "../helpers/Firebase";

export default defineEventHandler(async (event) => {
  const firebaseHelper = new FirebaseHelper();

  const { idToken } = await readBody(event);
  const { sessionCookie, options } =
    await firebaseHelper.generateCookie(idToken);

  setCookie(event, "auth-cookie", sessionCookie, options);

  return { message: "Login successful" };
});
