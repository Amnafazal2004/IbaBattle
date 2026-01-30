import { getUserRole } from "./auth";
import { hasPermission } from "./rbac";
import type { Permission } from "./permissions"; 

export async function canUser(userId: string, permission: Permission) {
  const role = await getUserRole(userId);
  if (!role) return false;
  return hasPermission(role, permission);
}
