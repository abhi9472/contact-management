import express from "express";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
import dbConfig from "./config/dbConfig.js"; // Assuming you have a dbConfig function for MongoDB connection

dotenv.config();
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use("/api/contacts", contactRoutes);

const PORT = process.env.PORT;

// Make sure your dbConfig function connects to MongoDB properly.
dbConfig()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`⚙️ Server is running at port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed! Error:", err);
  });
