let valorInicial = window.document.getElementById('valorInicial')
let tipoDinheiro = window.document.getElementById('tipoDinheiro')
let tipoConvertido = window.document.getElementById('tipoConvertido')

function converter() {
    if (tipoDinheiro.value == 'real' && tipoConvertido.value == 'dolar') {
        realParaDolar()
    } else if (tipoDinheiro.value == 'real' && tipoConvertido.value == 'euro') {
        realParaEuro()
    } else if (tipoDinheiro.value == 'euro' && tipoConvertido.value == 'real') {
        euroParaReal()
    } else if (tipoDinheiro.value == 'euro' && tipoConvertido.value == 'dolar') {
        euroParaDolar()
    } else if (tipoDinheiro.value == 'dolar' && tipoConvertido.value == 'real') {
        dolarParaReal()
    } else if (tipoDinheiro.value == 'dolar' && tipoConvertido.value == 'euro') {
        dolarParaEuro()
    } else if (tipoDinheiro.value == 'real' && tipoConvertido.value == 'real') {
       realParaReal()
    } else if (tipoDinheiro.value == 'euro' && tipoConvertido.value == 'euro') {
       euroParaEuro()
    } else if (tipoDinheiro.value == 'dolar' && tipoConvertido.value == 'dolar') {
       dolarParaDolar()
    }
}

function realParaReal() {
    resultado.innerHTML = 'R$ ' + valorInicial.value
}

function realParaDolar() {
    let resultado = document.querySelector('#resultado')
    const cotacao = 5.5101

    valorConvertido = parseFloat(valorInicial.value / cotacao) 
    valorConvertido = valorConvertido.toFixed(2)
    resultado.innerHTML = 'U$ ' + valorConvertido
}

function realParaEuro() {
    let resultado = document.querySelector('#resultado')
    const cotacao = 6.5292

    valorConvertido = parseFloat(valorInicial.value / cotacao)
    valorConvertido = valorConvertido.toFixed(2)
    resultado.innerHTML = 'Є ' + valorConvertido
}

function euroParaEuro() {
    resultado.innerHTML = 'Є ' + valorInicial.value
}

function euroParaDolar() {
    let resultado = document.querySelector('#resultado')
    const cotacao = 1.1840 

    valorConvertido = parseFloat(valorInicial.value * cotacao)
    valorConvertido = valorConvertido.toFixed(2)
    resultado.innerHTML = 'U$ ' + valorConvertido 
}

function euroParaReal() {
    let resultado = document.querySelector('#resultado')
    const cotacao = 6.5385

    valorConvertido = parseFloat(valorInicial.value * cotacao)
    valorConvertido = valorConvertido.toFixed(2)
    resultado.innerHTML = 'R$ ' + valorConvertido
}

function dolarParaDolar() {
    resultado.innerHTML = 'U$ ' + valorInicial.value
}

function dolarParaEuro() {
    let resultado = document.querySelector('#resultado')
    const cotacao = 1.186

    valorConvertido = parseFloat(valorInicial.value / cotacao)
    valorConvertido = valorConvertido.toFixed(2)
    resultado.innerHTML = 'Є ' + valorConvertido 
}

function dolarParaReal() {
    let resultado = document.querySelector('#resultado')
    const cotacao = 5.5358

    valorConvertido = parseFloat(valorInicial.value * cotacao)
    valorConvertido = valorConvertido.toFixed(2)
    resultado.innerHTML = 'R$ ' + valorConvertido
}