class Weather_api {
  constructor() {
    this.apiKey = "B5TEVT3PJLAVZ9KVEB4J5PFKR";
    this.location = "";
    this.dateFrom = "";
    this.dateTo = "";
    this.url =
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  }

  setLocation(location) {
    this.location = location;
  }

  setDateFrom(date) {
    this.dateFrom = date;
  }

  setDateTo(date) {
    this.dateTo = date;
  }

  getLocation() {
    return this.location;
  }

  getDateFrom() {
    return this.dateFrom;
  }

  getDateTo() {
    return this.dateTo;
  }

  getApiKey() {
    return this.apiKey;
  }

  buildApiCall(locatin, date1 = "", date2 = "") {
    this.setLocation(locatin);
    this.url += this.getLocation();
    if (date1 !== "") {
      this.setDateFrom(date1);
      this.url += `/${this.getDateFrom()}`;
      if (date2 !== "") this.setDateTo(date2);
      this.url += `/${this.getDateTo()}`;
    }
    this.url += `?key=${this.getApiKey()}`;
    return this.url;
  }

  async apiCall(location, date1 = "", date2 = "") {
    this.buildApiCall(location, date1, date2);
    try {
      const apiResponse = await fetch(this.url);
      const data = await apiResponse.json();
      return data;
    } catch (error) {
      return error;
    }
  }
}

class Gif_API {
  constructor() {
    this.api_key = "1ugNy4MACp2xDcoDOC6gKJO9kNME2v25";
    this.url = "https://api.giphy.com/v1/gifs/search?api_key=";
    this.query = "";
    this.rating = "g";
    this.language = "en";
    this.userID = "";
  }

  setQuery(query) {
    return `&q=${query}`;
  }

  setRating(url, rating) {
    url += rating;
  }

  setLanguage(url, language) {
    url += language;
  }

  setUserID(url, userId) {
    url += userId;
  }

  getQuery() {
    return this.query;
  }

  getRating() {
    return this.rating;
  }

  getLanguage() {
    return this.language;
  }
  getUserID() {
    return this.userID;
  }

  getApiKey() {
    return this.api_key;
  }

  buildApiCall(query, rating = "", language = "", userID = "") {
    let urlCall = this.url;
    urlCall += `${this.getApiKey()}`;
    urlCall += this.setQuery(query);
    if (rating !== "") this.setRating(urlCall, rating);
    if (language !== "") this.setLanguage(urlCall, language);
    if (userID !== "") this.setUserID(urlCall, userID);
    return urlCall;
  }

  async apiCall(query, rating = "", language = "", userID = "") {
    const url = this.buildApiCall(query);
    try {
      const apiResponse = await fetch(url);
      return apiResponse.json();
    } catch (error) {
      return error;
    }
  }
}

class App {
  constructor() {
    this.weatherApi = new Weather_api();
    this.gifApi = new Gif_API();
  }

  async getWeather(location) {
    try {
      const weatherData = await this.weatherApi.apiCall(location);
      console.log(weatherData); // Display the fetched weather data
      return weatherData; // Optionally return the data
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return null; // Return null or handle the error as needed
    }
  }

  async getGif(query) {
    try {
      const gif = await this.gifApi.apiCall(query);
      console.log(gif);
      console.log(gif.data.length);
      return gif;
    } catch (error) {
      console.error("Error fetching Gif data:", error);
      return error;
    }
  }
}

// const app = new App();

// // app.getWeather("djelfa");

// app.getGif("snow");
