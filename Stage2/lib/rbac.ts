import { permissions, Role, Permission } from "./permissions";

export function hasPermission(role: Role, permission: Permission): boolean {
  return permissions[permission].includes(role);
}


// permissions[permission]
// This means:
// “Look up the array of roles allowed for this permission”
// Example:
// permissions["service:create"]
// // → ["provider"]
// permissions["service:view"]
// // → ["admin", "provider", "seeker"]

// .includes(role)
// .includes() is a JavaScript array method.
// It answers:
// “Is this value inside the array?”
// Examples:
// ["admin", "provider"].includes("provider") // true
// ["admin", "provider"].includes("seeker")  // false

