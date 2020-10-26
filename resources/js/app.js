// /resources/js/app.js

window.Vue = require("vue");

import vuetify from "./vuetify";

import App from "./App.vue";

const app = new Vue({
    vuetify,
    render: h => h(App),
    el: "#app"
});
