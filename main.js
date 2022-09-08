console.log("ola");
const cvcDigitsEl = document.querySelector("#cvc-digits");
const cardDigitsEl = document.querySelector("#card-digits");
const usernameEl = document.querySelector("#username");
const mmDateCard = document.querySelector("#mm-date");
const yyDateCard = document.querySelector("#yy-date");
const inputsEl = Array.from(document.querySelectorAll("[data-inputs]"))
const btnConfirm = document.querySelector("#confirm")
const form = document.querySelector("#formulario")
const formContainer = document.querySelector("#form-container")
const thanksContainer = document.querySelector("#thanks-cont")
const btnContinue = document.querySelector("#continue")


btnContinue.addEventListener("click", () => {
  window.location.reload()

})

btnConfirm.addEventListener("click", (event) => {
  event.preventDefault()

 

  inputsEl.forEach(input => {
    if (!input.value) {

      form.reset()
      input.setAttribute("required", "true")
     
      
      
    }
    
   
    
   
  })

  if (inputsEl[0].value && inputsEl[1].value && inputsEl[2].value && inputsEl[3].value && inputsEl[4].value) {
    usernameEl.textContent = inputsEl[0].value
    cardDigitsEl.textContent = inputsEl[1].value
    mmDateCard.textContent = inputsEl[2].value
    yyDateCard.textContent = inputsEl[3].value
    cvcDigitsEl.textContent = inputsEl[4].value
    formContainer.classList.add("inactive")
    thanksContainer.classList.remove("inactive")
    

  }
   
  
})









