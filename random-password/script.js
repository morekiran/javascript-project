let inputEl = document.getElementById("input")

let butnEl = document.querySelector(".butn")

butnEl.addEventListener("click",() =>{
    createPassword()
})

function createPassword() {

    let charecters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*?ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let passwordLength = 12

    let password = "";

    for ( let i = 0; i < passwordLength; i++) {

        let randomNumber = Math.floor(Math.random()* charecters.length)

        console.log(charecters);
        password = password + charecters.substring(randomNumber,randomNumber + 1)
    }

    inputEl.value = password
    navigator.clipboard.writeText(password)
}


