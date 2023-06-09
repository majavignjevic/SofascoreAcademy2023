import { useEffect, useState } from "react";
import { Micro } from "@/utils/fonts";

function Calendar({ date }) {
  const [today, setToday] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = currentDate.getFullYear();
    const formattedDate = `${day}.${month}.${year}`;
    setToday(formattedDate);
  }, []);

  return (
    <div>
      <Micro>{date === "today" ? "Today" : today}</Micro>
    </div>
  );
}

export default Calendar;
