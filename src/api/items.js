import itemList from "./mockData/itemList.json";

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, time);
  });
};

export default {
  fetchItems() {
    return fetch(itemList, 1000); // wait 1s before returning posts
  },
};
