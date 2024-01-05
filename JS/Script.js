window.onscroll = function() {
    mostrarOcultarBotao();
};

function mostrarOcultarBotao() {
    var btnTopo = document.getElementById("btnTopo");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
}

function voltarAoTopo() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}