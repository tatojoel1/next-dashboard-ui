import { z } from "zod";

export const areaSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1, { message: "Area name is required" }),
  description: z.string().optional(),
});

export type AreaSchema = z.infer<typeof areaSchema>;

export const locationSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1, { message: "Location name is required" }),
  address: z.string().min(1, { message: "Location address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  postalCode: z.string().min(1, { message: "Postal code is required" }),
  //areaId: z.number().optional(),
});

export type LocationSchema = z.infer<typeof locationSchema>;
