import { HotelDataType } from "./type";

export const filterData=(data:HotelDataType[])=>{
    const uniqueDates = Array.from(
        new Set(
          data.map(
            (item) =>
              `${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}`
          )
        )
      );
  
      const visitors= uniqueDates.map((date) => {
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
      return {uniqueDates,visitors}
}