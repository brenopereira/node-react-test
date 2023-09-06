/*
  Warnings:

  - You are about to drop the column `city` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `street` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `zipcode` on the `clients` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "clients" DROP COLUMN "city",
DROP COLUMN "number",
DROP COLUMN "state",
DROP COLUMN "street",
DROP COLUMN "zipcode",
ADD COLUMN     "address" TEXT NOT NULL DEFAULT '';
