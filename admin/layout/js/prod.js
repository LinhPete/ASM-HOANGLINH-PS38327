class Product {
    constructor(make, image, id, name, price, storage) {
        this.image = image;
        this.id = id;
        this.make = make;
        this.name = name;
        this.price = price;
        this.storage = storage;
    }
}
let prods = [];
const formImg = document.getElementById("formImg");
const formId = document.getElementById("formId");
const formName = document.getElementById("formName");
const formMake = document.getElementById("formMake");
const formPrice = document.getElementById("formPrice");
const formStorage = document.getElementById("formStorage");
const table = document.getElementById("prod-table");
const headers = `
                <tr>
                    <th>Hình sản phẩm</th>
                    <th>Loại sản phẩm</th>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá sản phẩm</th>
                    <th>Số lượng tồn kho</th>
                </tr>
                `;

const form = document.getElementById("product-form");
fillTable();
function openForm() {
    form.classList.add("show");
}
function exitForm() {
    form.classList.remove("show");
}

var curr = -1;

function fillTable() {
    table.innerHTML = headers;
    for (let prod of prods) {
        let row = document.createElement("tr");
        row.innerHTML = `<td><img src="${prod.image}" alt="${prod.name}"></td>
            <td>${prod.make}</td>
            <td>${prod.id}</td>
            <td>${prod.name}</td>
            <td>${prod.price}</td>
            <td>${prod.storage}</td>`;
        row.addEventListener("dblclick", () => {
            curr = prods.indexOf(prod);
            openDetailForm(prod);
        })
        table.appendChild(row);
    }
}

var galery = document.getElementById("galery").classList;
function chonAnh() {
    galery.toggle("show");
}
var prodImgs = document.querySelectorAll("#galery>img");
prodImgs.forEach(img => {
    img.addEventListener("click", () => {
        formImg.src = img.src;
        galery.remove("show");
    });
});

function openDetailForm(prod) {
    formMake.value = prod.make;
    formImg.src = prod.image;
    formImg.alt = prod.name;
    formId.value = prod.id;
    formName.value = prod.name;
    formPrice.value = prod.price;
    formStorage.value = prod.storage;
    openForm();
}

function openNewForm() {
    formMake.value = "";
    formImg.src = "";
    formImg.alt = "";
    formId.value = "";
    formName.value = "";
    formPrice.value = "";
    formStorage.value = "";
    openForm();
}

function insert() {
    let prod = getProd();
    if (prod != undefined) {
        prods.push(prod);
        console.log(prods);
        fillTable();
        exitForm();
    }
}

function update() {
    let prod = getProd();
    if (prod != undefined) {
        prods.splice(curr, 1, prod);
        fillTable();
        exitForm();
    }
}

function remove() {
    prods.splice(curr, 1);
    fillTable();
    exitForm();
}

function getProd() {
    if (checkInput() == true) {
        let id;
        if (formId.value == "") {
            id = "SP0";
            if (prods.length < 9) {
                id = id + '0' + String(prods.length + 1);
            }
            else {
                id = id + String(prods.length + 1);
            }
        }
        else {
            id = formId.value;
        }
        return new Product(formMake.value, formImg.src, id, formName.value, formPrice.value, formStorage.value);
    }
}

function checkInput() {
    if (formMake.value == "") {
        alert("Chưa chọn loại sản phẩm");
        return false;
    }
    if (!String(formImg.src).endsWith(".jpg")&&!String(formImg.src).endsWith(".png")) {
        alert("Chưa chọn ảnh sản phẩm");
        return false;
    }
    if (formName.value == "") {
        alert("Chưa nhập tên sản phẩm");
        return false;
    }
    if (formPrice.value == "") {
        alert("Chưa nhập giá sản phẩm");
        return false;
    }
    if (formStorage.value == "") {
        alert("Chưa nhập số lượng sản phẩm");
        return false;
    }
    return true;
}