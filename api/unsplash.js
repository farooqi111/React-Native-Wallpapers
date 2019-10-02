import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID ad6dd12964da13d17bad729eb865edb6d6b68a54f571a4ee36299068cf7ad70c"
  }
});
