/*
  Warnings:

  - Added the required column `category` to the `Services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `neighbour` to the `Services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Services` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Services" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "neighbour" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL;
