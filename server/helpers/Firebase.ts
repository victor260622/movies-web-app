import admin from "firebase-admin";
import { getAuth } from "firebase-admin/auth";
import type { CookieSerializeOptions } from "cookie-es";

class FirebaseHelper {
  constructor() {
    const fbconfigs = useRuntimeConfig().firebaseAdmin;

    if (!admin.apps.length) {
      const serviceAccount: admin.ServiceAccount = {
        projectId: fbconfigs.projectId,
        clientEmail: fbconfigs.clientEmail,
        privateKey: fbconfigs.privateKey?.replace(/\\n/g, "\n"),
      };

      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    }
  }

  async generateCookie(idToken: string) {
    const expiresIn = 60 * 60 * 24 * 5 * 1000;
    const sessionCookie = await getAuth().createSessionCookie(idToken, {
      expiresIn,
    });

    const options: CookieSerializeOptions = {
      maxAge: expiresIn,
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    };

    return { options, sessionCookie };
  }

  async verifyUser(sessionCookie: string) {
    const claims = await getAuth().verifySessionCookie(sessionCookie, true);
    return claims;
  }
}

export default FirebaseHelper;
