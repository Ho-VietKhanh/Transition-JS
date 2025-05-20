const panelList = document.querySelectorAll(".panel");


for (let img of panelList){
    img.addEventListener("click", function(){
        removeClass();
        img.classList.add("active");
    })
}

function removeClass(){
    for (let click of panelList){
        click.classList.remove("active");
    }
}