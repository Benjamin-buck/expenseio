/*
  Warnings:

  - Made the column `dateOfPurchase` on table `Expense` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Expense` MODIFY `dateOfPurchase` VARCHAR(191) NOT NULL;
