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

export default slider;