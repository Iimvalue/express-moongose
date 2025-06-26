"use strict";
// import { Dealer } from "../models/dealer.model";
// import { generateId } from "../utils/generate-id";
// const dealers: Map<string, Dealer> = new Map();
// const create = (
//   data: Omit<Dealer, "id" | "createdAt" | "updatedAt">
// ): Dealer => {
//   const id = generateId();
//   const now = new Date();
//   const dealer: Dealer = {
//     id,
//     ...data,
//     createdAt: now,
//     updatedAt: now,
//   };
//   dealers.set(id, dealer);
//   return dealer;
// };
// const findAll = (): Dealer[] => {
//   return Array.from(dealers.values());
// };
// const findById = (id: string): Dealer | undefined => {
//   return dealers.get(id);
// };
// const update = (
//   id: string,
//   data: Partial<Omit<Dealer, "id" | "createdAt">>
// ): Dealer | undefined => {
//   const dealer = dealers.get(id);
//   if (!dealer) return undefined;
//   const updatedList: Dealer = {
//     ...dealer,
//     ...data,
//     updatedAt: new Date(),
//   };
//   dealers.set(id, updatedList);
//   return updatedList;
// };
// const deleteDealer = (id: string): boolean => {
//   return dealers.delete(id);
// };
// export const dealerStore = {
//   create,
//   findAll,
//   findById,
//   update,
//   delete: deleteDealer,
// };
