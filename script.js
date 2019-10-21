const myMap = L.map("mapid").setView([-33.4726900, -70.6472400], 10);
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: "pk.eyJ1IjoiZGlmbG9yZXMiLCJhIjoiY2o2Zmc2dnRpMGg0cDMzbzZscDc4MHUydSJ9.mLucb_Bjd4Et9otFMcctFQ"
}).addTo(myMap);

// const popup = L.popup()
//     .setLatLng([-33.4179685,-70.6148625,17])
//     .setContent('<p>Hello world!<br />This is a nice popup.</p>')
//     .openOn(myMap);

const marker = L.marker([-33.4179685,-70.6148625]).addTo(myMap);
marker.bindPopup(`    <div class="ui card">
<div class="content">
    <p class="header">Lugar</p>
    <div class="meta">
        <span class="date">Fecha</span>
    </div>
    <div class="description">
        Carabineros hicieron X.
    </div>
</div>
<div class="extra content">
    <a>
        <i class="play icon"></i>
        Link a Instagram
    </a>
</div>
</div>`);