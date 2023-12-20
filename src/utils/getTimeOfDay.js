const getTimeOfDay = (date) => {
  const hour = date.getHours();
  if (hour >= 6 && hour < 12) {
    return "morning";
  } else if (hour >= 12 && hour < 18) {
    return "afternoon";
  } else {
    return "night";
  }
};

export default getTimeOfDay;
