
const repo1 = "https://github.com/Kamogelobradley200/Shop-Mate";
const repo2 = "https://github.com/StheshSphere/CareConnect";
const linkedIn = "http://www.linkedin.com/in/nkosinathi-khumalo06";
const github = "https://github.com/Nathi006";
//
const resumeButton = document.getElementById("my_cv");
const repo1Button = document.getElementById("project1");
const repo2Button = document.getElementById("project2");
//handle events
repo1Button.addEventListener("click", ()=>{
    window.open(repo1);
});

repo2Button.addEventListener("click", ()=>{
    window.open(repo2);
});
resumeButton.addEventListener("click", ()=>{
    window.open("documents/nkosinathi_khumalo_cv (2).pdf", "_blank");
});
//handle the connection buttons
const link = document.getElementById("linked");//linkedIn button
const git = document.getElementById("git");

link.addEventListener("click", ()=>{
    window.open(linkedIn);
});

git.addEventListener("click", ()=>{
    window.open(github);
});