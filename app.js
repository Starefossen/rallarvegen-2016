var map;

window.onload = function () {
  map = L.map('map', {scrollWheelZoom: false}).setView([60.63986640060185, 7.289428710937501], 11);

  var topoUrl = 'http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norges_grunnkart_graatone&zoom={z}&x={x}&y={y}';
  L.tileLayer(topoUrl, {
    maxZoom: 16,
    attribution: '<a href="http://www.statkart.no/">Statens kartverk</a>'
  }).addTo(map);

  map.attributionControl.addAttribution('<a href="http://www.flaticon.com/packs/outdoors">Outdoors icons</a>')

  var latlngs = [
    [60.59910472640527, 7.508468627929688],
    [60.604497655208455, 7.494049072265626],
    [60.59708214582742, 7.485809326171876],
    [60.600453043068256, 7.460403442382813],
    [60.60618276070582, 7.450103759765626],
    [60.612922303001774, 7.450790405273438],
    [60.61595463787205, 7.420578002929688],
    [60.62134475179651, 7.403411865234376],
    [60.621007896060576, 7.387619018554688],
    [60.625049932724416, 7.377319335937501],
    [60.628417909684735, 7.356719970703126],
    [60.63111203801024, 7.339553833007813],
    [60.64053971464434, 7.3285675048828125],
    [60.65131082657205, 7.325134277343751],
    [60.65467606074812, 7.312774658203126],
    [60.65467606074812, 7.289428710937501],
    [60.65366652740694, 7.274322509765626],
    [60.661405474539855, 7.253723144531251],
    [60.66746074489092, 7.247543334960938],
    [60.66947891530223, 7.238616943359376],
    [60.67755033189696, 7.235870361328126],
    [60.68595590545573, 7.222137451171876],
    [60.69301489047473, 7.206344604492188],
    [60.70074438250484, 7.211151123046876],
    [60.70712821381297, 7.2145843505859375],
    [60.71451843487143, 7.215270996093751],
    [60.71922041807639, 7.2145843505859375],
    [60.72325014176067, 7.208404541015626],
    [60.72862232040535, 7.195358276367188],
    [60.7313080727848, 7.180252075195313],
    [60.734329275731504, 7.163772583007813],
    [60.736678903722385, 7.150039672851563],
    [60.74037082887685, 7.1376800537109375],
    [60.74204883631736, 7.124633789062501],
    [60.737014550827126, 7.118453979492188]
  ];

  var polyline = L.polyline(latlngs, {
    color: 'red',
    dashArray: '30 10',
    weight: 8,
    opacity: 0.7,
  }).addTo(map);

  var cabin1 = L.icon({
    iconUrl: 'assets/icons/cabin-red.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 50],
    popupAnchor: [-20, -40],
    className: 'grow shadow',
  });

  var cabin2 = L.icon({
    iconUrl: 'assets/icons/cabin-red-half.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 50],
    popupAnchor: [-20, -40],
    className: 'grow shadow',
  });

  var cabin3 = L.icon({
    iconUrl: 'assets/icons/cabin-blue.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 50],
    popupAnchor: [-20, -40],
    className: 'grow shadow',
  });

  var tent = L.icon({
    iconUrl: 'assets/icons/tent-1.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 50],
    popupAnchor: [-20, -40],
    className: 'grow shadow',
  });

  L.marker(latlngs[0], {icon: cabin1}).addTo(map);  // Finsehytta
  L.marker(latlngs[8], {icon: tent}).addTo(map);    // Fagernut
  L.marker(latlngs[18], {icon: cabin2}).addTo(map); // Hallingskeid
  L.marker(latlngs[34], {icon: cabin3}).addTo(map); // Myrdal
};
