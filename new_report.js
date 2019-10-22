const reportMap = L.map("report-map").setView([-33.47269, -70.64724], 10);
L.tileLayer(
    "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
    {
        attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken:
            "pk.eyJ1IjoiZGlmbG9yZXMiLCJhIjoiY2o2Zmc2dnRpMGg0cDMzbzZscDc4MHUydSJ9.mLucb_Bjd4Et9otFMcctFQ"
    }
).addTo(reportMap);

const marker = L.marker([-33.47269, -70.64724]).addTo(reportMap);
const updateMarker = (lat, lng) => {
    marker
        .setLatLng([lat, lng])
        .bindPopup("El suceso ocurrió aquí.")
        .openPopup();
    return false;
};
reportMap.on("click", function(e) {
    $("#lat-input").val(e.latlng.lat);
    $("#lng-input").val(e.latlng.lng);
    updateMarker(e.latlng.lat, e.latlng.lng);
});

const submitForm = () => {
    const formData = JSON.stringify($("#new-report-form").serializeArray());
    console.log(formData);
    $.ajax({
        type: "POST",
        url: "https://backend-mapa-abuso-policial.herokuapp.com/report",
        data: formData,
        crossDomain: true,
        success: function() {},
        dataType: "json",
        contentType: "application/json"
    });
};
