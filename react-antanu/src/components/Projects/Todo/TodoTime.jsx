import { useEffect, useState } from "react";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const TodoTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(intervalID);
  }, []);

  const day = daysOfWeek[dateTime.getDay()];
  const date = dateTime.toLocaleDateString();
  const time = dateTime.toLocaleTimeString();

  return (
    <p className="text-xl font-bold">
      {date} - {day} - {time}
    </p>
  );
};
