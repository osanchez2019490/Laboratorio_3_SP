import { Router } from "express";
import { check } from "express-validator";
import { publicationPost } from "./publication.controller.js";
import { validationFields } from "../middlewares/validateFields.js";
import { validateJWT } from "../middlewares/validateJWT.js";

const router = Router();

router.post(
    "/",
    [ validateJWT,
    check ("author", "The author is required").not().isEmpty(),
    check ("title", "The title is required").not().isEmpty(),
    check ("category", "The category is required").not().isEmpty(),
    check ("text", "The text is required").not().isEmpty(),
    validationFields
    ],publicationPost);

export default router;