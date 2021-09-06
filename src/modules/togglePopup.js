const togglePopUp = () =>{
    const testDeviceWidth = () =>{
            if(document.defaultView.innerWidth > 768){
                return true
            } else{
                return false;
            }
        }

    const popup = document.querySelector(".popup"),
        popupClose = document.querySelector(".popup-close"),
        popupBtn = document.querySelectorAll('.popup-btn');
    
    popupClose.addEventListener("click", () => {
        
        if (testDeviceWidth()){
            let counter = 1;
            const anim = setInterval(()=>{
            if (counter < 0 ){
                clearInterval(anim);
                popup.style.display = "none";
                } else if (counter <= 1){
                    requestAnimationFrame(() => {popup.style.opacity = counter})
                    counter -= 0.1;
                }
            }, 1)
        } else {
            popup.style.display = "none";
        }
    })

    popup.addEventListener('click', (event) =>{
        let target = event.target;

        if (!target.closest('.popup-content')){

            if (testDeviceWidth()){
                let counter = 1;
                const anim = setInterval(()=>{
                if (counter < 0 ){
                    clearInterval(anim);
                    popup.style.display = "none";
                    } else if (counter <= 1){
                        requestAnimationFrame(() => {popup.style.opacity = counter})
                        counter -= 0.1;
                    }
                }, 1)
            } else {
                popup.style.display = "none";
            }   
        }
    })

    popupBtn.forEach((item)=>{
        item.addEventListener("click", () => {
            if (testDeviceWidth()){
                let counter = 0;
                popup.style.display = "block"; 
                popup.style.opacity = "0";
                const anim = setInterval(()=>{
                if (counter > 1){
                    clearInterval(anim);
                } else if (counter <= 1){
                    requestAnimationFrame(() => {popup.style.opacity = counter})
                counter += 0.1;
                }
            }, 1) 
            } else {
                popup.style.display = "block";
            }
        })
    })

};
export default togglePopUp;