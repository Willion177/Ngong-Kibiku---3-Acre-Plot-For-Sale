<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ngong Kibiku 3 Acre Plot - Interactive 3D Map</title>
    
    <link href='https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css' rel='stylesheet' />
    <script src='https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js'></script>
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: #111827;
            color: white;
            overflow: hidden;
        }

        .container {
            display: flex;
            flex-direction: column;
            height: 100vh;
        }

        .header {
            background: linear-gradient(to right, #16a34a, #059669);
            padding: 1rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        }

        .header-content {
            max-width: 1280px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .header-title {
            font-size: 1.5rem;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .header-subtitle {
            color: #d1fae5;
            font-size: 0.875rem;
            margin-top: 0.25rem;
        }

        .header-right {
            text-align: right;
        }

        .header-location {
            font-size: 0.875rem;
        }

        .header-distance {
            font-size: 0.75rem;
            color: #d1fae5;
        }

        .icon {
            width: 1.5rem;
            height: 1.5rem;
        }

        .controls {
            background: #1f2937;
            border-bottom: 1px solid #374151;
        }

        .controls-content {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0.75rem 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .view-buttons {
            display: flex;
            gap: 0.5rem;
        }

        .view-btn {
            padding: 0.5rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 500;
            transition: all 0.3s;
            background: #374151;
            color: #d1d5db;
            border: none;
            cursor: pointer;
        }

        .view-btn:hover {
            background: #4b5563;
        }

        .view-btn.active {
            background: #16a34a;
            color: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        }

        .btn-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .btn-content .icon {
            width: 1rem;
            height: 1rem;
        }

        .btn-subtitle {
            font-size: 0.75rem;
            margin-top: 0.25rem;
            opacity: 0.8;
        }

        .action-buttons {
            display: flex;
            gap: 0.5rem;
        }

        .action-btn {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            transition: all 0.3s;
            border: none;
            cursor: pointer;
            font-size: 0.875rem;
        }

        .action-btn .icon {
            width: 1rem;
            height: 1rem;
        }

        .tour-btn {
            background: #2563eb;
            color: white;
        }

        .tour-btn:hover {
            background: #1d4ed8;
        }

        .tour-btn:disabled {
            background: #4b5563;
            color: #9ca3af;
            cursor: not-allowed;
        }

        .reset-btn {
            background: #374151;
            color: white;
        }

        .reset-btn:hover {
            background: #4b5563;
        }

        .map-container {
            flex: 1;
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        .map {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            display: none;
        }

        .map.active {
            display: block !important;
        }

        .map canvas {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
        }

        .map-watermark {
            position: absolute;
            bottom: 4rem;
            left: 50%;
            transform: translateX(-50%);
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.25);
            font-weight: 500;
            letter-spacing: 1px;
            z-index: 5;
            pointer-events: none;
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
            font-family: 'Courier New', monospace;
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .editable-watermark {
            font-weight: 600;
        }

        .info-panel {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(10px);
            padding: 1rem;
            border-radius: 0.5rem;
            max-width: 24rem;
            color: white;
            z-index: 10;
        }

        .mobile-toggle {
            display: none;
            width: 100%;
            padding: 0.75rem;
            background: #16a34a;
            color: white;
            border: none;
            border-radius: 0.5rem;
            font-weight: bold;
            cursor: pointer;
            margin-bottom: 0.5rem;
        }

        .panel-content {
            display: block;
        }

        .info-content h3 {
            color: #4ade80;
            margin-bottom: 0.75rem;
            font-size: 1.125rem;
            font-weight: bold;
        }

        .info-content ul {
            list-style: none;
            font-size: 0.875rem;
            margin-bottom: 1rem;
        }

        .info-content li {
            margin-bottom: 0.5rem;
            display: flex;
            align-items: start;
            gap: 0.5rem;
        }

        .marker {
            flex-shrink: 0;
        }

        .marker.blue {
            color: #3b82f6;
        }

        .property-section {
            margin-top: 1.5rem;
            padding: 1rem;
            background: linear-gradient(135deg, #16a34a 0%, #059669 100%);
            border-radius: 0.5rem;
            border: 2px solid #4ade80;
            box-shadow: 0 4px 12px rgba(22, 163, 74, 0.4);
        }

        .property-section h4 {
            color: #fff;
            font-size: 1rem;
            margin-bottom: 0.75rem;
            text-align: center;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .property-section p {
            color: #d1fae5;
            font-size: 0.875rem;
            margin-bottom: 0.5rem;
            line-height: 1.6;
        }

        .property-section strong {
            color: #ffffff;
            font-weight: bold;
        }

        .editable {
            color: #fde047;
            font-weight: bold;
        }

        .controls-info {
            position: absolute;
            bottom: 1rem;
            left: 1rem;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
            padding: 1rem;
            border-radius: 0.5rem;
            max-width: 20rem;
            font-size: 0.875rem;
            z-index: 10;
        }

        .controls-info h3 {
            color: #4ade80;
            margin-bottom: 0.5rem;
            font-weight: bold;
        }

        .controls-info ul {
            list-style: none;
        }

        .controls-info li {
            margin-bottom: 0.25rem;
            font-size: 0.75rem;
        }

        .controls-toggle {
            display: none;
            width: 100%;
            padding: 0.75rem;
            background: #3b82f6;
            color: white;
            border: none;
            border-radius: 0.5rem;
            font-weight: bold;
            cursor: pointer;
            margin-bottom: 0.5rem;
        }

        .controls-panel-content {
            display: block;
        }

        .loading {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(17, 24, 39, 0.95);
            z-index: 1000;
        }

        .loading.hidden {
            display: none;
        }

        .loading-content {
            text-align: center;
        }

        .spinner {
            width: 4rem;
            height: 4rem;
            border: 4px solid #374151;
            border-top-color: #16a34a;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        .loading-text {
            font-size: 1.125rem;
        }

        .loading-subtext {
            font-size: 0.875rem;
            color: #9ca3af;
            margin-top: 0.5rem;
        }

        .footer {
            background: #1f2937;
            border-top: 1px solid #374151;
            padding: 0.5rem 1rem;
        }

        .footer-content {
            max-width: 1280px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.875rem;
            color: #9ca3af;
        }

        .footer-info {
            display: flex;
            gap: 1.5rem;
        }

        .footer-credit {
            font-size: 0.75rem;
        }

        @media (max-width: 768px) {
            .header-content {
                flex-direction: column;
                gap: 0.5rem;
            }
            
            .header-right {
                text-align: left;
            }
            
            .controls-content {
                flex-direction: column;
                gap: 0.5rem;
            }
            
            .footer-content {
                flex-direction: column;
                gap: 0.5rem;
            }
            
            .info-panel {
                max-width: calc(100% - 2rem);
                top: auto;
                bottom: 1rem;
                right: 1rem;
                left: 1rem;
                max-height: 60vh;
                overflow-y: auto;
                padding: 0.75rem;
            }
            
            .mobile-toggle {
                display: block;
            }
            
            .info-content .panel-content {
                display: none;
            }
            
            .info-content:not(.collapsed) .panel-content {
                display: block;
            }
            
            .controls-info {
                bottom: auto;
                top: 1rem;
                left: 1rem;
                right: auto;
                max-width: calc(100% - 2rem);
                padding: 0.75rem;
                background: rgba(0, 0, 0, 0.85);
            }
            
            .controls-toggle {
                display: block;
            }
            
            .controls-info .controls-panel-content {
                display: none;
            }
            
            .controls-info:not(.collapsed) .controls-panel-content {
                display: block;
            }
            
            .info-content h3 {
                font-size: 1rem;
            }
            
            .info-content ul {
                font-size: 0.8rem;
            }
            
            .property-section {
                margin-top: 1rem;
                padding: 0.75rem;
            }
            
            .property-section h4 {
                font-size: 0.875rem;
            }
            
            .property-section p {
                font-size: 0.75rem;
            }
            
            .info-panel {
                z-index: 11;
            }
            
            .controls-info {
                z-index: 10;
            }

            .map-watermark {
                font-size: 0.65rem;
                bottom: 3.5rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header class="header">
            <div class="header-content">
                <div class="header-left">
                    <h1 class="header-title">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        Ngong Kibiku - 3 Acre Plot
                    </h1>
                    <p class="header-subtitle">
                        3 Acres (1.2 Ha) | Coordinates: -1.343562, 36.623998
                    </p>
                </div>
                <div class="header-right">
                    <p class="header-location">Ngong-Suswa Road, Baboon Crescent</p>
                    <p class="header-distance">~9km west of Ngong Town</p>
                </div>
            </div>
        </header>

        <div class="controls">
            <div class="controls-content">
                <div class="view-buttons">
                    <button id="regionalBtn" class="view-btn active">
                        <div class="btn-content">
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path>
                            </svg>
                            Regional View
                        </div>
                        <div class="btn-subtitle">Ngong Town to Plot</div>
                    </button>
                    <button id="localBtn" class="view-btn">
                        <div class="btn-content">
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                            </svg>
                            Local View
                        </div>
                        <div class="btn-subtitle">Plot Detail & Boundary</div>
                    </button>
                </div>
                
                <div class="action-buttons">
                    <button id="tourBtn" class="action-btn tour-btn">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                        Start Tour
                    </button>
                    <button id="resetBtn" class="action-btn reset-btn">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 4v6h6M23 20v-6h-6"></path>
                            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                        </svg>
                        Reset View
                    </button>
                </div>
            </div>
        </div>

        <div class="map-container">
            <div id="regionalMap" class="map active"></div>
            <div id="localMap" class="map"></div>

            <div class="map-watermark">
                <svg style="width:16px;height:16px;" viewBox="0 0 24 24" fill="rgba(255,255,255,0.3)">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                mapped by <span class="editable-watermark">kironji</span>
            </div>

            <div class="info-panel" id="infoPanel">
                <div id="regionalInfo" class="info-content collapsed">
                    <button class="mobile-toggle" id="regionalToggle">ℹ️ View Info</button>
                    <div class="panel-content">
                        <h3>Regional Overview</h3>
                        <ul>
                            <li><span class="marker blue">●</span> Route from Kahara Road start (blue line)</li>
                            <li><span class="marker">📍</span> Via: Kahara Rd → Baboon Crescent → Plot</li>
                            <li><span class="marker">🗺️</span> Line follows actual roads</li>
                            <li><span class="marker">📏</span> Direct route to plot</li>
                        </ul>
                        
                        <div class="property-section">
                            <h4>Property Details</h4>
                            <p><strong>Size:</strong> 3 Acres (1.2 Hectares)</p>
                            <p><strong>Dimensions:</strong> ~128m x 108m (irregular)</p>
                            <p><strong>Zoning:</strong> High-density mixed-use</p>
                            <p><strong>Status:</strong> Undeveloped, partially fenced</p>
                            <p><strong>Soil:</strong> Red soil over murram</p>
                            <p><strong>Price:</strong> <span class="editable">KES 25,000,000</span></p>
                        </div>
                    </div>
                </div>
                <div id="localInfo" class="info-content collapsed" style="display: none;">
                    <button class="mobile-toggle" id="localToggle">ℹ️ View Info</button>
                    <div class="panel-content">
                        <h3>Local Detail View</h3>
                        <ul>
                            <li><span class="marker">📍</span> 3-acre plot marked with pin</li>
                            <li><span class="marker blue">●</span> Access road shown (blue line)</li>
                            <li><span class="marker">🗺️</span> Zoom to see nearby facilities</li>
                            <li><span class="marker">📏</span> Level ground, red soil over murram</li>
                        </ul>
                        
                        <div class="property-section">
                            <h4>Property Details</h4>
                            <p><strong>Size:</strong> 3 Acres (1.2 Hectares)</p>
                            <p><strong>Shape:</strong> Rectangular with SW triangular cut</p>
                            <p><strong>Ideal for:</strong> Residential estates, Institutional projects</p>
                            <p><strong>Topography:</strong> Level ground</p>
                            <p><strong>Price:</strong> <span class="editable">KES 25,000,000</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="controls-info collapsed" id="controlsInfo">
                <button class="controls-toggle" id="controlsToggle">🎮 Map Controls</button>
                <div class="controls-panel-content">
                    <h3>Map Controls</h3>
                    <ul>
                        <li>🖱️ <strong>Click + Drag:</strong> Pan map</li>
                        <li>🔍 <strong>Scroll:</strong> Zoom in/out</li>
                        <li>⌨️ <strong>Right Click + Drag:</strong> Rotate/tilt</li>
                        <li>🎬 <strong>Start Tour:</strong> Animated flythrough</li>
                    </ul>
                </div>
            </div>

            <div id="loading" class="loading">
                <div class="loading-content">
                    <div class="spinner"></div>
                    <p class="loading-text">Loading 3D Maps...</p>
                    <p class="loading-subtext">Fetching terrain and satellite imagery</p>
                </div>
            </div>
        </div>

        <footer class="footer">
            <div class="footer-content">
                <div class="footer-info">
                    <span>📏 Size: 3 Acres (1.2 Ha)</span>
                    <span>🛣️ Location: Baboon Crescent, Ngong-Suswa Road</span>
                    <span>📍 Zoned: High-density mixed-use</span>
                </div>
                <div class="footer-credit">Powered by Mapbox Satellite</div>
            </footer>
    </div>

    <script>
        // Give Mapbox time to load
        setTimeout(function() {
            mapboxgl.accessToken = 'pk.eyJ1Ijoia2lyb25qaWdnIiwiYSI6ImNtaDc5enB6NzBxZXQya3NpbHh3cTdxaTUifQ.PvzCNIg-j8EbgpJqHZK7sQ';

            const PLOT_CENTER = [36.623998, -1.343562];
            const KAHARA_RD_START = [36.65432597942627, -1.3615885863095807];
            const LOCAL_VIEW_START = [36.63186285028473, -1.3465922684695546];

            let regionalMap = null;
            let localMap = null;
            let isTouring = false;
            let currentView = 'regional';

            initRegionalMap();
            initLocalMap();
            setupEventListeners();

        function createSimplePlotPin() {
            const pinContainer = document.createElement('div');
            pinContainer.style.cssText = 'width:32px;height:40px;position:relative;cursor:pointer';
            
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('viewBox', '0 0 32 40');
            svg.setAttribute('width', '32');
            svg.setAttribute('height', '40');
            svg.style.cssText = 'filter:drop-shadow(0 2px 4px rgba(0,0,0,0.6))';
            
            const head = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            head.setAttribute('cx', '16');
            head.setAttribute('cy', '12');
            head.setAttribute('r', '10');
            head.setAttribute('fill', '#ef4444');
            head.setAttribute('stroke', '#ffffff');
            head.setAttribute('stroke-width', '2');
            
            const body = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
            body.setAttribute('points', '16,40 8,20 24,20');
            body.setAttribute('fill', '#ef4444');
            body.setAttribute('stroke', '#ffffff');
            body.setAttribute('stroke-width', '1');
            
            svg.appendChild(head);
            svg.appendChild(body);
            pinContainer.appendChild(svg);
            
            return pinContainer;
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
        }, 500);
    </script>
</body>
</html>
