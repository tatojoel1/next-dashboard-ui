"use server";

import { revalidatePath } from "next/cache";
import prisma from "./prisma";
import { AreaSchema, LocationSchema } from "./formValidationSchema";

type CurrentState = {
  success: boolean;
  error: boolean;
};

// Area Actions
export const createArea = async (
  currentState: CurrentState,
  data: AreaSchema
) => {
  try {
    await prisma.area.create({
      data: {
        name: data.name,
        description: data.description,
      },
    });
    //TODO: //revalidatePath("/list/subjects"); Waiting for the update from the next/cache module from Vercel side
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateArea = async (
  currentState: CurrentState,
  data: AreaSchema
) => {
  try {
    await prisma.area.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
        description: data.description,
      },
    });
    //TODO: //revalidatePath("/list/subjects"); Waiting for the update from the next/cache module from Vercel side
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteArea = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await prisma.area.delete({
      where: {
        id: parseInt(id),
      },
    });
    //TODO: //revalidatePath("/list/subjects"); Waiting for the update from the next/cache module from Vercel side
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

// Location Actions
export const createLocation = async (
  currentState: CurrentState,
  data: LocationSchema
) => {
  try {
    await prisma.location.create({
      data: {
        name: data.name,
        address: data.address,
        city: data.city,
        state: data.state,
        country: data.country,
        postalCode: data.postalCode
      },
    });
    //TODO: //revalidatePath("/list/subjects"); Waiting for the update from the next/cache module from Vercel side
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateLocation = async (
  currentState: CurrentState,
  data: LocationSchema
) => {
  try {
    await prisma.location.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
        address: data.address,
        city: data.city,
        state: data.state,
        country: data.country,
        postalCode: data.postalCode,
      },
    });
    //TODO: //revalidatePath("/list/subjects"); Waiting for the update from the next/cache module from Vercel side
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteLocation = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await prisma.location.delete({
      where: {
        id: parseInt(id),
      },
    });
    //TODO: //revalidatePath("/list/subjects"); Waiting for the update from the next/cache module from Vercel side
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};
