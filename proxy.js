import { withAuth } from "next-auth/middleware";

export function proxy(request, event) {
  return withAuth(request, event);
}

export const config = {
  matcher: ["/properties/add", "/profile", "/properties/saved", "/messages"],
};
