var listaSeries = []

listaSeries[0] = "https://img.elo7.com.br/product/original/26A83AA/big-poster-serie-better-call-saul-lo01-tamanho-90x60-cm-better-call-saul.jpg";
listaSeries[1] = "https://img.elo7.com.br/product/original/26B138F/big-poster-serie-south-park-lo01-tamanho-90x60-cm-serie.jpg";
listaSeries[2] = "https://img.elo7.com.br/product/original/26A8589/big-poster-serie-breaking-bad-lo03-tamanho-90x60-cm-poster-de-serie.jpg";
listaSeries[3] = "https://m.media-amazon.com/images/I/615MPacH9qL.jpg";
listaSeries[4] = "https://uauposters.com.br/media/catalog/product/3/8/380420211103-uau-posters-loki-filmes.jpg"
listaSeries[5] = "https://cdn.europosters.eu/image/750/posters/star-wars-the-mandalorian-nightfall-i103406.jpg"

var nomeSeries = []

nomeSeries[0] = "Better Call Saul"
nomeSeries[1] = "South Park"
nomeSeries[2] = "Breaking Bad"
nomeSeries[3] = "The Office"
nomeSeries[4] = "Loki"
nomeSeries[5] = "The Mandalorian"

for (var i = 0; i < listaSeries.length; i++) {
    document.write("<div style='display: inline-block; text-align: center; margin: 10px; color: white'>");
    document.write("<img src=" + listaSeries[i] + ">");
    document.write("<p>" + nomeSeries[i] + "</p>");
    document.write("</div>");
}