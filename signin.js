
    document.querySelector("form").addEventListener("submit", login);
    function login(pre) {
        // pre.preventDefault()
        let count = 0;
        let usrr = document.querySelector("#usrnm").value;
        let pwrd = document.querySelector("#psswrd").value;
        localStorage.setItem("NAME", usrr)
        // console.log(usrr)
        let alldata = JSON.parse(localStorage.getItem("Data")) || [];
        console.log(alldata);
        alldata.forEach((elem) => {
            if (usrr == elem.usr && pwrd == elem.pas) {
                count++
            }
        });
        if (count == 0) {
            alert("Incorrect Username or Password");
            pre.preventDefault();
        }
    }


    document.querySelector("#alreadyl").addEventListener("click", (reso) => {
        reso.preventDefault();

        let usra = document.querySelector("#usrnm").value;
        if (usra == "") {
            alert("Please enter the Username")
        }
        else if (usra !== "") {
            let Data = JSON.parse(localStorage.getItem("Data"))
            let val = "";
            console.log(Data)
            for (let i = 0; i < Data.length; i++) {
                if (Data[i].usr === usra) {
                    val = Data[i].pas;
                    alert("Your Password is :- " + val)
                    return;
                }
            }
            val = "Incorrect Username "
            // console.log(val)

            alert(val)




        }

    })
