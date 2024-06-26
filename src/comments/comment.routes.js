import { Router } from "express";
import { check } from "express-validator";
import { validationFields} from "../middlewares/validateFields.js";
import { validateJWT } from "../middlewares/validateJWT.js";
import { commentById, commentDelete, commentPost, commentPut } from "./comment.controllers.js";
import { existingByIdComment } from "../helpers/db-validator.js";

const router = Router();

router.post(
    "/",
    [
        check("comment", "The comment is mandatory").not().isEmpty(),
        validationFields
    ], commentPost)

router.get(
    "/:id",
    [
        check("id", "it is not id validit").isMongoId(),
        validationFields
    ], commentById)
router.put(
    "/:id",
    [
        check("id", "it is not id validit").isMongoId(),
        check("id").custom(existingByIdComment),
        validationFields
    ], commentPut)

router.delete(
    "/:id",
    [
        check("id", "it is not id validit").isMongoId(),
        check("id").custom(existingByIdComment),
        validationFields
    ], commentDelete)
export default router;