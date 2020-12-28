function sum(num1, num2){
    return num1 + num2
}

function diff(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}

function operator(total, inputnumber, operator){
    if (operator === "+" && inputnumber !== ""){
        total = sum(parseInt(inputnumber), parseInt(total))
    }
    if (operator === "-" && inputnumber !== ""){
        total = diff(total, parseInt(inputnumber))
    }
    if (operator === "x" ){
        total = multiply(parseInt(inputnumber), parseInt(total))
    }
    if (operator === "/"){
        total = divide(parseInt(total), parseInt(inputnumber))
    }

    return total

}

let total = 0
let inputnumber=""
let ops = []
let numbers = []
let history = []
let operatormap = ['+', '-', '/', 'x']

numberbutton = document.querySelectorAll(".button")
textfield = document.querySelector(".outputscreen")
textfield.innerText = "0"
operationsOutputTextField = document.querySelector(".outputscreen2")



numberbutton.forEach(button => {
    button.addEventListener('click', function(e){
        inputnumber = inputnumber.concat(e.target.innerText)
        textfield.innerText=inputnumber

    })
});


operatorbutton = document.querySelectorAll(".operator")

operatorbutton.forEach(button => {
    button.addEventListener('click', function(e){
        textfield.innerText=0
        if (inputnumber != ""){

            ops.push(e.target.innerText)
            numbers.push(inputnumber)
            history.push(inputnumber)
            history.push(e.target.innerText)
            operationsOutputTextField.innerText = history.join(" ")
            if (ops.length === 2){
                
                ops[1] = e.target.innerText
                history[history.length-1] = e.target.innerText
                operationsOutputTextField.innerText = history.join(" ")
            }
            if (numbers.length === 2){
                total = operator(numbers[0], numbers[1], ops[0])
                textfield.innerText=total
                numbers.length = 0
                numbers.push(total)
                ops.shift()
            }
            inputnumber = ""

        }else if (operatormap.includes(history[history.length-1])){
            ops[0]= e.target.innerText
            console.log(history)
            history[history.length-1] = e.target.innerText
            operationsOutputTextField.innerText = history.join(" ")
        }
        else if (!(operatormap.includes(history[history.length-1]))){
            history.push(e.target.innerText)
            ops.push(e.target.innerText)
        }

    })
})


equalsbutton = document.querySelector(".equals")

equalsbutton.addEventListener('click', function(e){
    
    if (inputnumber != "" && ops.length != 0){
        numbers.push(inputnumber)
        history.push(inputnumber)
        operationsOutputTextField.innerText = history.join(" ")
    }else if (ops.length === 0 && history.length != 0){
        textfield.innerText = total
        inputnumber=""

    }else if (ops.length === 0){
        textfield.innerText = inputnumber
        inputnumber=""
    }

    if (numbers.length === 2){
        total = operator(numbers[0], numbers[1], ops[0])
        textfield.innerText=total
        operationsOutputTextField.innerText = history.join(" ")
        numbers.length = 0
        numbers.push(total)
        ops.length = 0
        inputnumber=""

    }else if(numbers.length === 1){
        textfield.innerText=numbers[0]
        ops.length = 0
        inputnumber = ""

    }


})

clearbutton = document.querySelector(".clear")

clearbutton.addEventListener('click', function(e){
    numbers.length = 0
    inputnumber = ""
    ops.length = 0
    textfield.innerText = "0"
    operationsOutputTextField.innerText = ""
    history.length= 0 
    total=0

})



