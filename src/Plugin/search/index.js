import search from "./src/index.vue";

/* istanbul ignore next */
search.install = function(Vue) {
  Vue.component(search.name, search);
};

export default search;
