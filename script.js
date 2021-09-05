
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
    countTimer("24 august 2021");

    //это менюшка

    const toggleMenu = () =>{
        const btnMenu = document.querySelector(".menu"),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector(".close-btn"),
            menuItems = menu.querySelectorAll("ul>li");
        const actionMenu = () => {
                    menu.classList.toggle('active-menu');
                },
                test = () => {
                    if(menu.classList.contains('active-menu')) {
                        return true;
                    } else {
                        return false;
                    }
                }
        
        document.addEventListener("click", e =>{
            const target = e.target;
            if (target.closest(".menu") ||target.matches(".close-btn") || target.closest("ul>li>a")){
                actionMenu();
            } else if (test() && !(target.closest("menu"))){
                actionMenu();
            }
            
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
    togglePopUp();
    // плавный переход
    const smoothScroll = () =>{
        const linkElements = document.querySelectorAll('a');
        linkElements.forEach(item=>{
            if (!item.classList.contains("close-btn")){
                item.addEventListener('click', (element)=>{
                element.preventDefault();
                document.documentElement.scrollTo(0, 0);
                let counter = 0;
                const itemId = item.attributes.href.nodeValue,
                    itemById = document.querySelector(`${itemId}`).offsetTop;
                 const animate = setInterval(() => {
                     if (counter < itemById/30) {
                         counter = (counter + 1);
                         requestAnimationFrame(()=>{document.documentElement.scrollTo(0, counter*30);});
                     } else {
                        clearInterval(animate); 
                     }  
                 }, 1);
                element.preventDefault();
            })
            } else {
                item.addEventListener('click', (e)=>{
                    e.preventDefault();
                })
            }

        })
    };

    //  табы
    const tabs = () =>{
        const tabHeader = document.querySelector(".service-header"),
            tab = tabHeader.querySelectorAll(".service-header-tab"),
            tabContent = document.querySelectorAll(".service-tab");
        const toggleTabContent = (index) =>{
            for(let i = 0; i < tabContent.length; i++){
                if (index === i){
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        }
        tabHeader.addEventListener('click', (event) =>{
            let target = event.target;
                target = target.closest(".service-header-tab"); 
                if (target.classList.contains("service-header-tab")){
                    tab.forEach((item, index) =>{
                        if (item === target){
                            toggleTabContent(index);
                        }
                    })
                    
                }
        })
    };
    tabs();

    const slider = () => {
        const slide = document.querySelectorAll(".portfolio-item"),
            btn = document.querySelectorAll('.portfolio-btn'),
            slider = document.querySelector('.portfolio-content'),
            dotBox = document.querySelector('.portfolio-dots'),
            dotText = document.createElement('li');
        dotText.classList.add("dot");
        for (let i = 0; i < slide.length; i++){
            const dotCopy = dotText.cloneNode()
            if(i === 0){
                dotCopy.classList.add("dot-active")
                dotBox.append(dotCopy);  
            }else {
                dotBox.append(dotCopy);  
              }
        }
        const dot = document.querySelectorAll('.dot')
        let currentSlide = 0,
            interval;

        const prevSlide = (elem, index, str) =>{
            elem[index].classList.remove(str);
        };
        const nextSlide = (elem, index, str) =>{
            elem[index].classList.add(str);
        };
        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length){
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active')
            nextSlide(dot, currentSlide, 'dot-active')
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;

            if (target.matches('.next, .prev, .dot')){
                prevSlide(slide, currentSlide, 'portfolio-item-active');
                prevSlide(dot, currentSlide, 'dot-active');
                if(target.matches(".next")){
                    currentSlide++;
                } else if(target.matches(".prev")){
                    currentSlide--;
                } else if (target.matches('.dot')) {
                    dot.forEach((elem, index) => {
                        if (elem === target){
                            currentSlide = index;
                        }
                    })
                }
                if (currentSlide >= slide.length){
                    currentSlide = 0;
                } else if (currentSlide< 0){
                    currentSlide = slide.length - 1;
                }
                nextSlide(slide, currentSlide, 'portfolio-item-active')
                nextSlide(dot, currentSlide, 'dot-active')   
            } else {
                return;
            }
            
        })
        slider.addEventListener('mouseover', (event)=>{
            if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')){
                stopSlide();
            }
        })

        slider.addEventListener('mouseout', (event)=>{
            if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')){
                startSlide();
            }
        })

        startSlide(2000);

    };

    slider();

    const ourteam = () =>{
        const container = document.querySelector(".command"),
            teamMember = container.querySelectorAll('.command__photo');
        let arr = new Array();
        teamMember.forEach(member =>{
            member.addEventListener('mouseenter', (e)=>{
                const target = e.target,
                    img = target.src,
                    dimg= target.dataset.img;
                    arr = [img, dimg];
                target.src = arr[1];
                target.dataset.img = arr[0];  
            })
            member.addEventListener('mouseleave', (e)=>{
                const target = e.target,
                    img = target.src,
                    dimg= target.dataset.img;
                    arr = [img, dimg];
                target.src = arr[1];
                target.dataset.img = arr[0];
            })
        })
    };
    ourteam()
// проверка на ввод

    const calculator = (price = 100)=>{
        const inputs = document.querySelectorAll(".calc-item"),
            calcBlock = document.querySelector(".calc-block"),
            calcType = document.querySelector(".calc-type"),
            calcSquare = document.querySelector(".calc-square"),
            calcDay = document.querySelector(".calc-day"),
            calcCount = document.querySelector(".calc-count"),
            totalValue = document.getElementById("total");
        

        // const adder = (insert) =>{
        //     const funcM = function(){
        //         let indCount=0,
        //             tV = totalValue.textContent
        //             duration = insert/1000;
        //         let increment = 1,
        //             step = Math.abs(Math.floor(duration*insert)),
        //             incrementer = setInterval(()=>{
        //                 indCount+=increment;
        //                 tV = indCount
        //                 if(indCount === insert){
        //                     clearInterval(incrementer);
        //                 }
        //             }, step)
        //     }
        //     funcM()
        // }

        const countSum = () =>{
            let total = 0,
                countValue = 1,
                dayValue = 1,
                typeValue = +calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;
            totalValue.textContent = 0;
            if (calcCount.value > 1){
                countValue += (calcCount.value - 1) /10
            }
            
            if ( calcCount.value && calcDay.value < 5){
                dayValue *= 2;
            } else if(calcCount.value &&calcDay<10){
                dayValue *= 1.5;
            }

            if (typeValue && squareValue){
                total = price * typeValue * squareValue * countValue * dayValue;
            }
            
            totalValue.textContent = Math.ceil(total) 
        }
        
        inputs.forEach(item =>{
            item.addEventListener("input", (e) =>{
                const target = e.target;
                target.value = target.value.replace(/[^0-9]/, "")
            })
            
        })

        calcBlock.addEventListener('change', (event) => {
            const target = event.target;
            if(target.matches('.calc-type') ||target.matches('.calc-square') 
            ||target.matches('.calc-day') ||target.matches('.calc-count')){
                countSum();
            }
        })
        
    };

    calculator(100);

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
    contact();

    //cleaner

    const clearInput = (item) =>{
        const inputs = item.querySelectorAll('input');
        inputs.forEach((item)=>{
            item.value =""
        })
    }
    //contact send
    const sendServer = (data) =>{
        return fetch('server.php', {
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(data)
        });    
    }
    const sendForm = (elem) => {
        const form = document.getElementById(elem);
        const statusMessage = document.createElement("div");
        statusMessage.style.cssText = "font-size:2em;";

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent = 'Loading...';                const formData = new FormData(form);
            let body = {};
            for (let v of formData.entries()){
                body[v[0]] = v[1]
            }
            sendServer(body).then((response)=>{
                if (response.status !== 200){
                    throw new Error("Couldn't send any data")
                }
                clearInput(form)
                statusMessage.textContent = "Completed";
                setTimeout(()=>{
                    statusMessage.remove()
                },1000);
            });   
        })
    }

    const setter = (field) =>{
        field.textContent = "Completed";
        setTimeout(()=>{
            field.remove()
        },1000)
    } 

    //const req1 = sendForm("form1"),
    //      req2 = sendForm("form2");
    
    sendForm("form1")
    sendForm("form2")
})
