import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import Url from "./models/Url.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Needed for ES modules to get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend static files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Shorten URL API
app.post("/api/shorten", async (req, res) => {
  try {
    const { originalUrl } = req.body;
    if (!originalUrl) return res.status(400).json({ error: "URL is required" });

    // Generate a short code
    const shortCode = Math.random().toString(36).substring(2, 8); // 6-char code

    const newUrl = new Url({ originalUrl, shortCode });
    await newUrl.save();
    const baseUrl = process.env.BASE_URL || `http://localhost:${PORT}`;
    res.json({ shortUrl: `${baseUrl}/${shortCode}` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Redirect short URL to original URL
app.get("/:code", async (req, res) => {
  try {
    const url = await Url.findOne({ shortCode: req.params.code });
    if (!url) return res.status(404).send("URL not found");

    url.clicks++;
    await url.save();
    res.redirect(url.originalUrl);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Catch-all route for frontend (for any routes not API)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
