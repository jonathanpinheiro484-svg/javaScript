// Pega o campo de texto onde o usuário vai digitar o nome do Pokémon
const campoTexto = document.getElementById('campoTexto')

// Pega o botão que será usado para consultar o Pokémon
const btnConsultar = document.getElementById('btnConsultar')

// Pega o elemento onde as informações do Pokémon serão mostradas
const display = document.getElementById('display')

// Pega o botão que será usado para limpar a consulta
const btnLimpar = document.getElementById('btnLimpar')

btnLimpar.addEventListener('click', function () {
  display.innerHTML = "";
  campoTexto.value = "";
})

btnConsultar.addEventListener('click', function(){
const campoTextoInput = campoTexto.value.trim()
const url = `https://viacep.com.br/ws/${campoTextoInput}/json/`;

if (campoTextoInput.length != 8 || isNaN(campoTextoInput))
    alert("CEP INVALIDO! Digite somente NUMÉROS.")

}else {
    fetch
}
)