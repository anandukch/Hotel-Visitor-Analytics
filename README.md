# Hotel Visitor Analytics

A data visualization tool for hotel visitor analytics, providing insights into visitor demographics and arrival patterns. The tool displays data in various chart formats, allowing users to filter and analyze visitor statistics.

## Features

- **Date Range Filtering:** Filter visitor data by specific date ranges.
- **Multiple Chart Views:** Visualize visitor data using time series, country-wise, and sparkline charts.
- **Data Analytics:** Obtain insights into total visitors per day, visitors per country, and specific visitor demographics.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/anandukch/Hotel-Visitor-Analytics
2. **Install Dependencies:**
   ```bash
   cd Hotel-Visitor-Analytics
   npm install
3. **Run the App:**
   ```bash
   npm run dev
   ```

## Tech Stack
* **`React`** : Frontend framework for building the user interface.
* **`TypeScript`** : Typed JavaScript for robust code.
* **`ApexCharts`** : Library for interactive charts.
* **`Mui/X Date Pickers`** : Material-UI library for date pickers.
* **`Jest, React Testing Library`** : Testing tools for automated tests.

## Usage
1. **App Structure:**
   * The main application (App.tsx) houses the core components.
   * components/ contains individual chart components.
   * data/ stores sample data in JSON format.
2. **Date Filtering:**
   * Use the date pickers to select a date range.
   * Click "Apply" to update the displayed charts.
3. **Chart Components:**
   * `TimeChart.tsx`: Displays a time series chart.
   * `CountryChart.tsx`: Illustrates visitor numbers per country.
   * `SparklineChart.tsx`: Shows sparkline charts for specific visitor demographics.


## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature`).
3. Commit changes (`git commit -am 'Add feature'`).
4. Push the branch (`git push origin feature`).
5. Create a pull request.
