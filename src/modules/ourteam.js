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
export default ourteam;