import type { DecodedIdToken } from "firebase-admin/auth";
import useUser from "~/composables/useUser";

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (import.meta.client) return;

  const sessionCookie = useCookie("auth-cookie");
  const { user } = useUser();

  const guestRoutes = ["/", "/signup", "/home", "/login"];

  if (!sessionCookie.value && guestRoutes.includes(to.path)) {
    return;
  }

  if (!sessionCookie.value && !guestRoutes.includes(to.path)) {
    return navigateTo("/login");
  }

  const response = await $fetch(`/api/user?cookie=${sessionCookie.value}`);

  if (!response) return navigateTo("/movies");

  user.value = response?.user as DecodedIdToken;
});
