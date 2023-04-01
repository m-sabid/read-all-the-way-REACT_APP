// Use Local Storage
const addToDB = (id, spent_time) => {
  let totalTimes;

  //   Get Total Time
  const totalTime = localStorage.getItem("total-time");
  if (totalTime) {
    totalTimes = JSON.parse(totalTime);
  } else {
    totalTimes = {};
  }

  //   Add Quantity
  const quantity = totalTimes[id];
  if (quantity) {
    const newTotalTimes = parseInt(spent_time) + parseInt(quantity);
    totalTimes[id] = newTotalTimes;
  } else {
    totalTimes[id] = parseInt(spent_time);
  }
  localStorage.setItem("total-time", JSON.stringify(totalTimes));
};

export { addToDB };
