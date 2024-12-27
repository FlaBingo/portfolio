const result = document.querySelector("#result");
const checkBtn = document.querySelector("#check-btn");
const textInput = document.querySelector("#text-input");

checkBtn.addEventListener("click", () => {
    if(textInput.value === ""){
        alert("Please input a value");
        result.innerHTML = "";
    }else{
        result.innerHTML = palindrome();
    }
})

textInput.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        if(textInput.value === ""){
            alert("Please input a value");
            result.innerHTML = "";
        }else{
            result.innerHTML = palindrome();
        }
    }
})

const palindrome = () => {
    let myArray = [];
    let reverseArr = [];
    for(let i = 0; i < textInput.value.length; i++){
        myArray.push(textInput.value[i])
        reverseArr.unshift(textInput.value[i]);
    };
    let mystring = myArray.join("").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let reversestring = reverseArr.join("").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    if( mystring === reversestring ){
        return `${textInput.value} is a palindrome`;
    }else{
        return `${textInput.value} is not a palindrome`;
    }
}
