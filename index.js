const bulb=document.getElementById("light");
const input=document.getElementById("clickMe").addEventListener("click",function(){
    if(bulb.src.match("images/off.gif")){
        bulb.src="images/on.gif";
    } else {
        bulb.src="images/off.gif";
    }
});