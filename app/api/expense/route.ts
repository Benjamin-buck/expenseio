import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // Get the body of the request
  const body = await request.json();

  // Create the object
  const newExpense = await prisma.expense.create({
    data: {
      merchant: body.merchant,
      price: parseFloat(body.price),
      dateOfPurchase: body.date,
    },
  });

  return NextResponse.json(newExpense, { status: 201 });
}
