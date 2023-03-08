const colorFilter = () => {
    const randomNumber = Math.floor(Math.random()* 16999215)
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;


    document.getElementById("color").innerText = randomCode;
}

document.getElementById("butn").addEventListener("click",colorFilter);

colorFilter();