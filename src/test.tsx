import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

interface SparklineChartProps {
  data: {
    arrival_date_year: number;
    arrival_date_month: string;
    arrival_date_day_of_month: number;
    adults: number;
    children: number;
    babies: number;
    country: string;
  }[];
  title: string;
}

const SparklineChart: React.FC<SparklineChartProps> = ({ data, title }) => {
  const [sparklineData, setSparklineData] = useState<{
    options: {
      chart: {
        id: string;
        sparkline: {
          enabled: boolean;
        };
      };
    };
    series: {
      data: number[];
    }[];
  }>({
    options: {
      chart: {
        id: `${title.toLowerCase().replace(' ', '-')}-sparkline`,
        sparkline: {
          enabled: true,
        },
      },
    },
    series: [
      {
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

    const totalVisitorsPerDay = uniqueDates.map((date) => {
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

    setSparklineData({
      options: {
        chart: {
          id: `${title.toLowerCase().replace(' ', '-')}-sparkline`,
          sparkline: {
            enabled: true,
          },
        },
      },
      series: [
        {
          data: totalVisitorsPerDay,
        },
      ],
    });
  }, [data, title]);

  return (
    <div>
      <h3>{title}</h3>
      <Chart options={sparklineData.options} series={sparklineData.series} type="line" width={200} height={80} />
    </div>
  );
};

export default SparklineChart;