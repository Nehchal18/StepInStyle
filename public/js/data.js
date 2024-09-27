class User {
    constructor(username, password, email, number) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.number = number;
        this.cart = [];
    }

    static saveUser(user) {
        let users = JSON.parse(localStorage.getItem("Users")) || {};
        console.log(user.username,users[user.username]);
        // return false;
        if (users[user.username]) {
            console.error("User already exists.");
            return false;
        }
        users[user.username] = user;
        // users.push(user);
        localStorage.setItem("Users", JSON.stringify(users));
        return true;
    }

    static getUser(username) {
        const users = JSON.parse(localStorage.getItem("Users")) || {};
        return users[username] || null;
    }

    static validateLogin(username, password) {
        const user = User.getUser(username);
        return user && user.password === password;
    }

    static setCurrentUser(username) {
        localStorage.setItem("currentUser", username);
    }

    static getCurrentUser() {
        const username = localStorage.getItem("currentUser");
        return User.getUser(username);
    }
}

const products = {
    1: { name: "product1", price: 999.99 , desc: "" , img: ["../img/product_image_1.png","../img/product_image_2.png","../img/product_image_3.png","../img/product_image_4.png"]},
    2: { name: "product2", price: 999.99 , img: ["../img/card1.png","../img/card1.png","../img/card1.png","../img/card1.png"]},
    3: { name: "product3", price: 999.99 , img: ["../img/card2.png","../img/card2.png","../img/card2.png","../img/card2.png"]},
    4: { name: "product4", price: 999.99 , img: ["../img/card3.png","../img/card3.png","../img/card3.png","../img/card3.png"]},
    5: { name: "product5", price: 999.99 , img: ["../img/card4.png","../img/card4.png","../img/card4.png","../img/card4.png"]},
    6: { name: "product6", price: 999.99 , img: ["../img/card5.png","../img/card5.png","../img/card5.png","../img/card5.png"]},
    7: { name: "product7", price: 999.99 , img: ["../img/card6.png","../img/card6.png","../img/card6.png","../img/card6.png"]},
    8: { name: "product8", price: 999.99 , img: ["../img/card7.png","../img/card7.png","../img/card7.png","../img/card7.png"]},
    9: { name: "product9", price: 999.99 , img: ["../img/card8.png","../img/card8.png","../img/card8.png","../img/card8.png"]},
    10: { name: "product10", price: 999.99 , img: ["../img/card9.png","../img/card9.png","../img/card9.png","../img/card9.png"]},
    11: { name: "product11", price: 999.99 , img: ["../img/card10.png","../img/card10.png","../img/card10.png","../img/card10.png"]},
    12: { name: "product12", price: 999.99 , img: ["../img/card11.png","../img/card11.png","../img/card11.png","../img/card11.png"]},
    
    // Add more products as needed
};