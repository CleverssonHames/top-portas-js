var itens = [];

// Elemnetos do documento
var quantidade = document.getElementById("quantidade")
var descricao = document.getElementById("descricao")
var valorUnitario = document.getElementById("valor")
var valorTotal = document.getElementById("total")
var btInserir = document.getElementById("insere")
var elBodyTable = document.getElementById("lista-itens")
var elTableTtItens = document.getElementById("total-itens-tab")
var elDesconto = document.getElementById("desconto")
var elValorPagar = document.getElementById("valor-pagar")

// valor inical do desconto
elDesconto.value = 0


var limpaInput = function () {
  quantidade.value = '';
  descricao.value = '';
  valorUnitario.value = '';
  valorTotal.value = '';
}

var insereItens = function() {
  var objItem = {
    quantidade: quantidade.value,
    descricao: descricao.value,
    valorUnitario: valorUnitario.value,
    valorTotal: valorTotal.value
  }

  if (objItem.quantidade == '') {
    alert('Preencher a quantidade!')
  } else if  ( objItem.descricao == '' ) {
    alert('Preencher a descrição!')
  } else if ( objItem.valorUnitario == 0 ) {
    alert('Preencher valor unitátio!')
  } else if (objItem.valorTotal == 0) {
    alert('Preencher o valor total!')
  } else {
    itens.push(objItem)
    limpaInput()
    listaItens()
    elTableTtItens.innerText = calcTotalItem()
  }
}
btInserir.onclick = insereItens

var calculaTotal = function () {
  var _total = quantidade.value * parseFloat(valorUnitario.value)
  valorTotal.value = _total
}
valorUnitario.onblur = calculaTotal

var calcTotalItem = function() {
  var sum = 0
  for(var i = 0; i < itens.length; i++ ) {
    sum+=parseFloat(itens[i].valorTotal);
  }
  return sum
}

var calcTotalPagar = function() {
  var _tti = calcTotalItem()
  console.log(_tti)
  elValorPagar.value = _tti - elDesconto.value
}

elDesconto.onblur =  calcTotalPagar

var listaItens = function () {
  // limpart tabela
  elBodyTable.innerHTML = "";

  // recriar tabela com os dados da lista atualizados
  itens.forEach(function(item, indice){
    var rowTrEl = document.createElement("tr")

    var elIndice = document.createElement("td")
    elIndice.innerText = indice

    var elQtde = document.createElement("td")
    elQtde.innerText = item.quantidade

    var elDescricao = document.createElement("td")
    elDescricao.innerText = item.descricao

    var elVlrUnit = document.createElement("td")
    elVlrUnit.innerText = item.valorUnitario

    var elVlrTotal = document.createElement("td")
    elVlrTotal.innerText = item.valorTotal

    var elActionAlte = document.createElement("td")
    
    var elActionAlteA = document.createElement("button")
    elActionAlteA.setAttribute('value', indice)
    elActionAlteA.innerText = 'Alterar'

    var elActionDel = document.createElement("td")
    
    var elActionDelB = document.createElement("button")
    //elActionDelB.setAttribute('value', indice)
    elActionDelB.setAttribute('class', 'remove-item')
    elActionDelB.addEventListener('click', function() {
      itens.forEach(function(item, _indice){
        if (indice == _indice) {
          itens.splice(_indice, 1)
        }
      })
      listaItens()
    })
    elActionDelB.innerText = 'Excluir'

    // mostrar elementos na web
    rowTrEl.appendChild(elIndice)
    rowTrEl.appendChild(elQtde)
    rowTrEl.appendChild(elDescricao)
    rowTrEl.appendChild(elVlrUnit)
    rowTrEl.appendChild(elVlrTotal)
    rowTrEl.appendChild(elActionAlte)
    elActionAlte.appendChild(elActionAlteA)
    rowTrEl.appendChild(elActionDel)
    elActionDel.appendChild(elActionDelB)
    elBodyTable.appendChild(rowTrEl)
  })
}







