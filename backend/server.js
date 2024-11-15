import express from "express";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
import dbConfig from "./config/dbConfig.js"; 
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

app.use("/contacts", contactRoutes);

const PORT = process.env.PORT;


dbConfig()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`⚙️ Server is running at port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed! Error:", err);
  });
