<template lang="pug">
  div
    div#card-expiry-mount-point
</template>

<script>
import { DEFAULT_ELEMENT_STYLE } from '../constants';
export default {
  props: {
    classes: {
      type: Object,
      default: () => ({}),
    },
    elementStyle: {
      type: Object,
      default: () => (DEFAULT_ELEMENT_STYLE),
    },
    placeholder: {
      type: String,
    },
    disabled: Boolean,
  },
  data () {
    return {
      loading: false,
      cardExpiry: null,
      card: null,
    };
  },
  mounted () {
    console.warn('this.$stripeElements', this.$stripeElements);
    const createOptions = {
      classes: this.classes,
      style: this.elementStyle,
      placeholder: this.placeholder,
      disabled: this.disabled,
    };

    this.cardExpiry = this.$stripeElements.create('cardExpiry', createOptions);
    this.cardExpiry.mount('#card-expiry-mount-point');

    this.cardExpiry.on('change', this.change);
    this.cardExpiry.on('ready', this.ready);
    this.cardExpiry.on('focus', this.focus);
    this.cardExpiry.on('blur', this.blur);
    this.cardExpiry.on('escape', this.escape);
    this.cardExpiry.on('click', this.click);
  },
  methods: {
    change (e) {
      this.$emit('element-change', e);
    },
    ready (e) {
      this.$emit('element-ready', e);
    },
    focus (e) {
      this.$emit('element-focus', e);
    },
    blur (e) {
      this.$emit('element-blur', e);
    },
    escape (e) {
      this.$emit('element-escape', e);
    },
    click (e) {
      this.$emit('element-click', e);
    },
  },
};
</script>
