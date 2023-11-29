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

const profesionales = [ 
    {
       nombre: "MARI",
       imagenSinFondo: "./img/mariCarmen.png",
       imagenConFondo: "",
       iframeLink: "" 
    },
    {
        nombre: "CAROLINA",
        imagenSinFondo: "./img/Carolina.png",
        imagenConFondo: "",
        iframeLink: "" 
     },
     {
        nombre: "AURORA",
        imagenSinFondo: "./img/aurora.png",
        imagenConFondo: "",
        iframeLink: "" 
     },
     {
        nombre: "MARIANA",
        imagenSinFondo: "./img/Mariana.png",
        imagenConFondo: "",
        iframeLink: "" 
     },
     {
        nombre: "JESSICA",
        imagenSinFondo: "./img/jesi.png",
        imagenConFondo: "",
        iframeLink: "" 
     },
     {
        nombre: "MARIA",
        imagenSinFondo: "./img/Maria.png",
        imagenConFondo: "",
        iframeLink: "" 
     },
     {
        nombre: "SARA",
        imagenSinFondo: "./img/Sara.png",
        imagenConFondo: "",
        iframeLink: "" 
     },
     {
        nombre: "SONIA",
        imagenSinFondo: "./img/Sonia.png",
        imagenConFondo: "",
        iframeLink: "" 
     },
     {
        nombre: "JAVIER",
        imagenSinFondo: "./img/Javier.png",
        imagenConFondo: "",
        iframeLink: "" 
     },
     {
        nombre: "MARI",
        imagenSinFondo: "./img/mariCarmenSecre.png",
        imagenConFondo: "",
        iframeLink: "" 
     },
]
