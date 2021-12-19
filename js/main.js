const UserName = "Elbek";
const UserPass = "12345";

let input = document.querySelector(".UserPass")
let iOne = document.querySelector(".iOne")
let iTwo = document.querySelector(".iTwo")


function btn() {
    let user = document.querySelector(".UserName").value;
    let pass = document.querySelector(".UserPass").value;


    if (user === UserName && pass === UserPass) {
        alert("Siz profilga muvaqqiyatli kirdingiz !")
    }

    else {
        alert("Login yoki parol xato !")
    }
}


function eye() {
    let atr = input.getAttribute("type")
    if(atr === "text"){
        input.setAttribute("type", "password")
    }else{
        input.setAttribute("type", "text")
    }

    iOne.classList.toggle("toggle")
    iTwo.classList.toggle("toggle")
}