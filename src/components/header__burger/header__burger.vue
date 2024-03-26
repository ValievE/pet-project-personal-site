<template>
  <button
    class="header__burger button header__text"
    @click="(StatusActive = 1), scrollLock(true)"
  >
    ...
  </button>
  <div
    :class="{
      'header__burgerMenu header__burgerMenu_active': StatusActive === 1,
      'header__burgerMenu header__burgerMenu_inactive': StatusActive === 0,
    }"
  >
    <button
      class="button burgerMenu__itemBack"
      @click="(StatusActive = 0), scrollLock(false)"
    >
      X
    </button>
    <div class="burgerMenu__buttons">
      <button
        class="burgerMenu__item"
        @click="
          $emit('my-event(section1)'), (StatusActive = 0), scrollLock(false)
        "
      >
        Home
      </button>
      <button
        class="burgerMenu__item"
        @click="
          $emit('my-event', 'section2'), (StatusActive = 0), scrollLock(false)
        "
      >
        Services
      </button>
      <button
        class="burgerMenu__item"
        @click="
          $emit('my-event', 'section3'), (StatusActive = 0), scrollLock(false)
        "
      >
        Contacts
      </button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      StatusActive: 0,
      overflow: "visible",
    };
  },
  // props: ["scrollToEl"],
  methods: {
    scrollLock: function (prop) {
      prop === true
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "visible");
    },
  },
};
</script>

<style>
@import url(./header__burger.css);
</style>
