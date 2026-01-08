mapboxgl.accessToken = 'pk.eyJ1Ijoia2lyb25qaWdnIiwiYSI6ImNtaDc5enB6NzBxZXQya3NpbHh3cTdxaTUifQ.PvzCNIg-j8EbgpJqHZK7sQ';

const PLOT_CENTER = [36.623998, -1.343562];
const KAHARA_RD_START = [36.65432597942627, -1.3615885863095807];
const LOCAL_VIEW_START = [36.63186285028473, -1.3465922684695546];

let regionalMap = null;
let localMap = null;
let isTouring = false;
let currentView = 'regional';

document.addEventListener('DOMContentLoaded', () => {
    initRegionalMap();
    initLocalMap();
    setupEventListeners();
});

function createSimplePlotPin() {
    const pin = document.createElement('div');
    pin.style.cssText = `
        width: 32px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.6));
        cursor: pointer;
    `;
    pin.textContent = '📍';
    
    return pin;
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
            { center: KAHARA_RD_START, zoom: 12, pitch: 40, bearing: 0, duration: 3000 },
            { center: [36.645, -1.355], zoom: 12.5, pitch: 45, bearing: 45, duration: 2500 },
            { center: [36.635, -1.349], zoom: 13, pitch: 48, bearing: 90, duration: 2500 },
            { center: [36.628, -1.344], zoom: 14, pitch: 50, bearing: 135, duration: 2500 },
            { center: PLOT_CENTER, zoom: 15, pitch: 55, bearing: 0, duration: 3000 }
        ];
        runTour(map, tourStops);
    } else {
        const tourStops = [
            { center: LOCAL_VIEW_START, zoom: 15, pitch: 50, bearing: 20, duration: 2000 },
            { center: [36.627, -1.344], zoom: 15.5, pitch: 55, bearing: 0, duration: 2000 },
            { center: PLOT_CENTER, zoom: 16, pitch: 60, bearing: -20, duration: 2000 }
        ];
        runTour(map, tourStops);
    }
}

function runTour(map, stops) {
    if (!stops.length) {
        endTour();
        return;
    }

    const stop = stops.shift();
    map.flyTo({
        ...stop,
        essential: true
    });

    map.once('moveend', () => {
        setTimeout(() => runTour(map, stops), 500);
    });
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
    const options = currentView === 'regional' 
        ? { center: [36.64, -1.35], zoom: 12, pitch: 50, bearing: 0 }
        : { center: PLOT_CENTER, zoom: 15, pitch: 55, bearing: -20 };
    
    map.flyTo({
        ...options,
        duration: 1500,
        essential: true
    });
}

function hideLoading() {
    const loading = document.getElementById('loading');
    loading.classList.add('hidden');
}
