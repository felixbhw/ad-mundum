# Ad Mundum Desktop Application

Ad Mundum is a cross-platform Electron-based desktop application that unifies the best mapping and historical data tools from the OpenHistoricalMap (OHM) ecosystem. Designed with academic research and historical geographic analysis in mind, it brings together interactive mapping, comprehensive layer management, robust querying, and editing capabilities into one cohesive experience.

## Current Implementation Status

### Core Features

#### ✅ Implemented
- Basic Electron application structure
- Main process and renderer process setup
- Interactive map display using Leaflet
- Basic UI layout with toolbar and panels
- Panel switching (Layers, Query, Editor)
- Keyboard shortcuts (Ctrl+L, Ctrl+Q, Ctrl+E)
- Basic state persistence using electron-store
- Window management and app lifecycle

#### 🚧 Partially Implemented (Stubbed)
- Layer Management:
  - UI for layer toggling
  - Basic layer list display
  - Layer addition/removal hooks
  
- Query Interface:
  - Query input panel
  - Example query loading
  - Query execution workflow
  
- Editor Tools:
  - Basic editing toolbar
  - Tool selection interface
  - Editor mode toggle

#### ⏳ Planned/TODO
- Full OHM Layer Index Integration
- Complete Overpass Turbo Integration
- iD Editor Integration
- Advanced Layer Controls
- Query Result Display
- Feature Editing Tools
- Data Export/Import
- Settings Management
- Plugin System

## Overview

Ad Mundum leverages code from multiple OHM repositories while adding custom integrations and desktop-specific functionality. The OHM repository (located in the `OpenHistoricalMap/` folder) contains detailed implementations and documentation for each component. This folder (`ad-mundum/`) holds the application-specific code that ties together those components using Electron.

## Key Features

- **Interactive Mapping Viewer:**  
  Display dynamic, historical maps with customizable layers and views, drawing on mapping components originally developed in the OHM website repository.
  
- **Layer Management:**  
  Integrate the layer index functionality (from the ohm-editor-layer-index repository) to let users browse, select, and adjust historical data layers effortlessly.
  
- **Query Interface:**  
  Use the power of Overpass Turbo (adapted for OHM) to run complex queries against historical map datasets directly within the desktop application.
  
- **Editing Tools:**  
  Incorporate the OHM fork of iD Editor to support interactive editing, tagging, and annotation of historical map data.

## How It Connects to OHM Repositories

- **ohm-website:**  
  Provides the core mapping components, user interaction patterns, and API integration. Its detailed info is maintained in the OHM folder's README.
  
- **ohm-editor-layer-index:**  
  Supplies a user interface and logic for managing and displaying traceable imagery and historical layer sources.
  
- **overpass-turbo:**  
  Offers a workbench for constructing and executing data queries on historical datasets, ensuring robust data interaction within the app.
  
- **iD Editor (OHM Fork):**  
  Brings interactive editing capabilities, allowing users to adjust and annotate map features directly in the application.

For more in-depth details on each repository's functionality, please refer to the comprehensive README in the `OpenHistoricalMap/` folder.

## Application Architecture

- **Electron-Based Desktop App:**  
  Ad Mundum wraps the web-centric OHM components in Electron, enabling a native desktop experience across Linux, Windows, and macOS.
  
- **Modular Integration:**  
  The architecture is modular: OHM repositories provide the specialized mapping and data tools, while the `ad-mundum/` folder contains the glue code and custom configurations that integrate these parts into a unified application.
  
- **Beginner-Friendly Design:**  
  Emphasis is placed on code reuse, clarity, and maintainability. Ad Mundum is designed for developers at any skill level with clear guidelines to help extend and customize its functionality.

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ad-mundum.git
cd ad-mundum
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the application:
```bash
npm start
# or
yarn start
```

### Development Mode
To run the application in development mode with DevTools:
```bash
npm run dev
# or
yarn dev
```

## Project Structure

```
ad-mundum/
├── src/
│   ├── main/
│   │   └── main.js           # Main Electron process
│   ├── renderer/
│   │   ├── components/
│   │   │   ├── app.js        # Main application logic
│   │   │   ├── map.js        # Map management
│   │   │   ├── layers.js     # Layer management
│   │   │   ├── query.js      # Query interface
│   │   │   └── editor.js     # Editor tools
│   │   ├── styles/
│   │   │   └── main.css      # Application styles
│   │   └── index.html        # Main application window
│   ├── shared/               # Shared utilities
│   └── ohm-integration/      # OHM-specific integration code
├── package.json
└── README.md
```

## Current Limitations and Known Issues

1. **Layer Management**
   - Historical map layers are currently stubbed
   - Layer persistence is basic
   - No layer opacity control

2. **Query System**
   - Overpass integration is stubbed
   - Query results are not displayed on map
   - No query history

3. **Editor**
   - Basic UI only
   - No actual editing capabilities yet
   - iD Editor integration pending

## Development Roadmap

### Phase 1 (Current)
- ✅ Basic application structure
- ✅ Map display
- ✅ UI framework
- 🚧 Basic layer management

### Phase 2 (Next)
- Full layer index integration
- Overpass query system
- Result display on map
- Layer controls

### Phase 3
- iD Editor integration
- Feature editing
- Data persistence
- Export/Import

### Phase 4
- Plugin system
- Settings management
- Advanced features
- Performance optimization

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenHistoricalMap project and contributors
- Leaflet mapping library
- Electron framework
- iD Editor project
