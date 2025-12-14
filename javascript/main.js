
const repo1 = "https://github.com/Kamogelobradley200/Shop-Mate";
const repo2 = "https://github.com/StheshSphere/CareConnect";
//
const repo1Button = document.getElementById("project1");
const repo2Button = document.getElementById("project2");
//handle events
repo1Button.addEventListener("click", ()=>{
    window.open(repo1);
});

repo2Button.addEventListener("click", ()=>{
    window.open(repo2);
});