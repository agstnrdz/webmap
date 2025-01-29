var mapa = L.map("contenedor-del-mapa").setView([-45.88, -67.55], 11.45)
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png?",{}).addTo(mapa)

var marcador = L.marker([-45.8604247,-67.4845]).addTo(mapa)
marcador.bindPopup("Dirección General de Modernización e Investigación Territorial")

var circulo = L.circle([-45.8604247,-67.4845], {
    radius: 500,
    color: "white"
}).addTo(mapa)
circulo.bindPopup("Radio de 500 metros")

function clickSobreMapa(evento){
    console.log("evento")
    alert("Diste click en un punto con latitud: " + evento.latlng.lat +" y longitud " + evento.latlng.lng + "")
}
mapa.on("click", clickSobreMapa);