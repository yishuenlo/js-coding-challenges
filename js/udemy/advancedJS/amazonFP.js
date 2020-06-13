// const user = {
//     name: 'Lexi',
//     active: true,
//     cart: [],
//     purchases: []
// }

class User {
    constructor(name, active) {
        this.name = name;
        this.active = active;
    }
    cart = [];
    purchases = [];
}

const lexi = new User('Lexi', true);
const oreo = new User('Oreo', true);

//implement a cart feature:
//1. add items to cart
//2. add 3% tax to item in cart
//3. buy items: cart --> purchase
//4. empty cart

const catnip = {
    name: 'Catnip',
    price: 6.46
}

const mice = {
    name: 'Rabbit Fur Mice',
    price: 4.99
}

//add items to cart
function addToCart(user, item){
    user.cart.push(item);
    addTax(item); //add tax to item
}

//add 3% tax
function addTax(item){
    item.tax = roundNum(item.price * 0.03);
    item.total = roundNum(item.price * 1.03);
}

//checkout function
function checkout(user) {
    if (user.cart.length > 0) {
        //calculate total
        let totalPrice = (user.cart.length < 2) ? user.cart[0].price : user.cart.reduce((acc, cur) => (acc.total + cur.total));
        //inform user of total 
        console.log(`your total is $${totalPrice}`);

        //add cart items to purchases
        user.purchases = user.purchases.concat([...user.cart]);

        //empty cart
        user.cart = [];
    } else {
        console.log('please add something to your cart');
    }

    // return user;
}

//round number to 2 decimals
function roundNum(num){
    return Math.round(num * 100) / 100;
}

addToCart(lexi, catnip);
// addToCart(mice);

// function checkout(items){
//     for(let item of arguments){
//         if (user.cart.includes(item)) {
//             user.purchases.push(item);
//             user.cart.splice(user.cart.indexOf(catnip), 1);
//             console.log(`you have successfully purchased ${item.name}.`);
//         } else {
//             console.log(`you do not have ${item.name} in your cart`);
//         }
//     }

//     return user.purchases;
// }
