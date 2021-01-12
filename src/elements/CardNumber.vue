<template lang="pug">
  div
    div#card-number-mount-point
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
    showIcon: {
      type: Boolean,
      default: true,
    },
    iconStyle: {
      type: String,
      default: 'default',
      validator: value => ['solid', 'default'].includes(value),
    },
  },
  data () {
    return {
      loading: false,
      cardNumber: null,
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
      showIcon: this.showIcon,
      iconStyle: this.iconStyle,
    };

    this.cardNumber = this.$stripeElements.create('cardNumber', createOptions);
    this.cardNumber.mount('#card-number-mount-point');

    this.cardNumber.on('change', this.change);
    this.cardNumber.on('ready', this.ready);
    this.cardNumber.on('focus', this.focus);
    this.cardNumber.on('blur', this.blur);
    this.cardNumber.on('escape', this.escape);
    this.cardNumber.on('click', this.click);
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
