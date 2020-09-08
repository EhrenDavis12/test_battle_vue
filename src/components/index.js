import Vue from "vue";
// import items from "./items";
import items from "@/components/items";

const components = {
  ...items,
};

Object.keys(components).forEach((componentName) => {
  Vue.component(componentName, components[componentName]);
});
