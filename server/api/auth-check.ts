import { getCookie } from 'h3';
import { getAuth } from 'firebase-admin/auth';

export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'auth-cookie');
  if (!token) return { user: null };

  try {
    const decoded = await getAuth().verifySessionCookie(token, true);
    return { user: decoded };
  } catch {
    return { user: null };
  }
});
