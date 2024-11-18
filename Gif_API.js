class Gif_API {
  constructor() {
    this.api_key = "jWyTOMnVqDxp3tAIKoEwSomwiBqvz2jH";
    this.url = "api.giphy.com/v1/gifs/search";
    this.query = "";
    this.rating = "g";
    this.language = "en";
    this.userID = "";
  }

  setQuery(url, query) {
    url += query;
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
    const urlCall = this.url;
    this.setQuery(urlCall, query);
    if (rating !== "") this.setRating(urlCall, rating);
    if (language !== "") this.setLanguage(urlCall, language);
    if (userID !== "") this.setUserID(urlCall, userID);
    return urlCall;
  }

  async apiCall(query, rating = "", language = "", userID = "") {
    const url = this.buildApiCall(
      query,
      (rating = ""),
      (language = ""),
      (userID = "")
    );
    try {
      const apiResponse = await fetch(url);
      const data = apiResponse.json();
      return data;
    } catch (error) {
      return error;
    }
  }
}
