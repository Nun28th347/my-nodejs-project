/* document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
    alert("I got clicked");
}
 */

/* document.getElementsByClassName("drum").addEventListener("click",function(){

}); */

/* 
document.getElementsByClassName("btn").addEventListener("click",function(){
    
    let r = document.getElementsByClassName("input").value;

    document.getElementsByClassName("area").innnerHTML = r*r*3.1459;
}); */



/* var numberOfDrum = document.querySelectorAll(".drum").length;

for(var i = 0;i<numberOfDrum;i++)
    
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        alert("Clicked"+document.querySelectorAll(".w"));
    });
     */
        
    


// Define the number of buttons you have
/* var n = document.querySelectorAll(".drum").length;

for (let i = 0; i < n; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        // Make sure to use the same index for both button and drum
        var b = document.querySelectorAll(".drum")[i].innerHTML;
        alert("Clicked " + b);
    });
} */



/* var numberOfDrum = document.querySelectorAll(".drum").length;
for (let i = 0; i < n; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var au = new Audio("sounds/tom.mp3")
        au.play();
    });
    
}  */



/* *********************************** */

/* var n = document.querySelectorAll(".drum").length;
for (let i = 0; i < n; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",function(){
 */
       


        /* console.log(this.innerHTML); */



        /* this.style.color = "white"; */



        /* var b = document.querySelectorAll(".drum")[i].innerHTML;
       
        switch (b) {
            case w:
                var au = new Audio("./sounds/ton-1mp.3");
                au.play();
                break;

            case a:
                var au = new Audio("./sounds/ton-1mp.3");
                au.play();
                break;


            case s:
                var au = new Audio("./sounds/ton-1mp.3");
                au.play();
                break;


            case d:
                var au = new Audio("./sounds/ton-1mp.3");
                au.play();
                break;


            case j:
                var au = new Audio("./sounds/ton-1mp.3");
                au.play();
                break;

            case k:
                    var au = new Audio("./sounds/ton-1mp.3");
                    au.play();
                    break;
        
            case l:
                    var au = new Audio("./sounds/ton-1mp.3");
                    au.play();
                    break;

    
            default:
                break;
        } */


/*             
    });
    
} */








/* ***************************************************** */



    var n = document.querySelectorAll(".drum").length;
    /* for (let i = 0; i < n; i++) { */
        /* document.querySelectorAll("button")[i].addEventListener("click",function(){ */
            /* addEventListener("keypress",function(){
                alert("key wws")
            }); */


            document.addEventListener('keypress', (even) => {
                const key = even.key;
                alert("key  " + key);
            });
        
      /* }); */
    
/* } */


