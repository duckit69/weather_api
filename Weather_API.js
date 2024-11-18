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
      console.log(apiResponse);
    } catch (error) {
      console.log(error);
    }
  }
}
