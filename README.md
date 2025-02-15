# Ad Mundum Desktop Application

Ad Mundum is a cross-platform Electron-based desktop application that unifies the best mapping and historical data tools from the OpenHistoricalMap (OHM) ecosystem. Designed with academic research and historical geographic analysis in mind, it brings together interactive mapping, comprehensive layer management, robust querying, and editing capabilities into one cohesive experience.

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

1. **Clone the Repositories:**  
   Ensure both the `OpenHistoricalMap/` repository (with core tools and libraries) and the `ad-mundum/` repository (for app-specific code) are cloned.

2. **Install Dependencies:**  
   Navigate to the `ad-mundum/` folder and install your dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn
   ```

3. **Run the Application:**  
   Launch the app in development mode via Electron:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

4. **Build for Production:**  
   Package the application for your target platforms using Electron Builder or another packaging tool.

## Contributing

- **Code Guidelines:**  
  Follow the standards laid out in the .cursorrules file. Reuse and adapt existing code from the OHM repositories whenever possible.
  
- **Clear and Complete:**  
  Ensure that functions are fully implemented before moving on, and keep the code concise and well-documented.
  
- **Modular Design:**  
  Maintain a clean separation between the core OHM functionality and application-specific customizations.

## Additional Resources

- [Electron Documentation](https://www.electronjs.org/docs)  
- [OpenHistoricalMap Wiki](https://wiki.openhistoricalmap.org/)  
- For detailed repository-specific info, consult the README files within the `OpenHistoricalMap/` folder.

## License

Include your project license details here. Ad Mundum integrates several open-source components, so ensure all third-party licenses are properly maintained and attributed.
