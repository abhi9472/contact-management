import {
  addContact,
  getAllContacts,
  updateContact,
  deleteContact,
  updateCompany,
} from "../controllers/contactController.js";
import express from "express";

const router = express.Router();

router.post("/add", addContact);
router.get("/getall", getAllContacts);
router.put("/update", updateContact);
router.put("/updatecompany", updateCompany);

router.delete("/delete", deleteContact);

export default router;
