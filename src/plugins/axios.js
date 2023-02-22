"use strict";

import Vue from 'vue';
import axios from "axios";
import Cookies from 'js-cookie';
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
let baseApiAddress = process.env.NODE_ENV === 'production' ? "https://test.riadiat.sa/api/v1" : 'https://test.riadiat.sa/api/v1'
let config = {
  baseURL: process.env.baseURL || process.env.apiUrl || baseApiAddress
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    console.mylog('axios config',config)
    if (window.store == undefined) {
      console.log('store is not defined')
  } else
  if (config.baseURL === baseApiAddress && !config.headers.Authorization) {
      config.headers['x-localization'] = Cookies.get('i18n_lang')
      config.headers['Accept'] = 'application/json'
      let url = baseApiAddress+'/academy';
      if(config.url.startsWith(url) || config.url.startsWith('academy')){
        //console.mylog('is url ',config.url)
        const role = window.store.getters['auth/academyRole'];
        //console.mylog('is role ',role)
        config.headers['academy-role'] = role
      }
      const token = window.store.getters['auth/token'];

      if (token) {
          config.headers.Authorization = `Bearer ${token}`;
      }
  }
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
