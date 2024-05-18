"use strict";

import Vue from "vue";
import axios from "axios";
import Cookies from "js-cookie";
// Full config:  https://github.com/axios/axios#request-config
axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || "";
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
let baseApiAddress =
  process.env.NODE_ENV === "production"
    ? process.env.VUE_APP_BASE_API
    : process.env.VUE_APP_BASE_API;
let config = {
  baseURL: process.env.VUE_APP_BASE_API || baseApiAddress,
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    //console.mylog('axios config',config)
    if (window.store == undefined) {
      console.log("store is not defined");
    } else if (
      config.baseURL === baseApiAddress &&
      !config.headers.Authorization
    ) {
      config.headers["x-localization"] = Cookies.get("i18n_lang");
      config.headers["Accept"] = "application/json";
      let urlAcademy = baseApiAddress + "/academy";
      if (
        config.url.startsWith(urlAcademy) ||
        config.url.startsWith("academy")
      ) {
        //console.mylog('is url ',config.url)
        const role = window.store.getters["auth/academyRole"];
        //console.mylog('is role ',role)
        config.headers["Academy-Role"] = role;
      }
      let urlProvider = baseApiAddress + "/service-provider";
      if (
        config.url.startsWith(urlProvider) ||
        config.url.startsWith("service-provider")
      ) {
        //console.mylog('is url ',config.url)
        const role = window.store.getters["auth/isProvider"];
        //console.mylog('is role ',role)
        config.headers["Provider-Role"] = role === true ? "provider" : "client";
      }
      const token = window.store.getters["auth/token"];

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

// create a v2 api axios
// Create a new instance of Axios and assign it to axios_v2
const _axios_v2 = axios.create({
  // You can specify custom configuration options for axios_v2 here
  // For example:
  baseURL: process.env.VUE_APP_BASE_API_V2,
  //  timeout: 5000, // milliseconds
  // Add other configuration options as needed
});

// Add a request interceptor to axios_2
_axios_v2.interceptors.request.use(
  (config) => {
    // Add the authorization token to the request headers
    const token = window.store.getters["auth/token"];
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

Plugin.install = function (Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      },
    },
    $axios: {
      get() {
        return _axios;
      },
    },
  });

  // Assign the new instance to Vue.axios_v2
  Vue.axios_v2 = _axios_v2;

  // Assign the new instance to window.axios_v2
  window.axios_v2 = _axios_v2;

  // Define properties on Vue prototype for axios_v2
  Object.defineProperties(Vue.prototype, {
    axios_v2: {
      get() {
        return _axios_v2;
      },
    },
    $axios_v2: {
      get() {
        return _axios_v2;
      },
    },
  });
};

Vue.use(Plugin);

export default Plugin;
