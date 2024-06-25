// seletores:
const numberA = document.getElementById("number-a")
const numberB = document.getElementById("number-b")
const submit = document.getElementById("inputForm")

// Validação do formulario:
const validation = () =>{
    if(numberB.value > numberA.value){
        alert("Formulário valido")
    }else{
        alert("Formulário inválido")
    }
}

// Evento:
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    validation()
})
