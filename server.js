var express = require("express");
var app = express();

app.use("/", express.static("./public"));

// Middleware to handle 404 requests
app.use((req, res) => {
  // Respond with your 404 page (make sure to place 404.html in the "public" folder)
  res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(8080, () => {
    console.log("Server started successfully on port 8080");
  });
