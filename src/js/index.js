if (!localStorage.theme) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        localStorage.theme = "dark";
    } else {
        localStorage.theme = "light";
    }
}

setMode();

document.getElementById("toggle").addEventListener("click", function () {
    console.log("button clicked");
    

    if (localStorage.theme === "dark") {
        localStorage.theme = "light";
        console.log("was light");
        document.getElementById("toggle").innerHTML = "Dark Mode";
    } else {
        localStorage.theme = "dark";
        console.log("was dark");
        document.getElementById("toggle").innerHTML = "Light Mode";
    }
    setMode();
});

function setMode() {
    if (localStorage.theme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    } 
 }
