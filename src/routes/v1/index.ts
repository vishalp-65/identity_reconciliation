import { Router } from "express";
import identityRoutes from "./identifyRoutes";
import httpStatus from "http-status-codes";

const router = Router();

router.use("/", identityRoutes);

// Checking api is live
router.get("/info", (req, res) => {
    res.status(httpStatus.OK).json("Api is working fine");
});

export default router;
