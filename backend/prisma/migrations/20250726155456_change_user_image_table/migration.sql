/*
  Warnings:

  - Added the required column `email` to the `userImage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "userImage" ADD COLUMN     "email" TEXT NOT NULL;
