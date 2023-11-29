const menuMobile = document.getElementById("menuMobile")
const botonMenu = document.getElementById("botonMenu")
let isOpen = false

botonMenu.addEventListener("click", () => {
   
    if(isOpen){
        menuMobile.style.transform = "translateX(-100vw)"
        isOpen = false
    }else{
        menuMobile.style.transform = "translateX(0vw)"
        isOpen = true
    }
})

const links = document.getElementsByClassName("link")

if(links){
    for (let item of links) {
        item.addEventListener("click", () => {
            menuMobile.style.transform = "translateX(-100vw)"
        })
    }
}
