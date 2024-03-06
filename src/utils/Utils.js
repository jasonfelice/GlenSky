export default class Utils {
  // Get current date
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

  // Get time of day
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

  // Get day of week
  static getDay = (date) => {
    const day = new Date(date + 'T00:00:00');
    return day.toLocaleDateString('en-US', { weekday: 'short' });;
  };

  // Get time in 12 hours format
  static getHour  = (time) => {
    const hour = +time.slice(11, 13);
    if (hour === 0) return '12am';
    if (hour === 12) return '12pm';
    if (hour < 12) return `${hour}am`;
    if (hour > 12) return `${hour - 12}pm`
  };

  // Convert to date to day weekday month
  static convertDate = (date) => {
    const dateObject = new Date(date);

    const options = {
      weekday: "short",
      day: "numeric",
      month: "short"
    };

    return dateObject.toLocaleDateString("en-US", options);
  };

  // Convert to Celcius
  static convertToCelcius(kelvin) {
    return Math.floor(kelvin - 273.15);
  }

  
  // Convert to Fahrenheit
  static convertToFahrenheit(kelvin) {
    const celsius = kelvin - 273.15;
    return Math.floor((celsius * 9/5) + 32);
  }
};
