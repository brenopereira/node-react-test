/*
  Warnings:

  - You are about to drop the column `copy_code` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `isbn` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `bookId` on the `rents` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "rents" DROP CONSTRAINT "rents_bookId_fkey";

-- AlterTable
ALTER TABLE "books" DROP COLUMN "copy_code",
DROP COLUMN "isbn";

-- AlterTable
ALTER TABLE "rents" DROP COLUMN "bookId",
ADD COLUMN     "copyId" INTEGER,
ADD COLUMN     "expires_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "returned" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "book_copies" (
    "id" SERIAL NOT NULL,
    "isbn" TEXT NOT NULL DEFAULT '',
    "copy_code" TEXT NOT NULL DEFAULT '',
    "bookId" INTEGER,

    CONSTRAINT "book_copies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "book_copies" ADD CONSTRAINT "book_copies_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "books"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rents" ADD CONSTRAINT "rents_copyId_fkey" FOREIGN KEY ("copyId") REFERENCES "book_copies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
