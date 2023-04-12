// Capturar tags HTML
const abrirModalBtnElement = document.querySelector('#open-modal-btn')
const fecharModalBtnElement = document.querySelector('#close-btn')
const formElement = document.querySelector('.form-usuario')
const modalElement = document.querySelector('#modal-cadastrar-user')

//  ----- INÍCIO  ----- Funçoes para manipular API

async function createPaciente(paciente) {
  return fetch('http://localhost:3000/pacientes', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(paciente)
  })
}

//  ----- FIM  -------- Funçoes para manipular API

const botaoSalvarTag = document.querySelector('#salvar-btn')

async function handleSavePaciente(){
  const nomeInputTag = document.querySelector('#nome');
  const emailInputTag = document.querySelector('#email');
  const senhaInputTag = document.querySelector('#senha');

  const paciente = {
    nome: nomeInputTag.value,
    email: emailInputTag.value,
    senha: senhaInputTag.value,
  }

  await createPaciente(paciente)
  toggleModal()
}

botaoSalvarTag.addEventListener('click', handleSavePaciente)

//  ----- INÍCIO  ----- Funçoes para manipular Formulário

//  ----- FIM  -------- Funçoes para manipular Formulário

function toggleModal() {
  // capturar o modal
  const modalTemDisplayFlex = modalElement.style.display === "flex"

  if (modalTemDisplayFlex) {
    modalElement.style.display = "none"
  } else {
    modalElement.style.display = "flex"
  }
}

// function clicouNoBtnSalvar(evento) {
//   evento.preventDefault()

//   // Capturar os valores dos inputs
//   const nomeInputElement = document.querySelector('#nome');
//   const emailInputElement = document.querySelector('#email');
//   const senhaInputElement = document.querySelector('#senha');

//   const usuario = {
//     nome: nomeInputElement.value,
//     email: emailInputElement.value,
//     senha: senhaInputElement.value,
//   }

//   toggleModal()
// }

abrirModalBtnElement.addEventListener('click', toggleModal)
fecharModalBtnElement.addEventListener('click', toggleModal)
// formElement.addEventListener('submit', clicouNoBtnSalvar)
