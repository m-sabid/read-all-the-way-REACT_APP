import { useState } from "react";
import "./SpentTime.css";

const SpentTime = () => {
  const [spentTime, setSpentTime] = useState(0);

  

  return (
    <>
      <h2 className="spent_time_text">Spent Time On Read : {spentTime} min</h2>
    </>
  );
};

export default SpentTime;
