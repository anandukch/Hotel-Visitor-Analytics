import React, { useState } from "react";
import Hoteldata from "./data/hotel.json";
import TimeSeriesChart from "./components/TimeChart";
import CountryChart from "./components/CountryChart";
import { convertDate } from "./utils/date";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SparklineChart from "./components/SparklineChart";
import { Button } from "@mui/material";

const App: React.FC = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredData, setFilteredData] = useState(Hoteldata);

  const handleDateFilter = () => {
    if (!startDate || !endDate) return;
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

  const clearDateFilter = () => {
    setStartDate("");
    setEndDate("");
    setFilteredData(Hoteldata);
  };

  return (
    <div className="main">
      <div className="datePickerContainer">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Start Date"
            value={startDate}
            onChange={(date) => setStartDate(date || "")}
            slotProps={{ textField: { size: "small" } }}
          />
          <div className="date-seperator">to</div>
          <DatePicker
            defaultValue="11/09/2023"
            label="End Date"
            value={endDate}
            onChange={(date) => setEndDate(date || "")}
            slotProps={{ textField: { size: "small" } }}
          />
        </LocalizationProvider>
        <div className="btn_group">
          <Button
            variant="contained"
            style={{ marginLeft: "25px" }}
            className="filter_btn"
            onClick={handleDateFilter}
          >
            Apply
          </Button>
          <Button
            variant="contained"
            style={{ marginLeft: "25px" }}
            className="filter_btn"
            onClick={clearDateFilter}
          >
            Clear
          </Button>
        </div>
      </div>

      {/* Render charts with filtered data */}
      <div className="chartRow">
        <div className="chartContainer">
          <TimeSeriesChart
            data={filteredData}
            title="Number of visitors per day"
          />
        </div>
        <div className="chartContainer">
          <CountryChart
            data={filteredData}
            title="Number of visitors per country"
          />
        </div>
      </div>

      <div className="chartRow">
        <div className="chartContainer">
          <SparklineChart
            data={filteredData}
            title="Total Adults Per Day"
            type="adults"
          />
        </div>
        <div className="chartContainer">
          <SparklineChart data={filteredData} title="Total Children Per Day" />
        </div>
      </div>
    </div>
  );
};

export default App;
