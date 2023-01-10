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

function backSpace()
{
    display.value = display.value.substring(0,display.value.length-1);
}

function pow2()
{
    display.value = Math.pow(display.value,2);
}

function pow3()
{
    display.value = Math.pow(display.value,3);
}

function Sin()
{
    display.value = Math.sin(display.value);
}

function Cos()
{
    display.value = Math.cos(display.value);
}

function Tan()
{
    display.value = Math.tan(display.value);
}
function ln()
{
    display.value = Math.log(display.value);
}

function Fact()
{
    var fact = 1;
    for(var i = 1 ; i <= display.value ; i++)
    {
        fact *= i;
    }
    display.value = fact;
}

