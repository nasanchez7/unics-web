const menuMobile = document.getElementById("menuMobile")
const botonMenu = document.getElementById("botonMenu")
const logo = document.getElementById("logo")

let isOpen = false

logo.addEventListener("click", () => {
   window.scrollX = 0;
   window.scrollTo({
      top: 0,
      behavior: 'smooth' 
  });
   if(isOpen){
      menuMobile.style.transform = "translateX(-100vw)"
      isOpen = false
  }
})

botonMenu.addEventListener("click", () => {
   console.log("click")
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

const botonVideoBarbara = document.getElementById("verVideoBarbara")

botonVideoBarbara.addEventListener('click', () => {
   const modalVideo = document.querySelector(".modalVideo")
   modalVideo.style.backgroundColor = "#00000082"
   modalVideo.style.zIndex = "200"
   modalVideo.style.opacity = "1"
   modalVideo.innerHTML = `
         <div class="botonCerrar" id="cerrarModal">
            <i class='bx bx-x-circle'></i>
         </div>
         <iframe class="videoIframe" src="https://www.youtube.com/embed/hMlASG2HJm4?si=bl4GNtW_gMPcWPpE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
   const botonCerrar = document.getElementById("cerrarModal")
   botonCerrar.addEventListener("click", () => {
      modalVideo.style.backgroundColor = "#00000000"
      modalVideo.style.zIndex = "-200"
      modalVideo.style.opacity = "0"
      modalVideo.innerHTML = ""
   })
})

const verInfoBarbara = document.getElementById("verInfoBarbara")
const volverBarbara = document.getElementById("volverBarbara")

verInfoBarbara.addEventListener('click', () => {
   console.log("click")
   const informacionBarbara = document.querySelector(".informacionBarbara")
   const infoBarbara = document.querySelectorAll(".ocultarBarbara")
   infoBarbara.forEach((item) => {
      item.style.display = "none"
   })
   verInfoBarbara.classList.remove('activarBotonInfo')
   verInfoBarbara.classList.add('desactivarBotonInfo')
   volverBarbara.classList.add('activarBotonVolver')
   informacionBarbara.style.display = "unset"
})


volverBarbara.addEventListener('click', () => {
   const infoBarbara = document.querySelectorAll(".ocultarBarbara")
   infoBarbara.forEach((item) => {
      item.style.display = "flex"
   })
   const informacionBarbara = document.querySelector(".informacionBarbara")
   informacionBarbara.style.display = "none"
   verInfoBarbara.classList.remove('desactivarBotonInfo')
   verInfoBarbara.classList.add('activarBotonInfo')
   volverBarbara.classList.remove('activarBotonVolver')
   volverBarbara.classList.add('desactivarBotonVolver')
})

const profesionales = [ 
    {
       nombre: "MARI CARMEN",
       imagenSinFondo: "./img/mariCarmen.png",
       imagenConFondo: "./img/mariCarmen.jpg",
       iframeLink: '<iframe class="videoIframe" src="https://www.youtube.com/embed/HGMrFv90mqQ?si=JnqdcNx7f3j7Gd41" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>' 
    },
    {
        nombre: "CAROLINA",
        imagenSinFondo: "./img/Carolina.png",
        imagenConFondo: "./img/carolina.jpg",
        iframeLink: '<iframe class="videoIframe" src="https://www.youtube.com/embed/fhTKHWMZDDg?si=nQlrqwnBAXcT2qh6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>' 
     },
     {
        nombre: "AURORA",
        imagenSinFondo: "./img/aurora.png",
        imagenConFondo: "./img/aurora.jpg",
        iframeLink: '<iframe class="videoIframe" src="https://www.youtube.com/embed/nKpOnr623n0?si=CHJDGh224eEUD4Zy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>' 
     },
     {
        nombre: "MARIANA",
        imagenSinFondo: "./img/Mariana.png",
        imagenConFondo: "./img/mariana.jpg",
        iframeLink: '<iframe class="videoIframe" src="https://www.youtube.com/embed/29tA6mH2DQ0?si=G1cEnCUzvwavNSPJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>' 
     },
     {
        nombre: "JESSICA",
        imagenSinFondo: "./img/jesi.png",
        imagenConFondo: "./img/jessica.jpg",
        iframeLink: '<iframe class="videoIframe" src="https://www.youtube.com/embed/JSxqw1s9-xg?si=J7BGzaoifGZHTObi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>' 
     },
     {
        nombre: "MARIA",
        imagenSinFondo: "./img/Maria.png",
        imagenConFondo: "./img/maria.jpg",
        iframeLink: '<iframe class="videoIframe" src="https://www.youtube.com/embed/3jTloDQZh_I?si=a5lhfAaqvLnYZ5Hb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>' 
     },
     {
        nombre: "SARA",
        imagenSinFondo: "./img/Sara.png",
        imagenConFondo: "./img/sara.jpg",
        iframeLink: '<iframe class="videoIframe" src="https://www.youtube.com/embed/zwspsGrhep8?si=oPpkl4UHU_6v2vFC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>' 
     },
     {
        nombre: "SONIA",
        imagenSinFondo: "./img/Sonia.png",
        imagenConFondo: "./img/sonia.jpg",
        iframeLink: '<iframe class="videoIframe" src="https://www.youtube.com/embed/_1W7VnoV-Co?si=QfMHKTiL_adFmdQ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>' 
     },
     {
        nombre: "JAVIER",
        imagenSinFondo: "./img/Javier.png",
        imagenConFondo: "./img/javier.jpg",
        iframeLink: '<iframe class="videoIframe" src="https://www.youtube.com/embed/cxuB_bzfjl0?si=O20ZT3GrVd5OMv41" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>' 
     },
     {
        nombre: "MARI CARMEN",
        imagenSinFondo: "./img/mariCarmenSecre.png",
        imagenConFondo: "./img/mariCarmenSecretaria.jpg",
        iframeLink: '<iframe class="videoIframe" src="https://www.youtube.com/embed/LTMmezop_UI?si=z6dp73FV2hgvdqLV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>' 
     },
     {
      nombre: "AINHOA",
      imagenSinFondo: "./img/ainhoa.png",
      imagenConFondo: "./img/AinhoaCard.png",
      iframeLink: '<iframe class="videoIframe" src="https://www.youtube.com/embed/2XBJkWlxNTU?si=NCxDIw-YC5TWaHf5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>' 
   }
]

if(profesionales){
   const seccionTarjetas = document.querySelector(".seccionTarjetas")
   const modalVideo = document.querySelector(".modalVideo")
   profesionales.forEach((item, index) => {
      const card = document.createElement("div")
      card.classList.add("profesionalCard")
      const contenidoTarjeta = `
               <div class="front ${item.nombre}Card" id="${item.nombre.replace(/\s/g, "")}Front${index}">
                    <strong>${item.nombre}</strong>
                    <img src="${item.imagenSinFondo}" alt="${item.nombre}">
                    <div class="verMasContainer" id="${item.nombre.replace(/\s/g, "")}VerMas${index}">
                        <strong>VER MAS</strong>
                    </div>
               </div>
               <div class="back" id="${item.nombre.replace(/\s/g, "")}Back${index}" style="background-image: url(${item.imagenConFondo})">
                    <i class='bx bx-play-circle'></i>
               </div>
      `
      card.innerHTML = contenidoTarjeta
      seccionTarjetas.appendChild(card)
      const verMasBoton = document.getElementById(`${item.nombre.replace(/\s/g, "")}VerMas${index}`)
      const cardFront = document.getElementById(`${item.nombre.replace(/\s/g, "")}Front${index}`)
      const cardBack = document.getElementById(`${item.nombre.replace(/\s/g, "")}Back${index}`)

      verMasBoton.addEventListener('click', () => {
         cardFront.classList.add('girarFront')
         cardBack.classList.add('girarBack')
         setTimeout(() => {
            cardFront.classList.remove('girarFront')
            cardBack.classList.remove('girarBack')
         }, 3000)
      })
      cardBack.addEventListener("click", () => {
         modalVideo.style.backgroundColor = "#00000082"
         modalVideo.style.zIndex = "200"
         modalVideo.style.opacity = "1"
         modalVideo.innerHTML = `
         <div class="botonCerrar" id="cerrarModal">
            <i class='bx bx-x-circle'></i>
         </div>
         ${item.iframeLink}`
         const botonCerrar = document.getElementById("cerrarModal")
         botonCerrar.addEventListener("click", () => {
            modalVideo.style.backgroundColor = "#00000000"
            modalVideo.style.zIndex = "-200"
            modalVideo.style.opacity = "0"
            modalVideo.innerHTML = ""
         })
      })
   })
}

const imagenes = document.querySelectorAll(".imagenCarrousel")

imagenes.forEach((item) => {
   item.addEventListener('click', () => {
      const modalVideo = document.querySelector(".modalVideo")
      modalVideo.style.backgroundColor = "#00000082"
         modalVideo.style.zIndex = "200"
         modalVideo.style.opacity = "1"
         modalVideo.innerHTML = `
         <div class="botonCerrar" id="cerrarModal">
            <i class='bx bx-x-circle'></i>
         </div>
         <img class="imagenCarrouselModal" src="${item.src}">`
         const botonCerrar = document.getElementById("cerrarModal")
         botonCerrar.addEventListener("click", () => {
            modalVideo.style.backgroundColor = "#00000000"
            modalVideo.style.zIndex = "-200"
            modalVideo.style.opacity = "0"
            modalVideo.innerHTML = ""
         })
      console.log(item.src)
   })
})

ScrollReveal({ reset: true });
ScrollReveal().reveal('.tituloSeccionUno', { delay: 350 });
ScrollReveal().reveal('.seccionTarjetaTitulo', { delay: 350 });
ScrollReveal().reveal('.seccionTarjetas', { delay: 350 });
ScrollReveal().reveal('.servicioTitulo', { delay: 350 });
ScrollReveal().reveal('.serviciosLista', { delay: 350 });
ScrollReveal().reveal('.tituloNuestroEspacio', { delay: 350 });
ScrollReveal().reveal('.carousel', { delay: 350 });
ScrollReveal().reveal('.tituloContacto', { delay: 350 });
ScrollReveal().reveal('.agradecimientoTexto', { delay: 350 });
ScrollReveal().reveal('.cardsContacto', { delay: 350 });
ScrollReveal().reveal('.mensajeFinal', { delay: 350 });




const verMasPsicologia = document.getElementById('verMasPsicologia')
const ocultarPsicologia = document.getElementById('ocultarPsicologia')

verMasPsicologia.addEventListener('click', () => {
   const parrafoPsicologia = document.getElementById('parrafoPsicologia')
   parrafoPsicologia.style.display = "unset"
   verMasPsicologia.style.display = "none"
   ocultarPsicologia.style.display = "unset"
   ocultarPsicologia.addEventListener('click', ()=> {
      parrafoPsicologia.style.display = "none"
      verMasPsicologia.style.display = "unset"
      ocultarPsicologia.style.display = "none"
   })
})

const verMasPedagogia = document.getElementById('verMasPedagogia')
const ocultarPedagogia = document.getElementById('ocultarPedagogia')

verMasPedagogia.addEventListener('click', () => {
   const parrafoPedadogia = document.getElementById('parrafoPedadogia')
   parrafoPedadogia.style.display = "unset"
   verMasPedagogia.style.display = "none"
   ocultarPedagogia.style.display = "unset"
   ocultarPedagogia.addEventListener('click', ()=> {
      parrafoPedadogia.style.display = "none"
      verMasPedagogia.style.display = "unset"
      ocultarPedagogia.style.display = "none"
   })
})

const verMasLogopedia = document.getElementById('verMasLogopedia')
const ocultarLogopedia = document.getElementById('ocultarLogopedia')

verMasLogopedia.addEventListener('click', () => {
   const parrafoLogopedia = document.getElementById('parrafoLogopedia')
   parrafoLogopedia.style.display = "unset"
   verMasLogopedia.style.display = "none"
   ocultarLogopedia.style.display = "unset"
   ocultarLogopedia.addEventListener('click', ()=> {
      parrafoLogopedia.style.display = "none"
      verMasLogopedia.style.display = "unset"
      ocultarLogopedia.style.display = "none"
   })
})

const verMasTerapia = document.getElementById('verMasTerapia')
const ocultarTerapia = document.getElementById('ocultarTerapia')

verMasTerapia.addEventListener('click', () => {
   const parrafoTerapia = document.getElementById('parrafoTerapia')
   parrafoTerapia.style.display = "unset"
   verMasTerapia.style.display = "none"
   ocultarTerapia.style.display = "unset"
   ocultarTerapia.addEventListener('click', ()=> {
      parrafoTerapia.style.display = "none"
      verMasTerapia.style.display = "unset"
      ocultarTerapia.style.display = "none"
   })
})

const verMasOtros = document.getElementById('verMasOtros')
const ocultarOtros = document.getElementById('ocultarOtros')

verMasOtros.addEventListener('click', () => {
   const parrafoOtros = document.getElementById('parrafoOtros')
   parrafoOtros.style.display = "unset"
   verMasOtros.style.display = "none"
   ocultarOtros.style.display = "unset"
   ocultarOtros.addEventListener('click', ()=> {
      parrafoOtros.style.display = "none"
      verMasOtros.style.display = "unset"
      ocultarOtros.style.display = "none"
   })
})

const linkConocenos = document.getElementById("conocenosLink")
const lineaConocenos = document.getElementById("lineaConocenos")

linkConocenos.addEventListener('mouseover', () => {
   lineaConocenos.style.width = "100%"
})

linkConocenos.addEventListener('mouseout', () => {
   lineaConocenos.style.width = "0%"
})

const serviciosLink = document.getElementById("serviciosLink")
const lineaServicios = document.getElementById("lineaServicios")

serviciosLink.addEventListener('mouseover', () => {
   lineaServicios.style.width = "100%"
})

serviciosLink.addEventListener('mouseout', () => {
   lineaServicios.style.width = "0%"
})

const nuestroEspacioLink = document.getElementById("nuestroEspacioLink")
const lineaNuestroEspacio = document.getElementById("lineaNuestroEspacio")

nuestroEspacioLink.addEventListener('mouseover', () => {
   lineaNuestroEspacio.style.width = "100%"
})

nuestroEspacioLink.addEventListener('mouseout', () => {
   lineaNuestroEspacio.style.width = "0%"
})

const contactoLink = document.getElementById("contactoLink")
const lineaContacto = document.getElementById("lineaContacto")

contactoLink.addEventListener('mouseover', () => {
   lineaContacto.style.width = "100%"
})

contactoLink.addEventListener('mouseout', () => {
   lineaContacto.style.width = "0%"
})

const conocenosSeccion = document.getElementById('conocenosSeccion')
const servicios = document.getElementById('servicios')
const nuestroespacio = document.getElementById('nuestroespacio')
const contacto = document.getElementById('contacto')

function isSectionInView(elem) {
   var distance = elem.getBoundingClientRect();
    return (
        distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0
    );
}

window.addEventListener('scroll', () =>{
   lineaConocenos.style.width = "0%"
   if(isSectionInView(conocenosSeccion)){
      lineaServicios.style.width = "0%"
      lineaNuestroEspacio.style.width = "0%"
      lineaContacto.style.width = "0%"
      lineaConocenos.style.width = "100%"
   }
   if(isSectionInView(servicios)){
      lineaConocenos.style.width = "0%"
      lineaNuestroEspacio.style.width = "0%"
      lineaContacto.style.width = "0%"
      lineaServicios.style.width = "100%"
   }
   if(isSectionInView(nuestroespacio)){
      lineaServicios.style.width = "0%"
      lineaConocenos.style.width = "0%"
      lineaContacto.style.width = "0%"
      lineaNuestroEspacio.style.width = "100%"
   }
   if(isSectionInView(contacto)){
      lineaServicios.style.width = "0%"
      lineaConocenos.style.width = "0%"
      lineaNuestroEspacio.style.width = "0%"
      lineaContacto.style.width = "100%"
   }
})