const displayCart = document.getElementById("cart");
var cart = JSON.parse(localStorage.getItem('cart'));
const displaySum = document.querySelector("h1.checkOut>span");
fillCart();
getSum();
function fillCart() {
    displayCart.innerHTML = "";
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].quantity > 0) {
            let toCart = document.createElement("div");
            toCart.classList.add("cart-container");
            toCart.innerHTML = `
                <img src="${cart[i].images[0]}" alt="${cart[i].name}">
                <div class="name">${cart[i].name}</div>
                <div class="price">${cart[i].price}</div>
                <div class="amountControll">
                    <button onclick="minus('amt${i}')">-</button>
                    <input type="number" min="1" step="1" value="${cart[i].quantity}" id="amt${i}">
                    <button onclick="plus('amt${i}')">+</button>
                    <button onclick="remove(${i})">Xóa</button>
                </div>
            `;
            displayCart.appendChild(toCart);
        }
    }
}
function minus(id) {
    const quantity = document.getElementById(id);
    if (Number(quantity.value) > 1) {
        quantity.value = Number(quantity.value) - 1;
    }
    getSum();
}

function plus(id) {
    const quantity = document.getElementById(id);
    quantity.value = Number(quantity.value) + 1;
    getSum();
}

function remove(index) {
    cart.splice(index, 1);
    fillCart();
    localStorage.setItem('cart', JSON.stringify(cart));
    getSum();
}

function getSum() {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        cart[i].quantity = Number(document.getElementById(`amt${i}`).value);
        sum = sum + cart[i].price * cart[i].quantity;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displaySum.textContent = sum;
}