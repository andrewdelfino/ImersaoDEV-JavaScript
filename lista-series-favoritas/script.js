function adicionarSerie() {
    var serieFavorita = document.getElementById("serie").value
    var elementoListaSeries = document.getElementById("listaSeries")
    elementoListaSeries.innerHTML = elementoListaSeries.innerHTML + "<img src=" + serieFavorita + ">"
    document.getElementById("serie").value = ""
}