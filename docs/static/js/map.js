mapboxgl.accessToken = 'pk.eyJ1Ijoic3licmVuMzM0NCIsImEiOiJja2xnbHRueXYwNHMyMm9ycmR1eDhscTBmIn0.GPCfAx8WvbF2Z1Y1YOHRZQ';

const center = [3.73440, 51.02997];

const mapElement = document.getElementById('map');
if (mapElement !== null) {
  setupMap(center);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v11',
    center: center,
    zoom: 16,
  });

  const popUp = new mapboxgl.Popup({ 
    className: 'marker-popup',
    closeButton: false,
  })
    .setHTML("<h1>Our office!</h1><p>Foreestelaan 1,</p><p>9000 Gent</p>")
    .setMaxWidth("300px")

  const marker = new mapboxgl.Marker({color: '#0dcaf0'})
    .setLngLat(center)
    .setPopup(popUp)
    .addTo(map);

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav, 'bottom-right');
}
