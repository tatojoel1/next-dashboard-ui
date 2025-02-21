import prisma from "@/lib/prisma";
import Image from "next/image";
import React from "react";

const UserCard = async ({
  type,
}: {
  type: "events" | "task" | "location" | "area";
}) => {
  const modelMap: Record<typeof type, any> = {
    events: prisma.events,
    task: prisma.task,
    location: prisma.location,
    area: prisma.area,
  };
  const data = await modelMap[type].count();

  return (
    <div className="rounded-2xl odd:bg-bdCometLight even:bg-bdDeepBlue p-4 flex-1 min-w-[130px] ">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/10
        </span>
        <Image src={"/more.png"} alt="more" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4 text-bdWhiteWarm">{data}</h1>
      <h1 className="capitalize text-sm font-semibold text-white">{type}</h1>
    </div>
  );
};

export default UserCard;
