import axios from "axios";

export default {
  fetchPosts() {
    return axios
      .get("https://jsonplaceholder.typicode.com/items")
      .then((response) => response.data);
  },
};
