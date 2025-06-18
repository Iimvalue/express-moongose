import { Router } from "express";
import { getCarsMake,createCarMake,updateCarMake,deleteCarMake, getCarMake } from "../controllers/carMake.controller";

const router = Router({ mergeParams: true });

router.route("/").get(getCarsMake).post(createCarMake)

router.route("/:id").get(getCarMake).put(updateCarMake).delete(deleteCarMake);

export default router;
