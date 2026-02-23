import redis from "./redis";

export async function rateLimit(identifier: string) {
  const WINDOW_SIZE = 60; // seconds
  const MAX_REQUESTS = 10;

  const key = `rate_limit:${identifier}`;

  const current = await redis.incr(key);

  if (current === 1) {
    await redis.expire(key, WINDOW_SIZE);
  }

  if (current > MAX_REQUESTS) {
    return { success: false };
  }

  return { success: true };
}