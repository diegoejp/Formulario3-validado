let formu = document.querySelector("#formulario");

function prevenir (e){
    e.preventDefault();
}
validarCard();
validarCVC();



//regex
let regexCard = /^[0-9]{13,16}$/;
let regexCVC = /^[\d]{3}$/;


function validarCard(){
    let card = document.querySelector("#card");
    card.addEventListener("input", (e)=>{
        let textCard = e.target.value.trim();
        console.log(textCard);
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
            console.log("NO");
        }else{
            console.log("SI");
        }
    });
}