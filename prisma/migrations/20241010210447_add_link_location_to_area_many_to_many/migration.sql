/*
  Warnings:

  - You are about to drop the column `areaId` on the `Location` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_areaId_fkey";

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "areaId";

-- CreateTable
CREATE TABLE "_AreaToLocation" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AreaToLocation_AB_unique" ON "_AreaToLocation"("A", "B");

-- CreateIndex
CREATE INDEX "_AreaToLocation_B_index" ON "_AreaToLocation"("B");

-- AddForeignKey
ALTER TABLE "_AreaToLocation" ADD CONSTRAINT "_AreaToLocation_A_fkey" FOREIGN KEY ("A") REFERENCES "Area"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AreaToLocation" ADD CONSTRAINT "_AreaToLocation_B_fkey" FOREIGN KEY ("B") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;
