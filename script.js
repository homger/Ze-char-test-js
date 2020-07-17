'use strict';

document.addEventListener( "readystatechange" ,function(){
    if(document.readyState === "complete"){
        const charInput = document.getElementById("char");


        charInput.addEventListener("keyup", () => {
            if(charInput.value === "47")
                charInput.value = "Yo ur target is number 024";
        });
        //charInput.value = "";
    }
});