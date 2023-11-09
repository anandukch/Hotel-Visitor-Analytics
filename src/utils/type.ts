export type HotelDataType = {
  arrival_date_year: number;
  arrival_date_month: string;
  arrival_date_day_of_month: number;
  adults: number;
  children: number;
  babies: number;
  country: string;
};

export type ChartProps = {
  data: HotelDataType[];
  title: string;
  type?: string;
};

export type ChartOptions = {
    options: {
        chart: {
          id: string;
        };
        xaxis: {
          categories: string[];
        };
        title: {
          text: string;
        };
        dataLabels?: {
          style: {
            colors: string[];
          };
        };
      };
      series: {
        name: string;
        data: number[];
      }[];
};
