

const imageArray = document.querySelectorAll(".sub-image");
const productImage = document.getElementById('productImage');
const cartButton = document.querySelector('.addtocartheadericon');
const cartframe = document.querySelector('.cart-frame');
const cartMessage = document.querySelector('.cart-msg');
const addToCartButton = document.querySelector('.add-to-cart-button');
const cartQuantityIndecator = document.querySelector('.cartQuantityIndecator');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const PMquantity = document.querySelector('.PMquantity');
const cartItemContainer = document.querySelector('.cartItemContainer');
const titleData = document.querySelector('.titleData');
const priceData = document.querySelector('.priceData');
const quantityData = document.querySelector('.quantityData');
const totalPriceData = document.querySelector('.totalPriceData');
const fullView = document.querySelector('.full-view');
const fullViewImage = document.querySelector('.full-view #productImage');
const closeFullView = document.querySelector('.closeFullView');




/* ******************* CART DATABASE ********************  */
let cartItemData = {
    title: "",
    price: 0,
    quentity: 0,
    totalPrice: 0
}

/* *******************  ********************  */

/* ******************* change the image of productImage by clicking on another option ********************  */

imageArray.forEach((image) => {
    image.addEventListener('click', () => {
        // Get the images list src address on click event
        const selectImage = image.childNodes[0].attributes.src.value;
        productImage.src = selectImage;
        fullViewImage.src = selectImage;
    })
})




cartButton.addEventListener('click', () => {
    displayCart();
})



/* ******************* this function is display the cart frame ********************  */

let cartOff = true;
function displayCart() {
    if (cartOff === true)      // cart show/hide logical condition
    {
        cartframe.style.display = 'block';
        cartframe.style.backgroundColor = '#ffffff';
        cartOff = false;
    }
    else {
        cartframe.style.display = 'none';
        cartOff = true;
    }
    checkCart();    // call function to check cart is empty or not
}


/* ******************* this function is check cart is empty or not ********************  */


function checkCart() {
    if (cartItemData.quentity === 0) {
        cartMessage.style.display = 'block'
    }
    else {
        cartMessage.style.display = 'none';
        displayItemOnCart();
        cartItemContainer.style.display = 'flex';
    }
}


function displayItemOnCart() {
    titleData.innerHTML = cartItemData.title;
    priceData.innerHTML = cartItemData.price;
    quantityData.innerHTML = cartItemData.quentity;
    totalPriceData.innerHTML = cartItemData.totalPrice;
}


/* ******************* this function is indicates the product quantity between plus/minus button  ********************  */

function IncDecQuentityIndicator() {
    PMquantity.innerHTML = cartItemData.quentity;
}

/* ******************* this function is calculate the quantity of item and price ********************  */

function calculate() {

    if (cartItemData.quentity > 0 && cartItemData.quentity < 2) {
        cartItemData.price = 125.00;

        cartItemData.totalPrice = (cartItemData.price * cartItemData.quentity);
    }

    console.log("title: " + cartItemData.tital + " " + "price: " + cartItemData.price + " " + "quantity: " + cartItemData.quentity + " " + "totalPrice: " + cartItemData.totalPrice);    // it indicates the value of database

    indicator();  // call to show the quantity of product in cart
    IncDecQuentityIndicator();  // call to show quantity of product between plus/minus button
    displayItemOnCart();  // to update the cart data
}


/* ******************* this event is call when user click on addtocart button ********************  */

addToCartButton.addEventListener('click', () => {

    if (cartItemData.quentity == 0) // this condition is increment indicator only one time when user click on add to cart
    {
        cartItemData.quentity = cartItemData.quentity + 1;  // increment the quentity of product
        cartItemData.title = 'Fall Limited Edition Sneakers';
        titleData.style.fontSize = '13px';

        calculate();
        addToCartButton.style.backgroundColor = '#FFAC6A';   // this change UI beheavour of addtocart button
        addToCartButton.style.cursor = 'not-allowed';
        checkCart();
    }
    else {
        addToCartButton.style.backgroundColor = 'hsl(26, 100%, 55%)';
        addToCartButton.style.cursor = 'pointer';
    }

})


/* ******************* this function is indicates the cart quantity in orange color ********************  */

function indicator() {
    if (cartItemData.quentity != 0 && cartItemData.quentity > 0) {
        cartQuantityIndecator.innerHTML = cartItemData.quentity;      //this logic increase indicator value by one
        cartQuantityIndecator.style.display = 'flex';
    }
    else {
        cartQuantityIndecator.style.display = 'none';
    }
}


/* ******************* this event occures when user want's to increase the value of  ********************  */

plus.addEventListener('click', () => {

    if (cartItemData.quentity >= 1)    // this logic is define for increment only when product quantity is greaterOrEqualone (>= 1)
    {
        cartItemData.quentity = cartItemData.quentity + 1;
        cartItemData.totalPrice = (cartItemData.price * cartItemData.quentity);
        calculate();
    }
});



/* ******************* this event occures when user want's to increase the value of  ********************  */

minus.addEventListener('click', () => {
    if (cartItemData.quentity > 1) {
        cartItemData.quentity = cartItemData.quentity - 1;
        cartItemData.totalPrice = (cartItemData.price * cartItemData.quentity);
        calculate();
    }
})



/* ******************* this event occures when you click on product Image  ********************  */

productImage.addEventListener('click',()=>{

    fullView.style.display = 'flex';

});



/* ******************* this event occures when you click on closed button of fullview  ********************  */

closeFullView.addEventListener('click', ()=>{
    console.log('closed');
    fullView.style.display = 'none';
})




