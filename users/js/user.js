class User{
    static admin = 0;
    static employee = 1;
    static customer = 2;
    constructor(id, pass, name, email, number, role){
        this.id = id;
        this.pass = pass;
        this.name = name;
        this. email = email;
        this.number = number;
        this.role = role;
    }
}

let users = JSON.parse(localStorage.getItem("users")) || [];

// localStorage.setItem('users',JSON.stringify([
//     new User("admin","1234","admin","admin@admin.com","0987654321",0),
//     new User("emp","1234","emp","emp@emp.com","0987654321",1)
// ]));
if(users.length==0){
    users.push(new User("admin","1234","admin","admin@admin.com","0987654321",0));
    users.push(new User("emp","1234","emp","emp@emp.com","0987654321",1));
    localStorage.setItem("users", JSON.stringify(users));
}
let currUser = JSON.parse(localStorage.getItem('currUser')) || null;
setCurrUser();

function login(){
    const username = document.getElementById("id-name");
    const password = document.getElementById("password");
    let users = JSON.parse(localStorage.getItem('users'));
    for(let user of users){
        if(user.id==username.value){
            if(user.pass==password.value){
                currUser = user;
                localStorage.setItem('currUser',JSON.stringify(currUser));
                if(currUser.role!=2){
                    alert("Bạn đang đăng nhập vào trang quản trị !!!");
                    window.open("http://127.0.0.1:5500/admin/index.html","_self");
                }else{
                    alert("Đăng nhập thành công");
                    window.open("../view/home.html","_self");
                }
                return;
            }
            else{
                alert("Mật khẩu không đúng !!");
                return;
            }
        }
    }
    alert("Không tìm thấy tài khoản");
}

function register(){
    const username = document.getElementById("id-name");
    const password = document.getElementById("password");
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const number = document.getElementById("number");
    let newUser = new User(username.value,password.value,fullName.value,email.value,number.value,2);
    users.push(newUser);
    localStorage.setItem('users',JSON.stringify(users));
    alert("Đăng ký thành công, mời đăng nhập lại!!");
    window.open("../view/signIn.html","_self");
}

function setCurrUser(){
    if(currUser!=null){
        const displayLogin = document.querySelectorAll("ul.right-nav>li");
        displayLogin[0].innerText = `Xin chào ${currUser.name.toUpperCase()} !!!`;
        displayLogin[0].style.height = "100%";
        displayLogin[0].style.alignContent = "center";
        displayLogin[0].style.padding = "5px";
        displayLogin[1].innerHTML = `<a onclick="logOut()">Đăng xuất</a>`;
        displayLogin[1].style.cursor = "pointer";
    }
}

function logOut(){
    currUser = null;
    localStorage.removeItem('currUser');
    window.location.reload();
}