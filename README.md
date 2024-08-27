
# React Dashboard App
## Overview

This is a React application that dynamically toggles between a dashboard and table content. The dashboard provides a variety of visualizations, including bar charts, pie charts, and line graphs, focused on cybersecurity data. The app fetches data via an API with a proxy setup and uses manual data as a fallback to ensure seamless operation.

You can view the app live [here](https://aaryanpalve5.github.io/reactdashboard/).

## Features

- **Data Fetching:** Retrieves data from an external API with a proxy setup. Manual data is used as a fallback in case of API failures.
- **Dashboard Visualizations:**
  - **Bar Chart:** Displays categorized data.
  - **Pie Chart:** Provides a visual representation of data proportions.
  - **Line Chart:** Shows time-series data related to cybersecurity incidents.
- **Table View:** Offers a detailed tabular view of the fetched data, making it easy to analyze individual records.
- **Responsive Design:** The app is designed to be responsive, ensuring compatibility across various screen sizes.
- **Interactive Filtering:** Users can filter data based on different categories and users.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Redux**: For state management.
- **Ant Design**: UI framework providing a set of high-quality components and interactions.
- **Recharts**: A charting library built with React components.
- **JavaScript (ES6+)**: For scripting.
- **CSS**: For styling components

## Usage

1. **Toggle Views:** Use the button provided to toggle between the dashboard and table views.
2. **Filter Data:** Apply filters using the dropdowns to refine the data shown in the charts or table.
3. **Refresh Data:** Click on the "Refresh Data" button to fetch the latest data from the API.
4. **Reset Filters:** Use the "Reset Filters" button to clear all applied filters.
