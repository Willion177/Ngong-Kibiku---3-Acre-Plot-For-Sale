// Mapbox Access Token
mapboxgl.accessToken = 'pk.eyJ1Ijoia2lyb25qaWdnIiwiYSI6ImNtaDc5enB6NzBxZXQya3NpbHh3cTdxaTUifQ.PvzCNIg-j8EbgpJqHZK7sQ';

// COORDINATES
const PLOT_CENTER = [36.623998, -1.343562];
const KAHARA_RD_START = [36.65432597942627, -1.3615885863095807]; // Regional start (Kahara Rd beginning)
const LOCAL_VIEW_START = [36.63186285028473, -1.3465922684695546]; // Local start

// State
let regionalMap = null;
let localMap = null;
let isTouring = false;
let currentView = 'regional';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initRegionalMap();
    initLocalMap();
    setupEventListeners();
});

function createSimplePlotPin() {
    const container = document.createElement('div');
    container.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        cursor: pointer;
    `;
    
    const pin = document.createElement('div');
    pin.style.cssText = `
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        filter: drop-shadow(0 4px 8px rgba(0,0,0,0.6));
    `;
    pin.textContent = '📍';
    
    const label = document.createElement('div');
    label.style.cssText = `
        background: linear-gradient(135deg, #16a34a 0%, #059669 100%);
        color: white;
        padding: 6px 14px;
        border-radius: 6px;
        font-size: 12px;
        font-weight: bold;
        white-space: nowrap;
        box-shadow: 0 3px 8px rgba(22, 163, 74, 0.5);
        border: 2px solid #4ade80;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    `;
    label.textContent = 'PLOT FOR SALE';
    
    container.appendChild(pin);
    container.appendChild(label);
    
    return container;
}

function initRegionalMap() {
    regionalMap = new mapboxgl.Map({
        container: 'regionalMap',
        style: 'mapbox://styles/mapbox/satellite-streets-v12',
        center: [36.64, -1.35],
        zoom: 12,
        pitch: 50,
        bearing: 0,
        antialias: true
    });

    regionalMap.on('load', async () => {
        console.log('Regional map loaded');
        
        regionalMap.addSource('mapbox-dem', {
            type: 'raster-dem',
            url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
            tileSize: 512,
            maxzoom: 14
        });
        regionalMap.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 });

        regionalMap.addLayer({
            id: 'sky',
            type: 'sky',
            paint: {
                'sky-type': 'atmosphere',
                'sky-atmosphere-sun': [0.0, 90.0],
                'sky-atmosphere-sun-intensity': 15
            }
        });

        // Get route from Kahara Rd start to Plot (follows actual roads)
        try {
            const response = await fetch(
                `https://api.mapbox.com/directions/v5/mapbox/driving/${KAHARA_RD_START[0]},${KAHARA_RD_START[1]};${PLOT_CENTER[0]},${PLOT_CENTER[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`
            );
            const data = await response.json();
            
            if (data.routes && data.routes[0]) {
                regionalMap.addSource('main-route', {
                    type: 'geojson',
                    data: { type: 'Feature', geometry: data.routes[0].geometry }
                });

                regionalMap.addLayer({
                    id: 'main-route-layer',
                    type: 'line',
                    source: 'main-route',
                    paint: {
                        'line-color': '#3b82f6',
                        'line-width': 5,
                        'line-opacity': 0.9
                    }
                });
            }
        } catch (error) {
            console.error('Error fetching regional route:', error);
        }

        // Add simple plot pin
        const plotPin = createSimplePlotPin();
        new mapboxgl.Marker({ element: plotPin, anchor: 'bottom' })
            .setLngLat(PLOT_CENTER)
            .addTo(regionalMap);

        hideLoading();
    });
}

function initLocalMap() {
    localMap = new mapboxgl.Map({
        container: 'localMap',
        style: 'mapbox://styles/mapbox/satellite-streets-v12',
        center: PLOT_CENTER,
        zoom: 15,
        pitch: 55,
        bearing: -20,
        antialias: true
    });

    localMap.on('load', async () => {
        console.log('Local map loaded');
        
        localMap.addSource('mapbox-dem', {
            type: 'raster-dem',
            url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
            tileSize: 512,
            maxzoom: 14
        });
        localMap.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 });

        localMap.addLayer({
            id: 'sky',
            type: 'sky',
            paint: {
                'sky-type': 'atmosphere',
                'sky-atmosphere-sun': [0.0, 90.0],
                'sky-atmosphere-sun-intensity': 15
            }
        });

        // Get route from local start point to Plot
        try {
            const response = await fetch(
                `https://api.mapbox.com/directions/v5/mapbox/driving/${LOCAL_VIEW_START[0]},${LOCAL_VIEW_START[1]};${PLOT_CENTER[0]},${PLOT_CENTER[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`
            );
            const data = await response.json();
            
            if (data.routes && data.routes[0]) {
                localMap.addSource('local-route', {
                    type: 'geojson',
                    data: { type: 'Feature', geometry: data.routes[0].geometry }
                });

                localMap.addLayer({
                    id: 'local-route-layer',
                    type: 'line',
                    source: 'local-route',
                    paint: {
                        'line-color': '#3b82f6',
                        'line-width': 6,
                        'line-opacity': 0.8
                    }
                });
            }
        } catch (error) {
            console.error('Error fetching local route:', error);
        }

        // Add simple plot pin
        const plotPin = createSimplePlotPin();
        new mapboxgl.Marker({ element: plotPin, anchor: 'bottom' })
            .setLngLat(PLOT_CENTER)
            .addTo(localMap);

        hideLoading();
    });
}

function setupEventListeners() {
    const regionalBtn = document.getElementById('regionalBtn');
    const localBtn = document.getElementById('localBtn');
    const tourBtn = document.getElementById('tourBtn');
    const resetBtn = document.getElementById('resetBtn');
    const regionalToggle = document.getElementById('regionalToggle');
    const localToggle = document.getElementById('localToggle');
    const controlsToggle = document.getElementById('controlsToggle');
    const controlsInfo = document.getElementById('controlsInfo');
    const regionalInfo = document.getElementById('regionalInfo');
    const localInfo = document.getElementById('localInfo');

    regionalBtn.addEventListener('click', () => switchView('regional'));
    localBtn.addEventListener('click', () => switchView('local'));
    tourBtn.addEventListener('click', startTour);
    resetBtn.addEventListener('click', resetView);
    
    if (regionalToggle) {
        regionalToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            regionalInfo.classList.toggle('collapsed');
            regionalToggle.textContent = regionalInfo.classList.contains('collapsed') ? 'ℹ️ View Info' : '✖️ Close Info';
        });
    }
    
    if (localToggle) {
        localToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            localInfo.classList.toggle('collapsed');
            localToggle.textContent = localInfo.classList.contains('collapsed') ? 'ℹ️ View Info' : '✖️ Close Info';
        });
    }
    
    if (controlsToggle) {
        controlsToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            controlsInfo.classList.toggle('collapsed');
            controlsToggle.textContent = controlsInfo.classList.contains('collapsed') ? '🎮 Map Controls' : '✖️ Close';
        });
    }
}

function switchView(view) {
    currentView = view;
    
    const regionalMapEl = document.getElementById('regionalMap');
    const localMapEl = document.getElementById('localMap');
    const regionalBtn = document.getElementById('regionalBtn');
    const localBtn = document.getElementById('localBtn');
    const regionalInfo = document.getElementById('regionalInfo');
    const localInfo = document.getElementById('localInfo');

    if (view === 'regional') {
        regionalMapEl.classList.add('active');
        localMapEl.classList.remove('active');
        regionalBtn.classList.add('active');
        localBtn.classList.remove('active');
        regionalInfo.style.display = 'block';
        localInfo.style.display = 'none';
        setTimeout(() => regionalMap.resize(), 100);
    } else {
        localMapEl.classList.add('active');
        regionalMapEl.classList.remove('active');
        localBtn.classList.add('active');
        regionalBtn.classList.remove('active');
        localInfo.style.display = 'block';
        regionalInfo.style.display = 'none';
        setTimeout(() => localMap.resize(), 100);
    }
}

function startTour() {
    if (isTouring) return;
    
    const tourBtn = document.getElementById('tourBtn');
    const map = currentView === 'regional' ? regionalMap : localMap;
    
    isTouring = true;
    tourBtn.disabled = true;
    tourBtn.innerHTML = `
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
        Touring...
    `;

    if (currentView === 'regional') {
        const tourStops = [
            { center: KAHARA_RD_START, zoom: 13, pitch: 45, bearing: 60, duration: 2500 },
            { center: [36.638, -1.348], zoom: 13.5, pitch: 48, bearing: 40, duration: 2500 },
            { center: [36.630, -1.345], zoom: 14, pitch: 50, bearing: 20, duration: 2500 },
            { center: [36.626, -1.344], zoom: 14.5, pitch: 52, bearing: 0, duration: 2500 },
            { center: PLOT_CENTER, zoom: 16, pitch: 55, bearing: 0, duration: 3500 }
        ];

        let currentStop = 0;
        const flyToNext = () => {
            if (currentStop < tourStops.length) {
                const stop = tourStops[currentStop];
                map.flyTo({ ...stop, essential: true });
                currentStop++;
                setTimeout(flyToNext, stop.duration);
            } else {
                setTimeout(() => {
                    map.stop();
                    map.setPitch(55);
                    map.setBearing(0);
                    endTour();
                }, 1500);
            }
        };
        flyToNext();
    } else {
        const tourStops = [
            { center: [36.621, -1.341], zoom: 15, pitch: 55, bearing: 0, duration: 2000 },
            { center: PLOT_CENTER, zoom: 16, pitch: 58, bearing: 90, duration: 2000 },
            { center: PLOT_CENTER, zoom: 16.5, pitch: 60, bearing: 180, duration: 2000 },
            { center: PLOT_CENTER, zoom: 16.5, pitch: 60, bearing: 270, duration: 2000 },
            { center: PLOT_CENTER, zoom: 16, pitch: 55, bearing: 0, duration: 2500 }
        ];

        let currentStop = 0;
        const flyToNext = () => {
            if (currentStop < tourStops.length) {
                const stop = tourStops[currentStop];
                map.flyTo({ ...stop, essential: true });
                currentStop++;
                setTimeout(flyToNext, stop.duration);
            } else {
                setTimeout(() => {
                    map.stop();
                    endTour();
                }, 1000);
            }
        };
        flyToNext();
    }
}

function endTour() {
    isTouring = false;
    const tourBtn = document.getElementById('tourBtn');
    tourBtn.disabled = false;
    tourBtn.innerHTML = `
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
        Start Tour
    `;
}

function resetView() {
    const map = currentView === 'regional' ? regionalMap : localMap;
    
    if (currentView === 'regional') {
        map.flyTo({
            center: [36.64, -1.35],
            zoom: 12,
            pitch: 50,
            bearing: 0,
            duration: 2000
        });
    } else {
        map.flyTo({
            center: PLOT_CENTER,
            zoom: 15,
            pitch: 55,
            bearing: -20,
            duration: 2000
        });
    }
}

function hideLoading() {
    const loading = document.getElementById('loading');
    if (regionalMap && localMap) {
        setTimeout(() => {
            loading.classList.add('hidden');
        }, 1000);
    }
}