-- CreateTable
CREATE TABLE "Cat" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER,
    "breed" TEXT,

    CONSTRAINT "Cat_pkey" PRIMARY KEY ("id")
);
