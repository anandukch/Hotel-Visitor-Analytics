export const convertDate = (date: string) => {
  let formattedDate = new Date(date);
  return `${formattedDate.getFullYear()}-${formattedDate.toLocaleString(
    "en-US",
    { month: "long" }
  )}-${formattedDate.getDate()}`;
};
