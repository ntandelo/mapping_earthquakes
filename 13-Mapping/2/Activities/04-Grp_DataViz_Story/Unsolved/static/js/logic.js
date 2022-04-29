
var link1 = "static/data/Boston_Neighborhoods.geojson"
var link2 = "static/data/Wicked_Free_Wi-Fi_Locations.geojson"

  
// Add a tile layer
var streetmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
  id: 'mapbox/streets-v11',
	accessToken: API_KEY
});

var darkmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
  id: 'mapbox/dark-v10',
	accessToken: API_KEY
});

var baseMaps = {
    "Street View": streetmap,
    "Dark View": darkmap
}


// Get our GeoJSON data using d3.json
var neighborhoods = L.layerGroup();
var wifiGroup = L.layerGroup();

d3.json(link1).then(d=>{
    L.geoJson(d).addTo(neighborhoods);
});
d3.json(link2).then(d=>{
    L.geoJson(d).addTo(wifiGroup);
});

var overlay = {
    "Neighborhoods": neighborhoods,
    "Wifi": wifiGroup
}

// Creating map object
var myMap = L.map("map", {
    center: [
      37.09, -95.71
    ],
    zoom: 5,
    layers: [streetmap, neighborhoods, wifiGroup]
  });

L.control.layers(baseMaps, overlay).addTo(myMap);