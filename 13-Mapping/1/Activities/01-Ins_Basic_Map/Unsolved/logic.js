// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
// var map = L.map('map').setView([51.505, -0.09], 13);

// var map = L.map("map", {
//     center: [37.7749, -122.4194],
//     zoom: 13
// });
var map = L.map("map", {
    center: [37.0902, -95.7129],
    zoom: 4
});

// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(map);


var cities = [
    {
        location: [40.7128, -74.0059],
        name: "New York",
        population: 8550405
    },
    {
        location: [34.0522, -118.2437],
        name: "Los Angeles",
        population: 3967000
    },
    {
        location: [29.7604, -95.3698],
        name: "Houston",
        population: 2310405
    },
    {
        location: [41.2565, -95.9345],
        name: "Omaha",
        population: 475405
    },
    {
        location: [41.8781, -87.6298],
        name: "Chicago",
        population: 2710405
    },
 ];

// cities.forEach(city => {
//     L.marker(city.location, {
//         title: city.name,
//         draggable: true
//     })
//     .bindPopup("<h2>"+city.name+"</h2><hr>"+city.population)
//     .addTo(map);
// });

function setSize(population){
    return population/40;
}
function setColor(population){
    if(population>5000000) color="red";
    else if (population>1000000) color="blue";
    else color="green";
    return color;
}

cities.forEach(city => {
    L.circle(city.location, {
        title: city.name,
        color: setColor(city.population),
        fillColor: setColor(city.population),
        fillOpacity: 0.5,
        radius: setSize(city.population)
    })
    .bindPopup("<h2>"+city.name+"</h2><hr>"+city.population)
    .addTo(map);
});
 //  * 
//  * 
//  * 
//  * 
// var myMarker = L.marker([37.771187541195175, -122.46889397973125], {
//     title: "de Young Museum",
//     draggable: true
// });

// myMarker.addTo(map);
// myMarker.bindPopup("<h2>de Young Museum</h2><hr>"
// +"<img style='max-width:100px;' src='https://tpc.googlesyndication.com/simgad/11593611388415292311'>"
// +"    <p>asdfafsd asfdsfasdf sdfazsdf sdf </p>");


// var myMarker = L.marker([37.77050907812584, -122.44711444364579], {
//     title: "de Young Museum",
//     draggable: true
// });

// myMarker.addTo(map);
// myMarker.bindPopup("<h2>Burton San Francisco Flagship Store</h2><hr>"
// +"<img style='max-width:100px;' src='https://lh5.googleusercontent.com/p/AF1QipMXu1JRkDvmHGqj-hK4YVr2OvuJdVNFj7_FIS5J=w408-h408-k-no'>"
// +"    <p>asdfafsd asfdsfasdf sdfazsdf sdf </p>");

