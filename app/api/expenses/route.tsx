import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  merchant: z.string().min(2).max(255),
});

export async function POST(request: NextRequest) {
  // Get the json request body
  const body = await request.json();

  // Validate the request
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // Post the request
  const expense = await prisma.expense.create({
    data: {
      merchant: body.merchant,
      price: body.price,
      description: body.description,
      date: body.date,
    },
  });

  // Return the request
  return NextResponse.json(expense);
}
