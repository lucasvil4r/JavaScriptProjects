function insert (num) {
    var numero = document.getElementById('operacao').innerHTML;
    document.getElementById('operacao').innerHTML = numero + num;
}
function clean () {
    document.getElementById('operacao').innerHTML = "";
}
function back ( ) {
    var operacao = document.getElementById('operacao').innerHTML;
    document.getElementById('operacao').innerHTML = operacao.subtring(0, operacao.length - 1);
}