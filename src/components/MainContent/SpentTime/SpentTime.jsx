import "./SpentTime.css";

const SpentTime = (props) => {
  const totalTime = props.spentTimeData?.map((dt) => dt.read_time);  
  const total = totalTime.reduce((acc, curr) => acc + curr, 0);

  return (
    <>
      <h2 className="spent_time_text">Spent Time On Read : {total} min</h2>
    </>
  );
};

export default SpentTime;
