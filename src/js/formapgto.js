const url = 'http://127.0.0.1:8000/forma_pagto/'

// inserir novos dados

const elDescricao = document.getElementById('descricao')
const elListaFormPag = document.getElementById('listFormPag')



// Lista dados do banco

fetch(url)
.then((resp)=> resp.json())
.then(function(data) {
    data.forEach(element => {
        const elTr = document.createElement("tr")

        const elId = document.createElement('td')
        elId.innerHTML = element.id_form_pgto
        elTr.appendChild(elId)

        const elDesc = document.createElement('td')
        elDesc.innerHTML = element.desc_form_pgto
        elTr.appendChild(elDesc)
        
        elListaFormPag.appendChild(elTr)
    });
})
.catch(function(error) {
    console.log(error)
})

