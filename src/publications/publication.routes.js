import { Router } from "express";
import { check } from "express-validator";
import { publicationGet, publicationPost } from "./publication.controller.js";
import { validationFields } from "../middlewares/validateFields.js";
import { validateJWT } from "../middlewares/validateJWT.js";

const router = Router();

router.get("/", [validateJWT], publicationGet);

router.post(
    "/",
    [ validateJWT,
    check ("author", "The author is required").not().isEmpty(),
    check ("title", "The title is required").not().isEmpty(),
    check ("category", "The category is required").not().isEmpty(),
    check ("text", "The text is required").not().isEmpty(),
    validationFields
    ],publicationPost);

router.put(
    "/:id",
    [
        validateJWT,
        check("id", "it is not id validit").isMongoId(),
        check("id").custom(existingById),
    ]
)
export default router;