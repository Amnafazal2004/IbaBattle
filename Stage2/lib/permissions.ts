export const permissions = {
  "service:create": ["provider"],
  "service:delete": ["admin"],
  "service:view": ["admin", "provider", "seeker"],
};

export type Role = "admin" | "provider" | "seeker";
export type Permission = keyof typeof permissions;
