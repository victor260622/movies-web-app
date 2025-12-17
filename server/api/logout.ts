import { deleteCookie } from "h3";

export default defineEventHandler(async (event) => {
  deleteCookie(event, "auth-cookie");

  return { message: "Logout successful" };
});
