document.querySelector("form").addEventListener("submit" , fun)
let arr= JSON.parse(localStorage.getItem("Data")) || [];  
function fun(eve){      
let ftrs=document.querySelector("#fist").value;
let last=document.querySelector("#last").value;
let emel=document.querySelector("#mail").value;
let usre=document.querySelector("#user").value;
let pswd=document.querySelector("#pass").value;
let cfpw=document.querySelector("#cpass").value;
let ckbx=document.querySelector("#chb").value;
let obj={
    fir:ftrs,
    las:last,
    eml:emel,
    usr:usre,
    pas:pswd,
    cpw:cfpw,
    ckb:ckbx,
}
    let count=0;
for(let x in obj){
    if(obj[x]!==""){
        count++;
    }
}
if(count!==7){
    alert("Please fill all the data !!!");
     eve.preventDefault();
}
else if(count==7){
    arr.push(obj);
    localStorage.setItem("Data" , JSON.stringify(arr)); 
}      
}