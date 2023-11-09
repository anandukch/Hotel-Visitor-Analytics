import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { ChartProps } from "../utils/type";

const SparklineChart: React.FC<ChartProps> = ({ data, title, type }) => {
  const [sparklineData, setSparklineData] = useState<{
    options: {
      chart: {
        id: string;
        sparkline: {
          enabled: boolean;
        };
      };
      title: {
        text: string;
      };
    };
    series: {
      data: number[];
    }[];
  }>({
    options: {
      chart: {
        id: `${title.toLowerCase().replace(" ", "-")}-sparkline`,
        sparkline: {
          enabled: true,
        },
      },
      title: {
        text: title,
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

      return type == "adults"
        ? visitorsOnDate.reduce((total, item) => total + item.adults, 0)
        : visitorsOnDate.reduce((total, item) => total + item.children, 0);
    });

    setSparklineData((prevState) => ({
      ...prevState,
      series: [
        {
          data: totalVisitorsPerDay,
        },
      ],
    }));
  }, [data, title]);

  return (
    <Chart
      options={sparklineData.options}
      series={sparklineData.series}
      type="line"
      width='100%'
      height={160}
    />
  );
};

export default SparklineChart;
