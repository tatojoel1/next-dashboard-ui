import React from "react";
import FormModal from "./FormModal";
import prisma from "@/lib/prisma";

export type FormContainerProps = {
  table: "area" | "location";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number | string;
};

const FormContainer = async ({ table, type, data, id }: FormContainerProps) => {
  let relatedData = {};
  if (type !== "delete") {
    switch (table) {
      case "area":
        const areas = await prisma.area.findMany({
          select: {
            id: true,
            name: true,
            description: true,
          },
        });
        break;
      case "location":
        const locationAreas = await prisma.area.findMany({
          select: {
            id: true,
            name: true,
          },
        });
        relatedData = { areas: locationAreas };
      default:
        break;
    }
  }
  return (
    <div className="">
      <FormModal
        table={table}
        type={type}
        data={data}
        id={id}
        relatedData={relatedData}
      />
    </div>
  );
};

export default FormContainer;
