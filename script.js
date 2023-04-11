// Capturar tags HTML
const abrirModalBtnElement = document.querySelector('#open-modal-btn')
const fecharModalBtnElement = document.querySelector('#close-btn')
const formElement = document.querySelector('.form-usuario')
const modalElement = document.querySelector('#modal-cadastrar-user')

function toggleModal() {
  // capturar o modal
  const modalTemDisplayFlex = modalElement.style.display === "flex"

  if (modalTemDisplayFlex) {
    modalElement.style.display = "none"
  } else {
    modalElement.style.display = "flex"
  }
}

function clicouNoBtnSalvar(evento) {
  evento.preventDefault()

  // Capturar os valores dos inputs
  const nomeInputElement = document.querySelector('#nome');
  const emailInputElement = document.querySelector('#email');
  const senhaInputElement = document.querySelector('#senha');

  const usuario = {
    nome: nomeInputElement.value,
    email: emailInputElement.value,
    senha: senhaInputElement.value,
  }

  toggleModal()
}

abrirModalBtnElement.addEventListener('click', toggleModal)
fecharModalBtnElement.addEventListener('click', toggleModal)
formElement.addEventListener('submit', clicouNoBtnSalvar)
