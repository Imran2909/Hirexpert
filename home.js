let val= localStorage.getItem("NAME")
document.querySelector("#name").innerText=val;

let filtr=document.querySelector("#filter")
filtr.addEventListener("change", (res)=>{

res.preventDefault();
localStorage.setItem("CITY" , filtr.value)
console.log(filtr.value)
window.location.assign("Service.html")

})
