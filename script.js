'use strict';

const countDefaultValue = 3;

document.addEventListener( "readystatechange" ,function(){
    
    
    
    if(document.readyState === "complete"){

        let password = "";
        let passwordLength = 0;
        let charTestListenerMounted = false;
        let count = countDefaultValue;
        const charTest = document.getElementById("passTest");
        const charTrace = document.getElementById("charTrace");
        const autoClearEntry = document.getElementById("autoClear");
        const autoValidate = document.getElementById("autoValid");
        const app = document.getElementById("app");
        const numberOfTests = document.getElementById("numberOfTests");
        let testing = false;
        

        function charTestListener(event){
            if(charTest.value.length == passwordLength && autoValidate.checked){
                validate();
            }
        }
        function validate(){   

            if(!testing)
                return;

            charTrace.append(getTrace(charTest.value, charTest.value === password));
            charTest.value = "";
            --count;
            if(count <= 0){
                app.className = "";
                //count = countDefaultValue;
                charTest.removeEventListener("keyup", charTestListener);
                charTestListenerMounted = false;
                testing = false;
                charInput.focus();
            }
        }

        charTest.addEventListener("keyup", charTestListener);
        function start(){

            charTest.focus();
            count = numberOfTests.value;
            if(charTestListenerMounted === false){
                charTest.addEventListener("keyup", charTestListener);
                charTestListenerMounted = true;
                console.log("start");
            }
        }

        const charInput = document.getElementById("password");


        charTest.addEventListener("keydown", (event) => {
            if(event.key === "Enter")
                validate();
        });


        charInput.addEventListener("keydown", (event) => {
            if(event.key === "Enter"){
                password = charInput.value;
                console.log(`typeof passord : ${typeof password}`);
                passwordLength = password.length;
                charTest.value = "";
                if(autoClearEntry.checked){
                    charInput.value = "";
                }
                app.className = "testmode";
                testing = true;
                start();
            }
        });
        //charInput.value = "";
    }
});

let span = null;
function getTrace(psw, good = true){
    span = document.createElement("span");
    span.className = `trace ${good? "good" : "bad"}`;
    span.innerHTML = psw;
    return span;
}

