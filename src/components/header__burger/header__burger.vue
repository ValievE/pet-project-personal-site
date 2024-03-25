<template>
  <button class="header__burger button header__text" @click="StatusActive = 1">
    ...
  </button>
  <div
    :class="{
      'header__burgerMenu header__burgerMenu_active': StatusActive === 1,
      'header__burgerMenu header__burgerMenu_inactive': StatusActive === 0,
    }"
  >
    <button class="button burgerMenu__itemBack" @click="StatusActive = 0">
      X
    </button>
    <div class="burgerMenu__buttons">
      <button class="burgerMenu__item">Home</button>
      <button class="burgerMenu__item">Services</button>
      <button class="burgerMenu__item">Contacts</button>
    </div>
  </div>
</template>

<script>
// import Section2__Card from "./section2-card/section2-card.vue";
export default {
  components: {},
  data: function () {
    return {
      StatusActive: 0,
    };
  },
  props: {},
  methods: {},
};
</script>

<style>
@import url(./header__burger.css);
</style>
