import express from "express";
import
{
    MovieIndex,
    MovieCreate,
    MovieUpdate,
    MovieDelete,
    MovieDetails
} from "../controllers/movie.controllers.js";

const router=express.Router();
router.get("/",MovieIndex);
router.get("/",MovieCreate);
router.put("/:id",MovieUpdate);
router.get("/:id",MovieDelete);
router.get("/:id",MovieDetails);

export default router;
