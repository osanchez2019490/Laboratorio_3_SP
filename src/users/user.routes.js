import { Router } from "express";
import { check } from "express-validator";
import { putUser, userPost } from "./user.controller.js";
import { existingEmail, existingUsername, existingById} from "../helpers/db-validator.js";
import { validationFields} from "../middlewares/validateFields.js";
import { validateJWT } from "../middlewares/validateJWT.js";

const router = Router();

router.post(
    "/register",
    [
        check ("username", "The username is required").not().isEmpty(),
        check("username").custom(existingUsername),
        check("email", "The email is required").not().isEmpty(),
        check("email", "The email is not valid").isEmail(),
        check("email").custom(existingEmail),
        check("password", "The password must be greater than 6 characters").isLength({ min: 6}),
        check("name", "The name is required").not().isEmpty(),
        validationFields
    ], userPost)

router.put(
    "/:id",
    [
      validateJWT,
      check("id", "The id is mandatory").not().isEmpty(),
      check("id").custom(existingById),
      validationFields
    ], putUser)

    export default router;