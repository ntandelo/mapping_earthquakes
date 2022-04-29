// Creating map object
var myMap = L.map('map', {
  center: [40.7, -74.1],
  zoom: 11,
  // layers: [street, allFeatures]
});

// Add a tile layer
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  accessToken: API_KEY
}).addTo(myMap);


// If data.beta.nyc is down comment out this link
var link = "https://data.beta.nyc//dataset/0ff93d2d-90ba-457c-9f7e-39e47bf2ac5f/resource/35dd04fb-81b3-479b-a074-a27a37888ce7/download/d085e2f8d0b54d4590b1e7d1f35594c1pediacitiesnycneighborhoods.geojson";


// Use this link to get the geojson data.
// var link = "static/data/nyc.geojson";
function chooseColor(code){
  // console.log(code);
  switch(code){
    case "1":
      return "yellow"
    case "2":
      return "red"
    case "3":
      return "orange"
    case "4":
      return "green"
    case "5":
      return "purple"
    default:
      return "black"
      
  }
}
d3.json(link).then(data => {
  console.log(data);
  L.geoJson(data, {
    style: feature=>{
      return {
        color: "red",
        fillOpacity: 0.5,
        fillColor: chooseColor(feature.properties.boroughCode),
        weight: 1
      }
    },
    onEachFeature: (feature, layer)=>{
      layer.on("mouseover", d=>{
        layer.setStyle({
          fillOpacity: 0.8,
        })
      });
      layer.on("mouseout", d=>{
        layer.setStyle({
          fillOpacity: 0.5,
        })
      });
      layer.bindPopup(`${feature.properties.neighborhood}<hr>${feature.properties.borough}`)
    }
  }).addTo(myMap);
});

// Get our GeoJSON data using d3.json
