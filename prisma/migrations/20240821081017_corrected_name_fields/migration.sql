/*
  Warnings:

  - You are about to drop the column `compareText` on the `CourseDetails` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `CourseDetails` table. All the data in the column will be lost.
  - You are about to drop the column `upperButtonText` on the `CourseDetails` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `courseName` to the `CourseDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `years` to the `CourseDetails` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CourseDetails" DROP CONSTRAINT "CourseDetails_userId_fkey";

-- AlterTable
ALTER TABLE "CourseDetails" DROP COLUMN "compareText",
DROP COLUMN "description",
DROP COLUMN "upperButtonText",
ADD COLUMN     "courseName" TEXT NOT NULL,
ADD COLUMN     "years" TEXT NOT NULL,
ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AddForeignKey
ALTER TABLE "CourseDetails" ADD CONSTRAINT "CourseDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
