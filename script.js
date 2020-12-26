function display(obj){
    var screen = document.getElementById("screen");
    var operation = obj.innerHTML;
    
    if (operation == "="){
        screen.innerHTML = eval(screen.innerHTML);
        //Calculate
    }
    else if (operation == "ce"){
        screen.innerHTML = "0";
        // Clear the screen
    }
    else if (screen.innerHTML == "0"){
        screen.innerHTML = operation;
    }
    else {
        screen.innerHTML += operation;
        // Add numbers/operands to screen
    }
}