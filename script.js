const present = document.getElementsByClassName("present");
const increase = document.getElementsByClassName("increase");
const decrease = document.getElementsByClassName("decrease");
const reset = document.getElementsByClassName("reset");
const up = document.getElementsByClassName("up");
const down = document.getElementsByClassName("down");
const stopp = document.getElementsByClassName("stop"); 
const dSpeed = document.querySelector(".down-speed");
const uSpeed = document.querySelector(".up-speed");

function changeValue(n)
{
    if (n==0)
    {
        present[0].innerHTML = 0;
        return;
    }
    let val = parseInt(present[0].innerHTML);
    val += n;
    present[0].innerHTML = val;
}

increase[0].addEventListener('click', () => 
{
    changeValue(1);
})
decrease[0].addEventListener('click', () => 
{
    changeValue(-1);
})
reset[0].addEventListener('click', () => 
{

    changeValue(0);
})

let uCheck = false;
let dCheck = false;
let uVal = parseInt(uSpeed.innerHTML);
let dVal = parseInt(dSpeed.innerHTML);

down[0].addEventListener('click',async () => {
    uCheck = false;
    dCheck = true;
    uVal = 0;
    dVal += 1;
    uSpeed.innerHTML = uVal;
    dSpeed.innerHTML = dVal;
    while( dCheck )
    {
        await new Promise(resolve => setTimeout(resolve,1000));
        changeValue(-1);
    }
})
up[0].addEventListener('click',async () => {
    uCheck = true;
    dCheck = false;
    dVal = 0;
    uVal += 1;
    uSpeed.innerHTML = uVal;
    dSpeed.innerHTML = dVal;
    while(uCheck)
    {
        await new Promise(resolve => setTimeout(resolve,1000));
        changeValue(1);
    }
})
stopp[0].addEventListener('click', () => {
    uCheck = false;
    dCheck = false;
    uVal = 0;
    dVal = 0;
    uSpeed.innerHTML = uVal;
    dSpeed.innerHTML = dVal;
})
