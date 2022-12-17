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
    document.querySelector("#total>button").style.display="block";
    document.querySelector("#total>h1").style.display="block";
    document.querySelector("#sec2>button").innerText="Added";

})

document.querySelector("#total>button").addEventListener("click" , ()=>{
    window.location.assign("Payment.html")

})









let data = JSON.parse(localStorage.getItem("set"));
// console.log(data)

let pdiv = document.createElement("div");
pdiv.setAttribute("class", "sec");


let sec1 = document.createElement("div");
sec1.setAttribute("class", "sec1")

let secp=document.createElement("p");
secp.setAttribute("id" , "secp");
secp.innerText=data.name;

let str=document.createElement("div");
str.setAttribute("id" , "str");

let rate=document.createElement("img");
rate.setAttribute("id" , "rate");
rate.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQft8rN1GQlKlwsvzM39TZ4P4kpLSer3V01uQ&usqp=CAU";

let strep=document.createElement("p");
strep.setAttribute("id" , "strep");
strep.innerText=data.rate;


let price=document.createElement("div");
price.setAttribute("id" , "price");

let rupee=document.createElement("p");
rupee.setAttribute("id" , "rupee");
rupee.innerText= "₹"+data.valu;

let dot=document.createElement("span");
dot.setAttribute("id" , "dot");

let strep1=document.createElement("p");
strep1.setAttribute("id" , "strep");
strep1.innerText=data.time;

let tag=document.createElement("div")
tag.setAttribute("id" , "tag");

let ss=document.createElement("img");
ss.src="https://www.shutterstock.com/image-vector/price-tag-icon-vector-illustration-600w-1705412608.jpg";


let strep2=document.createElement("p");
strep2.setAttribute("id" , "strep");
strep2.innerText=data.offr;

let hr=document.createElement("hr");
hr.setAttribute("id" , "lin")


let strep3=document.createElement("p");
strep3.setAttribute("id" , "strep");
strep3.innerText=data.work;

let view=document.createElement("p");
view.setAttribute("id" , "view");
view.innerText="View details";

let sec2=document.createElement("div");
sec2.setAttribute("id" , "sec2");

let imgj=document.createElement("img");
imgj.src=data.imgl;

let butn=document.createElement("button");
butn.innerText="Add"


str.append(rate,strep);
price.append(rupee,dot,strep1);
tag.append(ss,strep2);
sec1.append(secp.str,price,tag,hr,strep3,view);
sec2.append(imgj,butn);
sec.append(sec1,sec2);

