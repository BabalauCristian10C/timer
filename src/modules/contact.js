const contact = () =>{
    const name = document.querySelector("#form2-name"),
        message = document.querySelector("#form2-message"),
        email = document.querySelector("#form2-email"),
        number = document.querySelector("#form2-phone");

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
            }   
            else{
                match = match;
            }
            return match;
        })

        if(target.value){
            if(target.value.length <=2){
                if(!target.classList.contains("unactive"))     
                {
                    target.classList.add("unactive");
                }    
            }
            else if (target.value.length > 2){
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
        target.value = target.value.replace(/[^0-9()-+]/gi,"")
        target.value = target.value.replace(/(\-){2,10000}/g, "-")
        target.value = target.value.trim();
        if (target.value.length>12){
            target.value = ""
        } else {
            if((target.value.length === 12 && target.value[0] === "+")||(target.value.length === 11 && target.value[0] !== "+")){
                if(target.classList.contains("unactive")) {
                    target.classList.remove("unactive")
                }
                return;
            } else {
                if(!target.classList.contains("unactive")){
                    target.classList.add("unactive")   
                }       
                return;
            }
        }
    }

    name.addEventListener('blur', checkCyrName);
    document.querySelector(".form-name").addEventListener('blur', checkCyrName);
    message.addEventListener('blur', checkCyr);
    email.addEventListener("blur",checkEmail);
    document.querySelector(".form-email").addEventListener('blur', checkEmail);
    number.addEventListener("blur", checkNumber);
    document.querySelector(".form-phone").addEventListener('blur', checkNumber);
}
export default contact;
