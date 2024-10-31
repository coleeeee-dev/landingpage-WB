/*Menu beneficios*/
const benefits = document.querySelector("#benefits")
benefits.addEventListener("click", (b) => {
    b.preventDefault();

    const sectionB = document.querySelector(".benefits");
    sectionB.scrollIntoView({behavior: "smooth"});
})

/*Menu clientes*/
const customers = document.querySelector("#customers")
customers.addEventListener("click", (c) => {
    c.preventDefault();

    const sectionC = document.querySelector(".testimonies");
    sectionC.scrollIntoView({behavior: "smooth"});
})

/*Menu contacto*/
const contact = document.querySelector("#contact")
contact.addEventListener("click", (cu) => {
    cu.preventDefault();

    const sectionC = document.querySelector(".contact");
    sectionC.scrollIntoView({behavior: "smooth"});
})

/*Menu descargar*/
const download = document.querySelector(".btnDemo")
download.addEventListener("click", (d) => {
    d.preventDefault();

    const sectionD = document.querySelector(".download");
    sectionD.scrollIntoView({behavior: "smooth"});
})