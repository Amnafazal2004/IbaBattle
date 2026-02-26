
import client, { connectRedis } from "@/lib/redis";

interface Service {
  title: string;
  neighbourhood: string;
  id: string;
}

export async function getExistingService(
  title: string,
  neighbourhood: string,
  id: string,
): Promise<Service | null> {
  //basically async jo hai wo promise return kerta to :promise<service | null> is basically ye bata raha
  //k return type promise hogi jis main Service (interface) hoga ya null
  try {
    await connectRedis(); // Redis connect

    // Fetch from Redis
    const cachedService = await client.lRange(`user:${id}:services`,0,-1);

    if (cachedService && Object.keys(cachedService).length > 0) {
      // Parse JSON strings to objects
      const services = Object.values(cachedService).map((s) => JSON.parse(s));
      console.log(services);
      const matchedService = services.find(
        (s) => s.title.trim().toLowerCase() === title.trim().toLowerCase() &&
    s.neighbourhood.trim().toLowerCase() === neighbourhood.trim().toLowerCase()
      );
      if (matchedService) return matchedService;
    }

    return null; // Not found
  } catch (error) {
    console.error("Redis getService error:", error);
    return null;
  }
}
