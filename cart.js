let image = [];
image[0] = "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_640,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1669296955691-063ac5.jpeg";
image[1] = "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_640,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1653033997914-7727d4.jpeg";

let img = document.createElement("img")

let i = 0;
setInterval(() => {
    img.src = image[i];
    document.querySelector("#rit").append(img);
    i++;
    if (i == 2) {
        i = 0;
    }
}, 2000)


document.querySelector("#sec2>button").addEventListener("click", ()=>{
    // alert("OK")
    document.querySelector("#total>button").style.display="block";
    document.querySelector("#total>h1").style.display="block";
    document.querySelector("#sec2>button").innerText="Added";

})

document.querySelector("#total>button").addEventListener("click" , ()=>{
    window.location.assign("Payment.html")

})