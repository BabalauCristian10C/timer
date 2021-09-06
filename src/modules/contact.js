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
                return v.toUpperCase() + match.substr(1);
            } else {
                return match;
            }
            
        })
    }

    const checkEmail = (event) =>{
        const target = event.target;
        target.value = target.value.replace(/[^A-z!@._-~*'0-9]/gi, "")
        target.value = target.value.replace(/\s/g, "")
        target.value = target.value.trim();
        target.value = target.value.replace(/-{2,10000}/g, "-")

    }
    const checkNumber = (event) =>{
        const target = event.target;
        target.value = target.value.replace(/[^0-9()-+]/gi,"")
        target.value = target.value.replace(/(\-){2,10000}/g, "-")
        target.value = target.value.trim();
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