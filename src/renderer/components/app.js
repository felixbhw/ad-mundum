// Import all managers
const mapManager = require('./map');
const layerManager = require('./layers');
const queryManager = require('./query');
const editorManager = require('./editor');

class AppManager {
    constructor() {
        this.initialize();
    }

    initialize() {
        // Ensure all managers are initialized
        this.validateManagers();
        
        // Set up global event handlers
        this.setupGlobalEvents();
        
        // Initialize IPC communication
        this.setupIPC();
        
        // Set up error handling
        this.setupErrorHandling();
    }

    validateManagers() {
        // Ensure all required managers are available and initialized
        const managers = {
            map: mapManager,
            layers: layerManager,
            query: queryManager,
            editor: editorManager
        };

        Object.entries(managers).forEach(([name, manager]) => {
            if (!manager) {
                throw new Error(`${name} manager is not initialized`);
            }
        });
    }

    setupGlobalEvents() {
        // Handle window resize
        window.addEventListener('resize', () => {
            if (mapManager.map) {
                mapManager.map.invalidateSize();
            }
        });

        // Handle keyboard shortcuts
        document.addEventListener('keydown', (event) => {
            this.handleKeyboardShortcut(event);
        });
    }

    setupIPC() {
        const { ipcRenderer } = require('electron');

        // Handle main process messages
        ipcRenderer.on('app-command', (event, command) => {
            this.handleAppCommand(command);
        });
    }

    setupErrorHandling() {
        window.onerror = (message, source, lineno, colno, error) => {
            this.handleError('Uncaught Error', error);
        };

        window.onunhandledrejection = (event) => {
            this.handleError('Unhandled Promise Rejection', event.reason);
        };
    }

    handleKeyboardShortcut(event) {
        // STUB: Keyboard shortcut handling
        // TODO: Implement full shortcut system:
        // - Configure shortcuts
        // - Handle tool activation
        // - Support custom bindings
        
        const shortcuts = {
            'l': () => layerManager.toggleLayerPanel(),
            'q': () => queryManager.toggleQueryPanel(),
            'e': () => editorManager.toggleEditorPanel()
        };

        if (!event.ctrlKey || event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
            return;
        }

        const handler = shortcuts[event.key.toLowerCase()];
        if (handler) {
            event.preventDefault();
            handler();
        }
    }

    handleAppCommand(command) {
        // STUB: App command handling
        // TODO: Implement full command system:
        // - Save/load state
        // - Import/export data
        // - Settings management
        
        console.log('Received app command:', command);
    }

    handleError(type, error) {
        console.error(`${type}:`, error);
        
        // STUB: Error handling
        // TODO: Implement full error handling:
        // - Error reporting
        // - User notification
        // - Error recovery
        // - Logging system
    }

    // STUB: Additional app functionality
    // TODO: Implement:
    // - Settings management
    // - State persistence
    // - Plugin system
    // - Update checking
}

// Initialize the application
const app = new AppManager();

// Make app instance available globally for debugging
window.app = app; 