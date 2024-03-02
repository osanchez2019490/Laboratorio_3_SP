import { Router } from "express";
import { check } from "express-validator";

import { login } from "./auth.controller.js";
import { validationFields } from "../middlewares/validateFields.js";

const router = Router();

router.post(
    '/login',
    [
      check('password', 'The password does not have to be empty').not().isEmpty(),
      validationFields
    ],login)

export default router