# Hotel Visitor Analytics

A data visualization tool for hotel visitor analytics, providing insights into visitor demographics and arrival patterns. The tool displays data in various chart formats, allowing users to filter and analyze visitor statistics.

<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/71365444/282014304-ca32ded6-12d2-422d-a134-14418ee8cd25.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20231110%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231110T091656Z&X-Amz-Expires=300&X-Amz-Signature=333db777acda8990df8bda64234bfe86c9f7a1c7d07ae63e65fed5009e71ac5f&X-Amz-SignedHeaders=host&actor_id=71365444&key_id=0&repo_id=716484995"/>

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
