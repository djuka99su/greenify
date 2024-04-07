/**
 * An array of routes that are accessible to the public.
 * These routes do not require authentication.
 * @type {string[]}
 */
export const publicRoutes = ["/", "/products", "/auth/new-verification"];

/**
 * An array of routes that are accessible for authentication.
 * These routes will redirect logged in users to /settings.
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * An array of emails for role-based access control.
 * Users with this email will be treated as ADMIN users.
 * @type {string[]}
 */
export const adminRoles = ["dndev99@gmail.com"];

/**
 * The prefix for API authentication routes.
 * Routes that start with this prefix are used for API authentication purposes.
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The URLs used for navigating through navbar and footer.
 * @type {string[{}]}
 */
export const links = [
  { href: "/", name: "Home" },
  { href: "/products", name: "Products" },
  { href: "/", name: "Blog" },
  { href: "/", name: "About" },
];

/**
 * The URLs used for navigating through product catagories.
 * @type {string[{}]}
 */
export const linksCategory = [
  { href: "/products", name: "Moss pictures" },
  { href: "/products", name: "Moss wall" },
  { href: "/products", name: "Moss Decorations" },
  { href: "/products", name: "Other" },
];

/**
 * The default redirect path after logging in.
 */
export const DEFAULT_LOGIN_REDIRECT = "/";
