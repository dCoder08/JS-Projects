
let num=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
let currentColour="";

function generateRandomHex()
{
    let colour='#';
    for(let i=0;i<6;i++)
    {
        colour+=num[Math.floor(Math.random()*num.length)];
    }
   currentColour=colour;
   
    document.getElementById("colorBlock").style.backgroundColor=colour;
    document.querySelector("h3").innerHTML=`Hex Value: ${colour}`;
return colour;
}


generateRandomHex();

let button=document.querySelector("button");
button.addEventListener("click",()=>{
    generateRandomHex();
    
});

let cpybtn=document.getElementById("copy-btn");
cpybtn.addEventListener('click',()=>{
    navigator.clipboard.writeText(currentColour);
    cpybtn.innerText="! copied";
    setTimeout(() => {
        cpybtn.innerText="Copy hex";
    }, 555);
})


document.addEventListener('keydown',(e)=>{

    if(e.code=='Space')
    {
        generateRandomHex();
    }
});