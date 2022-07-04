const numeroCalculados = []

function insert (num) {
    var numero = document.getElementById('operacao').innerHTML;
    document.getElementById('operacao').innerHTML = numeroCalculados;

    numeroCalculados.push();
    console.log(numeroCalculados);
}
function clean () {
    document.getElementById('operacao').innerHTML = "";
}
function back ( ) {
    var operacao = document.getElementById('operacao').innerHTML;
    document.getElementById('operacao').innerHTML = operacao.substring(0, operacao.length - 1);
}

function calculator () {
}