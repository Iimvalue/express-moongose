"use strict";
// import { CarMake } from "@/models/carMake.model";
// import { generateId } from "../utils/generate-id";
// const carsMake: Map<string, CarMake> = new Map();
// const create = (
//   data: Omit<CarMake, "id" | "createdAt" | "updatedAt">
// ): CarMake => {
//   const id = generateId();
//   const now = new Date();
//   const carMake: CarMake = {
//     id,
//     ...data,
//     createdAt: now,
//     updatedAt: now,
//   };
//   carsMake.set(id, carMake);
//   return carMake;
// };
// const findAll = (): CarMake[] => {
//   return Array.from(carsMake.values());
// };
// const findById = (id: string): CarMake | undefined => {
//   return carsMake.get(id);
// };
// const update = (
//   id: string,
//   data: Partial<Omit<CarMake, "id" | "createdAt">>
// ): CarMake | undefined => {
//   const dealer = carsMake.get(id);
//   if (!dealer) return undefined;
//   const updatedList: CarMake = {
//     ...dealer,
//     ...data,
//     updatedAt: new Date(),
//   };
//   carsMake.set(id, updatedList);
//   return updatedList;
// };
// const deleteCarMake = (id: string): boolean => {
//   return carsMake.delete(id);
// };
// export const carMakeStore = {
//   create,
//   findAll,
//   findById,
//   update,
//   delete: deleteCarMake,
// };
