import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import Hoteldata from './data/hotel.json';
import SparklineChart from './test';
import Charttest from './test1';
import TimeSeriesChart from './components/TimeChart';
import CountryChart from './components/CountryChart';

interface VisitorData {
  arrival_date_year: number;
  arrival_date_month: string;
  arrival_date_day_of_month: number;
  adults: number;
  children: number;
  babies: number;
  country: string;
}

const App: React.FC = () => {
  const [timeSeriesChartData, setTimeSeriesChartData] = useState<{
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

  const [countryChartData, setCountryChartData] = useState<{
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
    const data: VisitorData[] = Hoteldata;

    // Time Series Chart Data
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

    setTimeSeriesChartData({
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

    // Country Chart Data
    const uniqueCountries = Array.from(new Set(data.map((item) => item.country)));

    const visitorsPerCountry = uniqueCountries.map((country) => {
      const visitorsInCountry = data.filter((item) => item.country === country);
      return visitorsInCountry.reduce(
        (total, item) => total + item.adults + item.children + item.babies,
        0
      );
    });

    setCountryChartData({
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
  }, []);

  return (
    <div>
      <TimeSeriesChart data={Hoteldata} />
      <CountryChart data={Hoteldata} />
      <SparklineChart data={Hoteldata} title="Total Visitors Per Day" />
      <SparklineChart data={Hoteldata} title="Total Visitors Per Day" />
    </div>
  );
};

export default App;