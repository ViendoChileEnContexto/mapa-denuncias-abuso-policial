const myMap = L.map("mapid").setView([-33.4726900, -70.6472400], 10);
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: "pk.eyJ1IjoiZGlmbG9yZXMiLCJhIjoiY2o2Zmc2dnRpMGg0cDMzbzZscDc4MHUydSJ9.mLucb_Bjd4Et9otFMcctFQ"
}).addTo(myMap);

d3.tsv("first_data.tsv").then(data => {

    data.forEach((row) => {
        const lat = communes[row["Lugar"]]["lat"];
        const lng = communes[row["Lugar"]]["lng"];
        const marker = L.marker([lat,lng]).addTo(myMap);
        marker.bindPopup(`    <div class="ui card">
        <div class="content">
            <p class="header">${row["Lugar"]}</p>
            <div class="meta">
                <span class="date">Etiqueta: ${row["Etiqueta"]}</span>
            </div>
            <div class="description">
                ${row["Otros"]}
            </div>
        </div>
        <div class="extra content">
            <a href="${row["Link"]}" target=”_blank” rel=”noopener noreferrer”>
                <i class="play icon"></i>
                Link a Instagram
            </a>
        </div>
        </div>`);
    });

});