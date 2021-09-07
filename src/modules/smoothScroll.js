const smoothScroll = () =>{
    const a = document.querySelectorAll('a');
    a.forEach(item=>{
        if (item.href === "http://localhost:8888/timer/#service-block") {
            item.addEventListener("click", (e)=>{
                e.preventDefault()
                window.screenTop = 100;
            })
        }
    })
}

export default smoothScroll;