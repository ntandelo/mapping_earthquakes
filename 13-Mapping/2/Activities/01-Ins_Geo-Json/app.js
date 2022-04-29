
var url = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-01-01&endtime=2022-01-02&maxlongitude=-69.52148437&minlongitude=-123.83789062&maxlatitude=48.74894534&minlatitude=25.16517337";
var url = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-01-01&endtime=2022-01-02";



d3.json(url).then(d=>{
    createFeatures(d.features);
});

function createFeatures(data){
    // console.log(data);
    function addPopup(feature, la){
        console.log(feature);
        la.bindPopup(`${feature.properties.mag}`);

    }
    var allFeatures = L.geoJson(data, {
        onEachFeature: addPopup
    });
    var street = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        accessToken: API_KEY
      });
    var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson";
    
    var baseMap = {
        "Street View": street
    };
    var overlay = {
        "Earthquakes": allFeatures
    };
    var map = L.map('map', {
        center: [61.3302, -146.7947],
        zoom: 4,
        layers: [street, allFeatures]
    });
    L.control.layers(baseMap, overlay).addTo(map);

}
