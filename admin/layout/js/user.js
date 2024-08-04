let currUser = JSON.parse(localStorage.getItem('currUser')) || null;
setCurrUser();

function setCurrUser(){
    if(currUser!=null){
        const displayLogin = document.querySelectorAll(".nav-right>ul");
        displayLogin.innerHTML = `
            <li style="height:100%; align-content:center; padding:5px">Xin chào ${currUser.name.toUpperCase()} !!!</li>
            <li><a onclick="logOut()" style="cursor: pointer;">Đăng xuất</a></li>
        `;
    }
}

function logOut(){
    currUser = null;
    localStorage.removeItem('currUser');
    window.location.reload();
}