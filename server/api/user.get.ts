import FirebaseHelper from "../helpers/Firebase";

export default defineEventHandler(async (event) => {
    
    const cookie = (await getQuery(event).cookie) || getCookie(event, "auth-cookie")
    const fbHelper = new FirebaseHelper()
   
    try {
        const claims = await fbHelper.verifyUser(cookie as string)
        return {
            user: claims
        }
    }
    catch (err) {
        return null
    }
})