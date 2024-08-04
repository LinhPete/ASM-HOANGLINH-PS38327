let index = JSON.parse(localStorage.getItem("prod"));
const cart = JSON.parse(localStorage.getItem('cart'));
console.log(cart);
let nameProd = cart[index].name;
// console.log(nameProd);
let price = cart[index].price;
// console.log(price);
let img = cart[index].images;

const displayName = document.getElementById("detail-name");
const displayPrice = document.getElementById("detail-price");
const displayImg = document.getElementById("displayImg");
const extraImg = document.querySelectorAll("#extra-imgs>img");
const btnToCart = document.getElementById("toCart");

displayName.innerText = nameProd;
displayPrice.innerText = price;
for (let i = 0; i < extraImg.length; i++) {
    extraImg[i].attributes.src.value = img[i];
}
setDetailImg(0);

function setDetailImg(number) {
    displayImg.src = img[number];
}

function addToCart() {
    // Lấy dữ liệu giỏ hàng từ localStorage

    // Thêm sản phẩm mới vào giỏ hàng
    cart[index].quantity ++;

    // Lưu giỏ hàng mới vào localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}