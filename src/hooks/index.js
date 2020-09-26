/**
 * Extract details from a given date
 * @param {Date | String | Number} date The date to be extracted the details
 * @returns {object} Date details
 */
export const useDateDetails = (date) => {
  if (!date) {
    throw new Error("Date object is required!");
  }

  const newDate = new Date(date);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octuber",
    "November",
    "December",
  ];
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const year = newDate.getUTCFullYear();
  const month = months[newDate.getUTCMonth()];
  const weekDate = newDate.getUTCDate();
  const weekDay = weekDays[newDate.getUTCDay()];

  return {
    year,
    month,
    weekDate,
    weekDay,
  };
};
