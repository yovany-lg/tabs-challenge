# Tabs Challenge

## Project structure
- `pages/index`.tsx: main page of the app
- components: folder with all the components
  - `TabSection.tsx`: Component that renders the Tab section, it has the data to build the Tabs
  - TabComponents: Contains all the components related to the Tabs
    - `Tabs.tsx`: is the root component for Tabs
    - `TabList.tsx`: is the wrapper for the clicable buttons of the tabs
    - `Tab.tsx`: represents a single clickable tab
    - `TabPanels.tsx`: it is a simple fragment that serves as a wrapper for all the tab content panels
    - `TabPanel.tsx`: is the component for a single Tab Panel, which is the actual content of the tab

All the Tab Components have its own CSS module, `[Component].module.css`, that contains the required styles for each component.

In the CSS file `styles/global.css` there are some global variable definitions like the color for selected Tabs, and the fonts for Headings and Paragraphs.
