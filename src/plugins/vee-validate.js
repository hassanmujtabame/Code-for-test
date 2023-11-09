import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend,localize } from 'vee-validate';

import * as rules from 'vee-validate/dist/rules';

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});


import en from 'vee-validate/dist/locale/en.json';
import ar from 'vee-validate/dist/locale/ar.json';

// Install English and Arabic locales.
localize({
  en,
  ar
});


// Activate the Arabic locale.


// Add a rule.
extend('secret', {
  validate: value => value === 'example',
  message: 'This is not the magic word'
});
// phone
// Define a regular expression for a phone number
const MOBILEREG = /^((1[3578][0-9])+\\d{8})$/;

// Create a custom rule called phone
extend("tphone", (rule) => {
  // Get the current value of the field
  const value = rule.value;
  // Check if the value matches the regex
  const isValid = MOBILEREG.test(value);
  // Return an object with two properties: valid and message
  return {
    valid: isValid,
    message: () => `${value} غير صالح`,
  };
});


// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
//export default function({app,store,$i18n}){
  //console.log($i18n)
  localize('ar');
  localize('en');
  //localize(store.getters['lang/locale']);

  // Activate the Arabic locale.
  //localize(store.getters['lang/locale']);

//}
