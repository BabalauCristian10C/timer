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
export default toggleMenu;