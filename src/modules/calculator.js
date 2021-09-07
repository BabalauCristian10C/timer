const calculator = (price = 100)=>{
    const inputs = document.querySelectorAll(".calc-item"),
        calcBlock = document.querySelector(".calc-block"),
        calcType = document.querySelector(".calc-type"),
        calcSquare = document.querySelector(".calc-square"),
        calcDay = document.querySelector(".calc-day"),
        calcCount = document.querySelector(".calc-count"),
        totalValue = document.getElementById("total");
    

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
    const clearForm = () =>{
        inputs.forEach(item =>{
            item.value = ""
        })  
    }

    calcBlock.addEventListener('change', (event) => {
        const target = event.target;
        if(target.matches('.calc-type') ||target.matches('.calc-square') 
        ||target.matches('.calc-day') ||target.matches('.calc-count')){
            if(!calcType.value) {
                clearForm()
            }
            countSum();
        }
    })
    
};

export default calculator;