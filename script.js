
'use strict';

window.addEventListener("DOMContentLoaded", function() {
    
    function countTimer(deadline) {
        const timerHours = document.querySelector('#timer-hours'),
              timerMinutes = document.querySelector("#timer-minutes"),
              timerSeconds = document.querySelector("#timer-seconds");

        function getTimeRemaining() {
            let dateStop= new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = ((dateStop - dateNow) / 1000),
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60),
                tempArr = [seconds, minutes, hours];
            tempArr.forEach((item, index) => {
                if(item < 10){
                    tempArr[index] = "0" + item;
                }
            });

            return {
                "seconds":tempArr[0],
                "minutes":tempArr[1],
                "hours":tempArr[2],
                timeRemaining}
        }

        (function updateClock(){
            const timer = getTimeRemaining();

            timerHours.textContent = timer.hours;
            timerSeconds.textContent = timer.seconds;
            timerMinutes.textContent =  timer.minutes;
            if(timer.timeRemaining > 0 ){
                const repeating = setTimeout(updateClock, 1000)
            } else if (timer.timeRemaining <= 0 ){
                timerHours.textContent = "00";
                timerSeconds.textContent = "00";
                timerMinutes.textContent =  "00";
            }
        }());


    }
    countTimer("22 august 2021");

    //это менюшка

    const toggleMenu = () =>{
        const btnMenu = document.querySelector(".menu"),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector(".close-btn"),
            menuItems = menu.querySelectorAll("ul>li"),
            actionMenu = () => {
                menu.classList.toggle('active-menu');
            };
        
        btnMenu.addEventListener('click', ()=>{
            actionMenu();
        });

        closeBtn.addEventListener("click", () => {
            actionMenu();
        });

        menuItems.forEach((item)=>{
            item.addEventListener("click", () => {
                actionMenu();
            })
        })
    };

    toggleMenu();

    // popup
    const testDeviceWidth = () =>{
        if(document.defaultView.innerWidth > 768){
            return true
        } else{
            return false;
        }
    }

    const togglePopUp = () =>{
        const popup = document.querySelector(".popup"),
            popupClose = document.querySelector(".popup-close"),
            popupBtn = document.querySelectorAll('.popup-btn');
        
        popupClose.addEventListener("click", () =>{
            if (testDeviceWidth()){
                let counter = 1;
                const anim = setInterval(()=>{
                if (counter < 0 ){
                    clearInterval(anim);
                    popup.style.display = "none";
                    } else if (counter <= 1){
                        requestAnimationFrame(() => {popup.style.opacity = counter})
                        counter -= 0.01;
                    }
                }, 10)
            } else {
                popup.style.display = "none";
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
                    counter += 0.01;
                    }
                }, 1) 
                } else {
                    popup.style.display = "block";
                }

            })
        })

    };
    togglePopUp();

    const smoothScroll = () =>{
        const linkElements = document.querySelectorAll('a');
        linkElements.forEach(item=>{
            item.addEventListener('click', (element)=>{
                element.preventDefault();
                document.documentElement.scrollTo(0, 0);
                let counter = 0;
                const itemId = item.attributes.href.nodeValue,
                    itemById = document.querySelector(`${itemId}`).offsetTop;
                console.log(itemById);
                 const animate = setInterval(() => {
                     if (counter < itemById/30) {
                         counter = (counter + 1);
                         console.log(counter);
                         requestAnimationFrame(()=>{document.documentElement.scrollTo(0, counter*30);});
                     } else {
                        clearInterval(animate); 
                     }  
                 }, 1);
                element.preventDefault();
            })
        })
    };
    smoothScroll();
})