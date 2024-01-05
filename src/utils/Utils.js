export default class Utils {
  static getCurrentDate = (date) => {
    const months = {
      0: 'January',
      1: 'February',
      2: 'March',
      3: 'April',
      4: 'May',
      5: 'June',
      6: 'July',
      7: 'August',
      8: 'September',
      9: 'October',
      10: 'November',
      11: 'December',
    };
    const day = date.toString().slice(0, 3);
    return `${day}, ${months[date.getMonth()]} ${date.getDate()}`;
  };

  static getTimeOfDay = (date) => {
    const hour = date.getHours();
    if (hour >= 6 && hour < 12) {
      return "morning";
    } else if (hour >= 12 && hour < 18) {
      return "afternoon";
    } else {
      return "night";
    }
  };

  static getDay = (date) => {
    const day = new Date(date + 'T00:00:00');
    return day.toLocaleDateString('en-US', { weekday: 'short' });;
  };
};
