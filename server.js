var express = require("express");
var path = require("path");
var app = express();

// Serve the 'public' folder for static assets (CSS, JS, images)
app.use(express.static("public"));

// Define custom routes for specific pages
app.get("/product", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "product.html"));
});

app.get("/search", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "search.html"));
});

app.get("/404", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "404.html"));
});

app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "signup.html"));
});

// Start the server on port 8080
app.listen(8080, () => {
    console.log("Server running on http://localhost:8080");
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});