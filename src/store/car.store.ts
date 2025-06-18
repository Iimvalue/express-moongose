// import { Car } from "../models/car.model";
// import { generateId } from "../utils/generate-id";

// const cars: Map<string, Car> = new Map();

// const create = (data: Omit<Car, 'id' | 'createdAt' | 'updatedAt'>): Car => {
//   const id = generateId();
//   const now = new Date();
//   const item: Car = {
//     id,
//     ...data,
//     createdAt: now,
//     updatedAt: now,
//   };
  
//   cars.set(id, item);
//   return item;
// }

// const findAll = (): Car[] => {
//   return Array.from(cars.values());
// }

// const findById = (id: string): Car | undefined => {
//   return cars.get(id);
// }

// const findByListId = (carId: string): Car[] => {
//   return findAll().filter(car => car.id === carId);
// }

// const update = (id: string, data: Partial<Omit<Car, 'id' | 'listId' | 'createdAt'>>): Car | undefined => {
//   const item = cars.get(id);
//   if (!item) return undefined;

//   const updatedCar: Car = {
//     ...item,
//     ...data,
//     updatedAt: new Date(),
//   };

//   cars.set(id, updatedCar);
//   return updatedCar;
// }

// const deleteCar = (id: string): boolean => {
//   return cars.delete(id);
// }

// const deleteByListId = (listId: string): void => {
//   const carsToDelete = findByListId(listId);
//   carsToDelete.forEach(item => cars.delete(item.id));
// }

// export const carStore = {
//   create, 
//   findAll, 
//   findById, 
//   findByListId, 
//   update, 
//   delete: deleteCar, 
//   deleteByListId, 
// };