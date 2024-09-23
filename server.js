var express = require("express");
var path = require("path");
var app = express();

// Serve the 'public' folder for static assets (CSS, JS, images)
app.use(express.static("public"));
app.use(express.json());

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

app.post('/signup', (req, res) => {
    let { name, email, password, number, tac, notification } = req.body;

    // form validations
    if(name.length < 3){
        return res.json({'alert': 'name must be 3 letters long'});
    } else if(!email.length){
        return res.json({'alert': 'enter your email'});
    } else if(password.length < 8){
        return res.json({'alert': 'password should be 8 letters long'});
    } else if(!number.length){
        return res.json({'alert': 'enter your phone number'});
    } else if(!Number(number) || number.length < 10){
        return res.json({'alert': 'invalid number, please enter valid one'});
    } else if(!tac){
        return res.json({'alert': 'you must agree to our terms and conditions'});
    } else{
        // submit form
        return res.json({'alert': 'form submitted successfully'});
    }
})


app.get("/cart", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "cart.html"));
});

// Start the server on port 8080
app.listen(8080, () => {
    console.log("Server running on http://localhost:8080");
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});