import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { HotelDataType } from '../utils/type';

interface TimeSeriesChartProps {
  data:HotelDataType[];
}

const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({ data }) => {
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
        id: 'apexchart-timeseries-example',
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
          id: 'apexchart-timeseries-example',
        },
        xaxis: {
          categories: uniqueDates,
        },
      },
      series: [
        {
          name: 'Number of Visitors',
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
      width={500}
      height={320}
    />
  );
};

export default TimeSeriesChart;