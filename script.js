var display = document.getElementById('display')
var displayNum = ""
var storedNum = ""
var op = ""

//STEP 1: GRAB DISPLAY
//STEP 2: DECLARE VARIABLES (we can always add more later)
//STEP 3: WRITE PRESS FUNCTION (think about what we want to show the user)
//STEP 4: WRITE CLR FUNCTION (this is like a reset)
//STEP 5: WRITE OP FUNCTION
//STEP 6: WRITE CALCULATE FUNCTION

function press(num){
    displayNum += num
    display.innerText = displayNum
}

function clr(){
    display.innerText = 0
    displayNum = ""
    storedNum = ""
    operation.innerText = 'Awaiting Operation'
}

function setOP(operator){
    storedNum = displayNum
    op = operator
    displayNum = ""
    operation.innerText = `You pressed the ${op} Operator | storedNum: ${storedNum}`
}

function calculate(){
    var storedResult = parseFloat(storedNum)
    var displayedResult = parseFloat(displayNum)
    var result
    // if(op == '/'){
    //     result = storedResult / displayedResult
    // }else if(op == '*'){
    //     result = storedResult * displayedResult
    // }else if(op == '-'){
    //     result = storedResult - displayedResult
    // }else if(op == '+'){
    //     result = storedResult + displayedResult
    // }
    op == '/' ? result = storedResult / displayedResult : null
    op == '*' ? result = storedResult * displayedResult : null
    op == '-' ? result = storedResult - displayedResult : null
    op == '+' ? result = storedResult + displayedResult : null
    display.innerText = result
    result ? operation.innerText = 'Congratulations, Your Calculator Works!' : null
}