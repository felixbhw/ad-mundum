const mapManager = require('./map');

class LayerManager {
    constructor() {
        this.layerList = document.getElementById('layer-list');
        this.availableLayers = new Map();
        this.initialize();
    }

    initialize() {
        // Load available layers from OHM layer index
        this.loadAvailableLayers();
        
        // Set up UI event listeners
        this.setupEventListeners();
    }

    loadAvailableLayers() {
        // STUB: Layer loading from OHM layer index
        // TODO: Implement full layer index integration:
        // - Load from ohm-editor-layer-index
        // - Parse layer definitions
        // - Handle authentication if needed
        
        // Temporary test layers
        const testLayers = [
            {
                id: 'base-historical',
                name: 'Historical Base Map',
                type: 'tile',
                url: 'https://{s}.tile.openhistoricalmap.org/{z}/{x}/{y}.png'
            },
            {
                id: 'vector-historical',
                name: 'Historical Features',
                type: 'vector',
                source: 'ohm-api'
            }
        ];

        testLayers.forEach(layer => {
            this.availableLayers.set(layer.id, layer);
            this.addLayerToUI(layer);
        });
    }

    setupEventListeners() {
        // Layer toggle button
        const layerToggle = document.getElementById('layerToggle');
        layerToggle.addEventListener('click', () => {
            this.toggleLayerPanel();
        });

        // Layer list event delegation
        this.layerList.addEventListener('change', (event) => {
            if (event.target.type === 'checkbox') {
                const layerId = event.target.dataset.layerId;
                if (event.target.checked) {
                    this.enableLayer(layerId);
                } else {
                    this.disableLayer(layerId);
                }
            }
        });
    }

    addLayerToUI(layer) {
        const layerItem = document.createElement('div');
        layerItem.className = 'layer-item';
        layerItem.innerHTML = `
            <input type="checkbox" data-layer-id="${layer.id}">
            <span>${layer.name}</span>
        `;
        this.layerList.appendChild(layerItem);
    }

    toggleLayerPanel() {
        const panels = document.querySelectorAll('.panel-content');
        panels.forEach(panel => panel.classList.add('hidden'));
        document.getElementById('layer-panel').classList.remove('hidden');
    }

    enableLayer(layerId) {
        const layer = this.availableLayers.get(layerId);
        if (layer) {
            mapManager.addLayer(layer);
        }
    }

    disableLayer(layerId) {
        mapManager.removeLayer(layerId);
    }

    // STUB: Additional layer management functionality
    // TODO: Implement:
    // - Layer opacity control
    // - Layer ordering
    // - Custom layer addition
    // - Layer metadata display
}

// Export singleton instance
const layerManager = new LayerManager();
module.exports = layerManager; 