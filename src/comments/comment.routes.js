import { Router } from "express";
import { check } from "express-validator";
import { validationFields} from "../middlewares/validateFields.js";
import { validateJWT } from "../middlewares/validateJWT.js";
import { commentPost } from "./comment.controllers.js";

const router = Router();

router.post(
    "/",
    [
        validateJWT,
        check("comment", "The comment is mandatory").not().isEmpty(),
        validationFields
    ], commentPost
)


export default router;