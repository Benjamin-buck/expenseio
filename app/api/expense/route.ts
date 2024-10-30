import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const postSchema = z.object({
  merchant: z.string().max(255).min(1),
  price: z.string().min(1),
  categoryId: z.string().min(1),
});

export async function POST(request: NextRequest) {
  // Get the body of the request
  const body = await request.json();

  const validation = postSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 401 });

  // Create the object
  const newExpense = await prisma.expense.create({
    data: {
      merchant: body.merchant,
      price: parseFloat(body.price),
      dateOfPurchase: body.date,
      categoryId: parseInt(body.categoryId),
    },
  });

  return NextResponse.json(newExpense, { status: 201 });
}
