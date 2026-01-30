
import { Role } from "@/generated/client";
import { prisma } from "@/lib/prisma";

export async function getUserRole(userId: string): Promise<Role | null> {
  const user = await prisma.profile.findUnique({
    where: { id: userId },
    select: { role: true },
  });

  return user?.role ?? null;
}
