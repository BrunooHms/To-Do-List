document.addEventListener("keypress", function (e) {

  if (e.key === "Enter") {
    adcTarefa();
    document.getElementById("digiteTarefa").value = "";
  }


});


function adcTarefa() {
  
  inputTarefa = document.getElementById("digiteTarefa").value;
  let divLista = document.getElementById("localListaTarefas");
  let paragrafoLista = document.createElement('p');

  if(inputTarefa == ""){
    alert("Por Favor, Digite um item na lista!") //Verifica se o usuario digitou algum item
  } else {

          let botaoExlcuir = document.createElement("input");
          botaoExlcuir.type = 'submit';                        //Cria um botão de excluir dinamicamente
          botaoExlcuir.value = 'X';
          botaoExlcuir.className = 'excluir'
          botaoExlcuir.onclick = function(){    //Chama a função somente quando o botão for clicado.
            deletarItem();
          }


          let botaoFeito = document.createElement("input");  //Cria um botão de checagem dinamicamente
          botaoFeito.type = 'checkbox'
          botaoFeito.className = 'tarefaFeita'
          

          let quebraLinha = document.createElement("br");    //Cria uma quebra de linha

          //Montando o paragrafo da lista 

          divLista.appendChild(paragrafoLista)

          paragrafoLista.appendChild(botaoFeito);   // Adiciona o botao de checagem

          paragrafoLista.innerHTML += ` ${inputTarefa} ` //Adiciona o item da lista que o usuario digitar

          paragrafoLista.appendChild(botaoExlcuir) //Adiciona o botão de excluir


          paragrafoLista.appendChild(quebraLinha); //Adiciona a quebra de linha

        }

        
      }

function deletarItem() {             //Função que faz deletar o item da lista
  let paragrafoLista = document.createElement('p');
  limpar = document.querySelectorAll("p");



  limpar.forEach(function (excluir) {
    excluir.addEventListener("click", paragrafoLista.remove)
  })
}























