function saveData()
        {
            let formelement= document.getElementById("profileForm");
            let formdata=new FormData(formelement);
            for(let key of formdata.keys()){
                localStorage.setItem(key,formdata.get(key));
            }
        }
function displayData()
        {
            let formelement= document.getElementById("profileForm");
            let x=document.getElementById("display");
            let formdata=new FormData(formelement);
            for(let key of formdata.keys()){
                let a=localStorage.getItem(key);
                x.innerHTML=x.innerHTML +" "+ key + " : "+ a+"<br>";
            }
        }
