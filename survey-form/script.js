const title = document.querySelector("#title")
const description = document.querySelector("#description")
const straightButton = document.querySelector("#radio-straight");
const otherButton = document.querySelector("#radio-other");
const straightGender = document.querySelector(".straight-gender");
const otherGender = document.querySelector(".other-gender");
const submitButton = document.querySelector("#submit");
const summary = document.querySelector("#summary");


straightButton.addEventListener("change", () => {
    straightGender.style.display = 'block';
    otherGender.style.display = "none"
});
otherButton.addEventListener("change", () => {
    straightGender.style.display = 'none';
    otherGender.style.display = "block"
})

const form = document.querySelector("form");
const info = () => {
    const name = document.querySelector('#name').value;
    const email = document.querySelector("#email").value;
    const age = document.querySelector('#age').value;
    const color = document.querySelector("#dropdown").value;
    let gender = "";
    let hobbies = "";

    const formData = new FormData(form);
    for (const [key, value] of formData.entries()) {
        // console.log(`${key}: ${value}`);
        if (key === "radio") {
            if (others.value === "0") {
                gender = straight.value;
            }
            else if (straight.value === "0") {
                gender = others.value;
            }
        };
        if (key === "hobby"){
            hobbies += value + " ";
        }
    }
    let body = document.querySelector("body");
    backgoundColors.forEach(({ selectColor, bgColors }) => {
        if(selectColor === color  ){
            body.style.background = bgColors;
            summary.style.borderColor = bgColors;
        }
        // if(selectColor === "white"){
        //     title.style.color = "rgb(0, 0, 0)";
        //     description.style.color = "rgb(72,72,72)"
        // }
        if(selectColor === "black"){
            title.style.color = "white";
            description.style.color = "rgb(210, 210, 210)";
        }
    });

    return `Your name is 
    <span class="underlined">${name?name:"Satyam Prajapati"}</span>, and you are a 
    <span class="underlined">${age? age:'18'}</span>-year-old 
    <span class="underlined">${gender?gender:"male"}</span>. Your email address is '
    <span class="underlined">${email?email:"satyamm1402@gmail.com"}</span>'. Your favorite color is 
    <span class="underlined">${color}</span>, and you enjoy 
    <span class="underlined">${hobbies ? hobbies : "Watching Youtube Videos"}</span>.`
};

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    info();
});

submitButton.addEventListener("click", () => {
    setTimeout(() => {
        summary.innerHTML = info();
    }, 500);
})

const backgoundColors = [
    {selectColor : "red", bgColors: "rgb(173, 6, 6)"},
    {selectColor : "green", bgColors: "rgb(59, 165, 91)"},
    {selectColor : "blue", bgColors: "rgb(64, 136, 178)"},
    {selectColor : "yellow", bgColors: "rgb(191, 203, 77)"},
    {selectColor : "pink", bgColors: "rgb(226, 113, 224)"},
    {selectColor : "white", bgColors: "rgb(232, 232, 232)"},
    {selectColor : "black", bgColors: "rgb(78, 78, 78)"},
];