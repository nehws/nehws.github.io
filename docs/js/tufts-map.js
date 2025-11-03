// Tufts University Interactive Map
// Initialize the map
function initTuftsMap() {
    // Create map centered on Tufts University
    var map = L.map('tufts-map').setView([42.4075, -71.1190], 16);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);

    // Custom icons
    var startIcon = L.divIcon({
        className: 'custom-div-icon',
        html: "<div style='background-color:#4CAF50; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; display: flex; align-items: center; justify-content: center; font-weight: bold; color: white;'>P</div>",
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });

    var endIcon = L.divIcon({
        className: 'custom-div-icon',
        html: "<div style='background-color:#F44336; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; display: flex; align-items: center; justify-content: center; font-weight: bold; color: white;'>🎯</div>",
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });

    var elephantIcon = L.divIcon({
        className: 'custom-div-icon',
        html: "<div style='background-color:#9C27B0; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; display: flex; align-items: center; justify-content: center; font-size: 16px;'>🐘</div>",
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });

    var cherryIcon = L.divIcon({
        className: 'custom-div-icon',
        html: "<div style='background-color:#E91E63; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; display: flex; align-items: center; justify-content: center; font-size: 16px;'>🌸</div>",
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });

    var tStationIcon = L.divIcon({
        className: 'custom-div-icon',
        html: "<div style='background-color:#FF5722; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; display: flex; align-items: center; justify-content: center; font-weight: bold; color: white; font-size: 14px;'>T</div>",
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });

    // Define location coordinates
    var locations = {
        dowlingGarage: [42.4082, -71.1183],  // Dowling Hall Garage (419 Boston Ave)
        tuftsStation: [42.4082, -71.1169],   // Medford/Tufts T Station (Green Line) - CV5M+55
        breedHall: [42.4109, -71.1219],      // Breed Memorial Hall (51 Winthrop St)
        elephant: [42.4075, -71.1195],       // Jumbo (Tufts Mascot Statue) - approximate location
        cherry: [42.4065, -71.1180]          // Cherry Blossom viewing area - approximate location
    };

    // Starting Point (Dowling Hall Garage)
    var startMarker = L.marker(locations.dowlingGarage, {icon: startIcon}).addTo(map);
    startMarker.bindPopup(`
        <div style="text-align: center;">
            <h4 style="margin: 5px 0;">Dowling Hall Garage</h4>
            <p style="margin: 5px 0; font-size: 12px;">419 Boston Ave<br>Parking Start Point</p>
        </div>
    `);

    // Hover effect
    startMarker.on('mouseover', function(e) {
        this.openPopup();
    });

    // T Station Point (Tufts Station)
    var tStationMarker = L.marker(locations.tuftsStation, {icon: tStationIcon}).addTo(map);
    tStationMarker.bindPopup(`
        <div style="text-align: center;">
            <h4 style="margin: 5px 0;">Tufts T Station</h4>
            <p style="margin: 5px 0; font-size: 12px;">Green Line<br>Public Transit Start Point</p>
        </div>
    `);

    tStationMarker.on('mouseover', function(e) {
        this.openPopup();
    });

    // Destination Point (Breed Memorial Hall)
    var endMarker = L.marker(locations.breedHall, {icon: endIcon}).addTo(map);
    endMarker.bindPopup(`
        <div style="text-align: center;">
            <h4 style="margin: 5px 0;">Breed Memorial Hall</h4>
            <p style="margin: 5px 0; font-size: 12px;">51 Winthrop St<br>Event Destination</p>
        </div>
    `);

    endMarker.on('mouseover', function(e) {
        this.openPopup();
    });

    // Jumbo Statue Marker
    var elephantMarker = L.marker(locations.elephant, {icon: elephantIcon}).addTo(map);
    elephantMarker.bindPopup(`
        <div style="text-align: center;">
            <h4 style="margin: 5px 0;">🐘 Jumbo Statue</h4>
            <p style="margin: 5px 0; font-size: 12px;">Tufts Mascot<br>Campus Landmark</p>
            <div style="margin-top: 5px; font-size: 40px;">🐘</div>
        </div>
    `);

    elephantMarker.on('mouseover', function(e) {
        this.openPopup();
    });

    // Cherry Blossom Marker
    var cherryMarker = L.marker(locations.cherry, {icon: cherryIcon}).addTo(map);
    cherryMarker.bindPopup(`
        <div style="text-align: center;">
            <h4 style="margin: 5px 0;">🌸 Cherry Blossoms</h4>
            <p style="margin: 5px 0; font-size: 12px;">Spring Beauty<br>Photo Spot</p>
            <div style="margin-top: 5px; font-size: 40px;">🌸</div>
        </div>
    `);

    cherryMarker.on('mouseover', function(e) {
        this.openPopup();
    });

    // Draw Route 1 (Walking route from Parking)
    L.Routing.control({
        waypoints: [
            L.latLng(locations.dowlingGarage[0], locations.dowlingGarage[1]),
            L.latLng(locations.breedHall[0], locations.breedHall[1])
        ],
        router: L.Routing.osrmv1({
            serviceUrl: 'https://router.project-osrm.org/route/v1',
            profile: 'foot'
        }),
        lineOptions: {
            styles: [{color: '#2196F3', opacity: 0.7, weight: 4, dashArray: '10, 5'}]
        },
        show: false,
        addWaypoints: false,
        routeWhileDragging: false,
        draggableWaypoints: false,
        fitSelectedRoutes: false,
        showAlternatives: false,
        createMarker: function() { return null; }
    }).addTo(map);

    // Draw Route 2 (Scenic Walking route)
    L.Routing.control({
        waypoints: [
            L.latLng(locations.dowlingGarage[0], locations.dowlingGarage[1]),
            L.latLng(locations.cherry[0], locations.cherry[1]),
            L.latLng(locations.elephant[0], locations.elephant[1]),
            L.latLng(locations.breedHall[0], locations.breedHall[1])
        ],
        router: L.Routing.osrmv1({
            serviceUrl: 'https://router.project-osrm.org/route/v1',
            profile: 'foot'
        }),
        lineOptions: {
            styles: [{color: '#FF9800', opacity: 0.7, weight: 4, dashArray: '5, 10'}]
        },
        show: false,
        addWaypoints: false,
        routeWhileDragging: false,
        draggableWaypoints: false,
        fitSelectedRoutes: false,
        showAlternatives: false,
        createMarker: function() { return null; }
    }).addTo(map);

    // Draw Route 3 (Walking route from T Station)
    L.Routing.control({
        waypoints: [
            L.latLng(locations.tuftsStation[0], locations.tuftsStation[1]),
            L.latLng(locations.breedHall[0], locations.breedHall[1])
        ],
        router: L.Routing.osrmv1({
            serviceUrl: 'https://router.project-osrm.org/route/v1',
            profile: 'foot'
        }),
        lineOptions: {
            styles: [{color: '#9C27B0', opacity: 0.7, weight: 4, dashArray: '15, 5'}]
        },
        show: false,
        addWaypoints: false,
        routeWhileDragging: false,
        draggableWaypoints: false,
        fitSelectedRoutes: false,
        showAlternatives: false,
        createMarker: function() { return null; }
    }).addTo(map);

    // Add Legend
    var legend = L.control({position: 'bottomright'});
    legend.onAdd = function(map) {
        var div = L.DomUtil.create('div', 'map-legend');
        div.innerHTML = `
            <div style="background: white; padding: 10px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
                <h4 style="margin: 0 0 10px 0; font-size: 14px;">Legend</h4>
                <div style="margin: 5px 0;"><span style="color: #4CAF50; font-weight: bold;">🅿️</span> Parking Start</div>
                <div style="margin: 5px 0;"><span style="color: #FF5722; font-weight: bold;">T</span> T Station</div>
                <div style="margin: 5px 0;"><span style="color: #F44336; font-weight: bold;">🎯</span> Event Venue</div>
                <div style="margin: 5px 0;"><span style="font-size: 18px;">🐘</span> Jumbo Statue</div>
                <div style="margin: 5px 0;"><span style="font-size: 18px;">🌸</span> Cherry Blossoms</div>
                <div style="margin: 5px 0;"><span style="display: inline-block; width: 30px; height: 3px; background: #2196F3;"></span> From Parking</div>
                <div style="margin: 5px 0;"><span style="display: inline-block; width: 30px; height: 3px; background: #9C27B0;"></span> From T Station</div>
                <div style="margin: 5px 0;"><span style="display: inline-block; width: 30px; height: 3px; background: #FF9800;"></span> Scenic Route</div>
            </div>
        `;
        return div;
    };
    legend.addTo(map);

    // Fit map view to show all markers
    var group = L.featureGroup([startMarker, tStationMarker, endMarker, elephantMarker, cherryMarker]);
    map.fitBounds(group.getBounds().pad(0.1));
}

// Initialize map after page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTuftsMap);
} else {
    initTuftsMap();
}


