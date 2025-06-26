console.log(3)


let buttons = document.querySelectorAll(".btn")
let result = document.getElementById('result')
// let answer = Infinity;
// let list;

buttons.forEach(btn => {
    btn.onclick = ()=> {
        let value = btn.textContent;

        if (result.textContent === "Result") {
            result.textContent = " ";
        }

        if (value === "=") {
            result.textContent = eval(result.textContent);
            
        }
        else if (value === 'C') {
            result.textContent = "Result";
        }
        else if (value === 'del') {
            if (result.textContent.length === 1) {
                result.textContent = "Result";
            }
            else {
                result.textContent = result.textContent.slice(0, -1);     // to del the last char 
            }
        }
        // else if(value === '')
        // else if (value.textContent === 'x2') {
        //     let res = "";
        //     for (i = result.textContent.length; i >= 0 ; i-- ){
        //         if (result.textContent[i] == Number) {
                    
        //         }
        //     }

        // }
        else {
            result.textContent += value;
        }

        console.log(result.textContent);
    }
})


