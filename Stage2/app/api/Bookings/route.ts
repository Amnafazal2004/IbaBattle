import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const serviceId = formData.get("serviceId") as string;
    const bookingDate = formData.get("bookingDate") as string;
    const timeSlot = formData.get("timeSlot") as string;
    const authorId = formData.get("authorId") as string;

    // Check if user is booking their own service
    const service = await prisma.services.findUnique({
      where: { id: serviceId },
      select: { authorId: true }
    });

    if (!service) {
      return NextResponse.json({ success: false, message: "Service not found" });
    }

    if (service.authorId === authorId) {
      return NextResponse.json({ success: false, message: "You cannot book your own service" });
    }

    await prisma.bookings.create({
      data: {
        serviceId,
        bookingDate: new Date(bookingDate),
        timeSlot,
        authorId
      }
    });

    return NextResponse.json({ success: true, message: "Booking added" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Failed to create booking" });
  }
}

