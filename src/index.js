
    import countTimer from './modules/countTimer'  
    import toggleMenu from './modules/toggleMenu' 
    import togglePopUp from './modules/togglePopUp' 
    import tabs from './modules/tabs' 
    import slider from './modules/slider' 
    import ourteam from './modules/ourteam' 
    import calculator from './modules/calculator'
    import contact from './modules/contact' 
    import sendForm from './modules/sendForm'  
    import smoothScroll from './modules/smoothScroll'

    window.addEventListener("DOMContentLoaded", ()=>{
        countTimer("12 september 2021");

        toggleMenu();

        togglePopUp();

        smoothScroll();
        
        tabs();

        slider();

        ourteam();

        calculator(100);

        contact();

        sendForm("form1");
        sendForm("form2");
        sendForm("form3");  
    })
        

