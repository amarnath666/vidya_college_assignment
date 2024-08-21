-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "specialization" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseDetails" (
    "id" SERIAL NOT NULL,
    "upperButtonText" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "compareText" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "CourseDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "CourseDetails_userId_idx" ON "CourseDetails"("userId");

-- AddForeignKey
ALTER TABLE "CourseDetails" ADD CONSTRAINT "CourseDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
