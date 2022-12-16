let val = localStorage.getItem("NAME")
document.querySelector("#name").innerText = val;

let val1 = localStorage.getItem("CITY")
document.querySelector("#city").innerText = val1;
document.querySelector("#city1").innerText = val1;


// document.querySelector("#adr").addEventListener("click", () => {

// })

document.querySelector("#imges").addEventListener("click" , ()=>{
    window.location.assign("cart.html")
})