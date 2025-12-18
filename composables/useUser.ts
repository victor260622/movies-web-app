import type { DecodedIdToken } from "firebase-admin/auth";
import { useState } from "nuxt/app";

export default function useUser() {
  const user = useState<DecodedIdToken | null>("user", () => null);
  return { user };
}
