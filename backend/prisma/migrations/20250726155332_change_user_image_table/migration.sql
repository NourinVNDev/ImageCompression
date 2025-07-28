/*
  Warnings:

  - You are about to drop the `UserImage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "UserImage";

-- CreateTable
CREATE TABLE "userImage" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "originalImage" BYTEA NOT NULL,
    "compressedImage" BYTEA NOT NULL,
    "originalSize" TEXT NOT NULL,
    "compressedSize" TEXT NOT NULL,
    "userChoice" INTEGER NOT NULL,
    "timeStamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "userImage_pkey" PRIMARY KEY ("id")
);
