//Tipod de dados
//String""
//Number 01
//Object {}
//Boolean true or false
//Array []


// create map
const map = L.map("mapid").setView([-23.5521622, -46.6372169], 13)

// creat and add tilayer
L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", ).addTo(map);


// creat icon

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//  creat popup overlay

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    miniWidth: 240,
    miniHeight: 240

}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg" ></a>')
L.marker([-23.5521622, -46.6372169], { icon })
    .addTo(map)
    .bindPopup(popup)