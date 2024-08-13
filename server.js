import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import path from "path";

const app = express();
const port = 5000;

app.use(cors());

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; font-src 'self' https://fonts.gstatic.com; img-src 'self' https://example.com; connect-src 'self' https://www.swiggy.com;"
  );
  next();
});

app.get("/api/restaurants", async (req, res) => {
  try {
    const response = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7111675&lng=77.0722759&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("API fetch error:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// Serve static files from React dist
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'dist')));

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
