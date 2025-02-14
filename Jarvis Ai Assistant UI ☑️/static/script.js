micLogo = document.querySelector("#mic-logo");
content = document.querySelector("#content");

micLogo.addEventListener("click",function(){
    // micClick()
    // wishMe()
    sendRequest();
})

flag = 0
function micClick(){
    if(flag === 0){
        micLogo.style.color = "cyan"
        flag = 1
    }
    else{
        micLogo.style.color = "lightgray"
        flag = 0
    }
}

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode")
}

document.querySelector("#dark-mode").addEventListener("click",function(){
    // alert("Dark Mode Enabled..")
    document.body.classList.toggle("dark-mode")

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
})

function wishMe() {
    const now = new Date();
    const hours = now.getHours();
    let message;
    let greeting = "hey Pratik. How can i help you Today?"

    if (hours >= 5 && hours < 12) {
        message = "Good Morning!.";
    } else if (hours >= 12 && hours < 17) {
        message = "Good Afternoon!";
    } else if (hours >= 17 && hours < 22) {
        message = "Good Evening!.";
    } else {
        message = "Good Night!.";
    }
    var string = (message +" "+ hours +" "+ now )
    content.textContent = (string)

    const speech = new SpeechSynthesisUtterance(message + greeting);
    speech.lang = "en-US";
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
}


async function sendRequest() {
    const data = { name: "Pratik" }; // Example data to send

    try {
        let response = await fetch("http://127.0.0.1:5000/api/process", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        let result = await response.json();
        console.log(result);
    } catch (error) {
        console.error("Error:", error);
    }
}