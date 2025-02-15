// Map initialization and management
class MapManager {
    constructor() {
        this.map = null;
        this.layers = new Map();
        this.initialize();
    }

    initialize() {
        // Initialize the map
        this.map = L.map('map').setView([0, 0], 2);

        // Add OpenStreetMap tile layer as base
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(this.map);

        // Initialize map event listeners
        this.setupEventListeners();

        // Request initial configuration from main process
        this.requestConfig();
    }

    setupEventListeners() {
        this.map.on('moveend', () => {
            this.saveMapState();
        });

        this.map.on('zoomend', () => {
            this.saveMapState();
        });
    }

    requestConfig() {
        // Request map configuration from main process
        const { ipcRenderer } = require('electron');
        ipcRenderer.send('get-map-config');
        
        ipcRenderer.on('map-config', (event, config) => {
            this.applyConfig(config);
        });
    }

    applyConfig(config) {
        // Apply saved map state
        if (config.center && config.zoom) {
            this.map.setView(config.center, config.zoom);
        }

        // Load saved layers
        if (config.layers) {
            config.layers.forEach(layer => {
                this.addLayer(layer);
            });
        }
    }

    saveMapState() {
        const center = this.map.getCenter();
        const zoom = this.map.getZoom();
        const layers = Array.from(this.layers.keys());

        const { ipcRenderer } = require('electron');
        ipcRenderer.send('save-map-config', {
            center: [center.lat, center.lng],
            zoom,
            layers
        });
    }

    addLayer(layerConfig) {
        // STUB: Layer addition logic
        // TODO: Implement full layer management with:
        // - Historical map layers
        // - Vector overlays
        // - Custom tile layers
        console.log('Adding layer:', layerConfig);
    }

    removeLayer(layerId) {
        if (this.layers.has(layerId)) {
            const layer = this.layers.get(layerId);
            this.map.removeLayer(layer);
            this.layers.delete(layerId);
            this.saveMapState();
        }
    }

    // STUB: Additional map functionality
    // TODO: Implement:
    // - Historical feature querying
    // - Time-based filtering
    // - Custom controls
    // - Integration with editor
}

// Export singleton instance
const mapManager = new MapManager();
module.exports = mapManager; 