class Prod{
    constructor(name, price, images, quantity){
        this.name = name;
        this.price = price;
        this.images = images;
        this.quantity = quantity;
    }
}

const prods = [
    new Prod("Iphone-15-plus",100,["../img/products/prod0/prod0.jpg","../img/products/prod0/prod1.jpg","../img/products/prod0/prod2.jpg","../img/products/prod0/prod3.jpg","../img/products/prod0/prod4.jpg"],0),
    new Prod("IPhone-15-pro-Max",100,["../img/products/prod1/prod0.jpg","../img/products/prod1/prod1.jpg","../img/products/prod1/prod2.jpg","../img/products/prod1/prod3.jpg","../img/products/prod1/prod4.jpg"],0),
    new Prod("Galaxy-s23-ultra",100,["../img/products/prod2/prod0.jpg","../img/products/prod2/prod1.jpg","../img/products/prod2/prod2.jpg","../img/products/prod2/prod3.jpg","../img/products/prod2/prod4.jpg"],0),
    new Prod("Galaxy-s24-ultra",100,["../img/products/prod3/prod0.jpg","../img/products/prod3/prod1.jpg","../img/products/prod3/prod2.jpg","../img/products/prod3/prod3.jpg","../img/products/prod3/prod4.jpg"],0),
    new Prod("Redmi-Note-12-Pro",100,["../img/products/prod4/prod0.jpg","../img/products/prod4/prod1.jpg","../img/products/prod4/prod2.jpg","../img/products/prod4/prod3.jpg","../img/products/prod4/prod4.jpg"],0),
    new Prod("Redmi-note-13",100,["../img/products/prod5/prod0.jpg","../img/products/prod5/prod1.jpg","../img/products/prod5/prod2.jpg","../img/products/prod5/prod3.jpg","../img/products/prod5/prod4.jpg"],0),
];
localStorage.setItem('cart', JSON.stringify(prods));


function openDetail(number){
    // let name = prods[number].name;
    // let price = prods[number].price;
    // let img = prods[number].images;
    localStorage.setItem('prod', number);
    // localStorage.setItem('price', price);
    // localStorage.setItem('img', img);
}