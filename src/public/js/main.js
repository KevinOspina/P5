var map = L.map('map-template').setView([51.505, -0.09], 3);

const tileURL = 'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png' 
const tileURL2 = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png';

const tile = L.tileLayer(tileURL2);

// Socket Io
const socket = io.connect();

// Marker
const marker = L.marker([6.2033637,-75.32425]); 
const marker2 = L.marker([6.2035637,-75.5851746]); 
marker.bindPopup('Otro Usuario!');
marker2.bindPopup('Otro Usuario!');
map.addLayer(marker);
map.addLayer(marker2);

// Geolocation
map.locate({enableHighAccuracy: true})
map.on('locationfound', (e) => {
  const coords = [e.latlng.lat, e.latlng.lng];
  const newMarker = L.marker(coords);
  newMarker.bindPopup('Estás aquí!');
  map.addLayer(newMarker);
  socket.emit('userCoordinates', e.latlng);
});

// socket new User connected
socket.on('newUserCoordinates', (coords) => {
  console.log(coords);
  const userIcon = L.icon({
    iconUrl: '/img/icon2.png',
    iconSize: [38, 42],
  })
  const newUserMarker = L.marker([coords.lat+0.00010, coords.lng+0.00100], {
    icon: userIcon 
  });
  newUserMarker.bindPopup('Nuevo usuario conectado!');
  map.addLayer(newUserMarker);
}); 

map.addLayer(tile);

