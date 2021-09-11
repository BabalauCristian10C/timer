const contact = () =>{
    const name = document.querySelector("#form1-name"),
        message = document.querySelector("#form2-message"),
        email = document.querySelector("#form1-email"),
        number = document.querySelector("#form1-phone"),
        name1 = document.querySelector("#form2-name"),
        email1 = document.querySelector("#form2-email"),
        number1 = document.querySelector("#form2-phone"),
        name2 = document.querySelector("#form3-name"),
        email2 = document.querySelector("#form3-email"),
        number2 = document.querySelector("#form3-phone");

    const checkCyr = (event) =>{
        const target = event.target;
        target.value = target.value.replace(/[^А-Яа-яЁё\s]/gi, "")
        target.value = target.value.replace(/\s{2,10000}/g, " ")
        target.value = target.value.trim();
    }
    
    const checkCyrName = (event) =>{
        const target = event.target;
        target.value = target.value.replace(/[^А-Яа-яЁё\s]/gi, "")
        target.value = target.value.replace(/\s{2,10000}/g, " ")
        target.value = target.value.trim();
        target.value = target.value.replace(/([а-я])?[А-Яа-яЁё]*/g, (match,v) => {
            if(v){
                match = v.toUpperCase() + match.substr(1);    
            }else{
                match = match;
            }
            return match;
        })

        if(target.value){
            if(target.value.length <2){
                if(!target.classList.contains("unactive"))     
                {
                    target.classList.add("unactive");
                }    
            }
            else if (target.value.length > 1){
                if(target.classList.contains("unactive")) 
                {
                    target.classList.remove("unactive")   
                }  
            }
        }
        
    }

    const checkEmail = (event) =>{
        const target = event.target;
        if(target.value.match(/[A-z!._-~*'0-9]+@[A-z.]+/gi)){
            target.value = target.value.replace(/\s/g, "")
            target.value = target.value.trim();
            target.value = target.value.replace(/-{2,10000}/g, "-")
            if(target.classList.contains("unactive")) {
                target.classList.remove("unactive")   
            }
        } else {
            if(!target.classList.contains("unactive"))            {
                target.classList.add("unactive");
            }
            return
        }
    }

    const checkNumber = (event) =>{
        const target = event.target;
        let counter = 0;
        target.value = target.value.replace(/[^0-9()-+]/gi,"")
        target.value = target.value.replace(/(\-){2,10000}/g, "-")
        target.value = target.value.trim();

        for (let v of target.value){
            if(v.match(/[0-9]/i)){
                counter++;
            }
        }
        console.log(counter)
        if(counter===11){
                if(target.classList.contains("unactive")) {
                    target.classList.remove("unactive")
                }
        }else{
            if(!target.classList.contains("unactive")){
                target.classList.add("unactive")   
            }       
        }
    }
    

    name.addEventListener('blur', checkCyrName);
    name1.addEventListener('blur', checkCyrName);
    document.querySelector("#form3-name").addEventListener('blur', checkCyrName);
    message.addEventListener('blur', checkCyr);
    email.addEventListener("blur",checkEmail);
    email1.addEventListener("blur",checkEmail);
    document.querySelector("#form3-email").addEventListener('blur', checkEmail);
    number.addEventListener("blur", checkNumber);
    number1.addEventListener("blur", checkNumber);
    document.querySelector("#form3-phone").addEventListener('blur', checkNumber);
}
export default contact;
