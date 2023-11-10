import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { ChartOptions, ChartProps } from "../utils/type";
// import { useMediaQuery } from "@mui/material";

const TimeSeriesChart: React.FC<ChartProps> = ({ data, title }) => {
  // const matches = useMediaQuery("(min-width:600px)");
  // console.log(matches);
  

  const [chartData, setChartData] = useState<ChartOptions>({
    options: {
      chart: {
        id: "apexchart-timeseries-example",
      },
      xaxis: {
        categories: [],
      },
      title: {
        text: title,
      },
    },
    series: [
      {
        name: "Number of Visitors",
        data: [],
      },
    ],
  });

  useEffect(() => {
    const uniqueDates = Array.from(
      new Set(
        data.map(
          (item) =>
            `${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}`
        )
      )
    );

    const visitorsPerDay = uniqueDates.map((date) => {
      const visitorsOnDate = data.filter(
        (item) =>
          `${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}` ===
          date
      );
      return visitorsOnDate.reduce(
        (total, item) => total + item.adults + item.children + item.babies,
        0
      );
    });

    setChartData({
      options: {
        chart: {
          id: "apexchart-timeseries-example",
        },
        xaxis: {
          categories: uniqueDates,
        },
        title: {
          text: title,
        },
      },
      series: [
        {
          name: "Number of Visitors",
          data: visitorsPerDay,
        },
      ],
    });
  }, [data]);

  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="line"
      width='100%'
      height={320}
    />
  );
};

export default TimeSeriesChart;
