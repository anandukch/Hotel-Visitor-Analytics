// CountryChart.tsx
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { HotelDataType } from '../utils/type';

interface CountryChartProps {
  data:HotelDataType[];
}

const CountryChart: React.FC<CountryChartProps> = ({ data }) => {
  const [chartData, setChartData] = useState<{
    options: {
      chart: {
        id: string;
      };
      xaxis: {
        categories: string[];
      };
    };
    series: {
      name: string;
      data: number[];
    }[];
  }>({
    options: {
      chart: {
        id: 'apexchart-country-example',
      },
      xaxis: {
        categories: [],
      },
    },
    series: [
      {
        name: 'Number of Visitors',
        data: [],
      },
    ],
  });

  useEffect(() => {
    const uniqueCountries = Array.from(new Set(data.map((item) => item.country)));

    const visitorsPerCountry = uniqueCountries.map((country) => {
      const visitorsInCountry = data.filter((item) => item.country === country);
      return visitorsInCountry.reduce(
        (total, item) => total + item.adults + item.children + item.babies,
        0
      );
    });

    setChartData({
      options: {
        chart: {
          id: 'apexchart-country-example',
        },
        xaxis: {
          categories: uniqueCountries,
        },
      },
      series: [
        {
          name: 'Number of Visitors',
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
      width={500}
      height={320}
    />
  );
};

export default CountryChart;
