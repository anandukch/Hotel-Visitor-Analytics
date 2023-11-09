import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { ChartOptions, ChartProps } from "../utils/type";

const CountryChart: React.FC<ChartProps> = ({ data, title }) => {
  const [chartData, setChartData] = useState<ChartOptions>({
    options: {
      chart: {
        id: "apexchart-country-example",
      },
      xaxis: {
        categories: [],
      },
      title: {
        text: title,
      },
      dataLabels: {
        style: {
          colors: ["rgba(0, 0, 0, 0.87)"],
        },
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
    const uniqueCountries = Array.from(
      new Set(data.map((item) => item.country))
    );

    const visitorsPerCountry = uniqueCountries.map((country) => {
      const visitorsInCountry = data.filter((item) => item.country === country);
      return visitorsInCountry.reduce(
        (total, item) => total + item.adults + item.children + item.babies,
        0
      );
    });

    setChartData({
      options: {
        ...chartData.options,
        xaxis: { ...chartData.options.xaxis, categories: uniqueCountries },
      },
      series: [
        {
          name: "Number of Visitors",
          data: visitorsPerCountry,
        },
      ],
    });
  }, [data]);

  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="bar"
      width="100%"
      height={320}
    />
  );
};

export default CountryChart;
