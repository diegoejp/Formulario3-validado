//variables globales
let nombrevalido = false;


let formu = document.querySelector("#formulario");
function prevenir (e){
    e.preventDefault();
}
validarCard();
validarCVC();

//Funcion para mandar formulario s iesta validado
let enviar = document.querySelector("#send");
enviar.addEventListener("click",(e)=>{
    validarNombre();
    if(nombrevalido == false){
        e.preventDefault();
    }
    console.log(nombrevalido);
});


//regex
let regexCard = /^[0-9]{13,16}$/;
let regexCVC = /^[\d]{3}$/;
let regNom = /[a-zA-Z]{3,}/;


function validarCard(){
    let card = document.querySelector("#card");
     card.addEventListener("input", (e)=>{
        let textCard = e.target.value.trim();
        // console.log(textCard);
        if(textCard == "" || !regexCard.test(textCard)){
            card.classList.add("is-invalid");
            card.classList.remove("is-valid");
            formu.addEventListener("submit",prevenir);

        }else{
            card.classList.remove("is-invalid");
            card.classList.add("is-valid");
            formu.removeEventListener("submit",prevenir);
        }
     });
}

function validarCVC (){
    let cvc = document.querySelector("#CVC");
    cvc.addEventListener("input",(e)=>{
        let textCVC = e.target.value.trim();
        if(textCVC == "" || !regexCVC.test(textCVC)){
            cvc.classList.add("is-invalid");
        }else{
            cvc.classList.remove("is-invalid");
            cvc.classList.add("is-valid");
        }
    });
}

function validarNombre(){
    let name = document.querySelector("#name");
    let textName = name.value.trim();
    if(textName == "" || !regNom.test(textName)){
        name.classList.add("is-invalid");
        nombrevalido = false;
    }else{
        name.classList.add("is-valid");
        nombrevalido = true;
    }
}