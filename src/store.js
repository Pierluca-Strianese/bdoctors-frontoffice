import { reactive } from "vue";


export const store = reactive({

  baseUrl: "http://localhost:8000/",
  search: new URLSearchParams(window.location.search).get('q'),

});

