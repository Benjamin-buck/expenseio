import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  merchant: z.string().min(2).max(255),
  description: z.string().min(1),
  price: z.string(),
});

export async function POST(request: NextRequest) {
  // Get the json request body
  const body = await request.json();

  // Validate the request
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // Post the request
  const newExpense = await prisma.expense.create({
    data: {
      merchant: body.merchant,
      price: parseInt(body.price),
      description: body.description,
    },
  });

  // Return the request
  return NextResponse.json(newExpense, { status: 201 });
}
