import { Router } from "express";
import {
  createProduct,
  getAllOrFilteredProducts,
  getProductById,
} from "../controllers/product.controllers.js";

const router = Router();

// GET /products or /products?category=Apparel
router.get("/", getAllOrFilteredProducts);

// GET /products/:id
router.get("/:id", getProductById);

// POST /products
router.post("/", createProduct);

export default router;
