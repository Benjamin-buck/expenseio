import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const subscriptionSchema = z.object({
  merchant: z.string().max(255),
  price: z.string(),
});

export async function POST(request: NextRequest) {
  // Get the body of the request
  const body = await request.json();

  // Validate the body of the request
  const validation = subscriptionSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 404 });

  // Create subscription
  const newSubscription = await prisma.subscription.create({
    data: {
      merchant: body.merchant,
      price: parseFloat(body.price),
    },
  });

  // Return subscription
  return NextResponse.json(newSubscription, { status: 201 });
}
