/*
  Warnings:

  - You are about to drop the column `locationId` on the `Events` table. All the data in the column will be lost.
  - You are about to drop the column `eventsId` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the `_AreaToLocation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_eventsId_fkey";

-- DropForeignKey
ALTER TABLE "_AreaToLocation" DROP CONSTRAINT "_AreaToLocation_A_fkey";

-- DropForeignKey
ALTER TABLE "_AreaToLocation" DROP CONSTRAINT "_AreaToLocation_B_fkey";

-- AlterTable
ALTER TABLE "Events" DROP COLUMN "locationId";

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "eventsId";

-- DropTable
DROP TABLE "_AreaToLocation";

-- CreateTable
CREATE TABLE "_EventsToLocation" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EventsToLocation_AB_unique" ON "_EventsToLocation"("A", "B");

-- CreateIndex
CREATE INDEX "_EventsToLocation_B_index" ON "_EventsToLocation"("B");

-- AddForeignKey
ALTER TABLE "_EventsToLocation" ADD CONSTRAINT "_EventsToLocation_A_fkey" FOREIGN KEY ("A") REFERENCES "Events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventsToLocation" ADD CONSTRAINT "_EventsToLocation_B_fkey" FOREIGN KEY ("B") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;
