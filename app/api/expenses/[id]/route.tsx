import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const expense = await prisma.expense.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!expense)
    return NextResponse.json({ error: "Expense not found" }, { status: 404 });

  const deletedExpense = await prisma.expense.delete({
    where: { id: expense.id },
  });
  return NextResponse.json(deletedExpense, { status: 201 });
}
