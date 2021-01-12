// import { SUPPORTED_ELEMENT_TYPE } from '../constants';
import CardNumber from './CardNumber.vue';
import CardExpiry from './CardExpiry.vue';
export default {
  install (Vue, options) {
    const {
      pk,
      stripeAccount,
      apiVersion,
      locale,
      elementsOptions,
    } = options;
    const stripe = window.Stripe(pk, { stripeAccount, apiVersion, locale });
    const elements = stripe.elements(elementsOptions);
    Vue.prototype.$stripe = stripe;
    Vue.prototype.$stripeElements = elements;
    if (options.install.cardNumber) {
      Vue.component(options.install.cardNumber.componentName, CardNumber);
    }
    if (options.install.cardExpiry) {
      Vue.component(options.install.cardExpiry.componentName, CardExpiry);
    }
  },
};
