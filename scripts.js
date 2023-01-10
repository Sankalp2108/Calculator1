 let string = "";
 var display = document.querySelector('input')


 display.addEventListener("keypress" , function(event){
    if(event.key === "Enter")
    {
        document.getElementById("blue").click();
    }
 })

function Calculate(number)
{
    string = display.value + number;
    display.value = string ;
}

function Enter()
{
    display.value = eval(display.value);
}

function Clear()
{
    display.value = "";
}