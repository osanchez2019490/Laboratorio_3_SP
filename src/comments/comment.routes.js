import { Router } from "express";
import { check } from "express-validator";
import { validationFields} from "../middlewares/validateFields.js";
import { validateJWT } from "../middlewares/validateJWT.js";
import { commentDelete, commentPost, commentPut } from "./comment.controllers.js";
import { existingByIdComment } from "../helpers/db-validator.js";

const router = Router();

router.post(
    "/",
    [
        validateJWT,
        check("comment", "The comment is mandatory").not().isEmpty(),
        validationFields
    ], commentPost)

router.put(
    "/:id",
    [
        validateJWT,
        check("id", "it is not id validit").isMongoId(),
        check("id").custom(existingByIdComment),
        validationFields
    ], commentPut)

router.delete(
    "/:id",
    [
        validateJWT,
        check("id", "it is not id validit").isMongoId(),
        check("id").custom(existingByIdComment),
        validationFields
    ], commentDelete)
export default router;