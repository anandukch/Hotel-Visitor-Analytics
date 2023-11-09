import React, { useState } from "react";
import Hoteldata from "./data/hotel.json";
import SparklineChart from "./test";
import TimeSeriesChart from "./components/TimeChart";
import CountryChart from "./components/CountryChart";
import { convertDate } from "./utils/date";

const App: React.FC = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredData, setFilteredData] = useState(Hoteldata);

  const handleDateFilter = () => {
    const formattedStartDate = convertDate(startDate);
    const formattedEndDate = convertDate(endDate);

    // date range filtering logic
    const filtered = Hoteldata.filter((item) => {
      const currentDate = `${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}`;
      return (
        currentDate >= formattedStartDate && currentDate <= formattedEndDate
      );
    });

    setFilteredData(filtered);
  };

  return (
    <div>
      {/* Date range filter */}
      <label htmlFor="startDate">Start Date:</label>
      <input
        type="date"
        id="startDate"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />

      <label htmlFor="endDate">End Date:</label>
      <input
        type="date"
        id="endDate"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />

      <button onClick={handleDateFilter}>Apply Date Range Filter</button>

      {/* Render charts with filtered data */}
      <TimeSeriesChart data={filteredData} />
      <CountryChart data={filteredData} />
      <SparklineChart data={filteredData} title="Total Visitors Per Day" />
      <SparklineChart data={filteredData} title="Total Visitors Per Day" />
    </div>
  );
};

export default App;
