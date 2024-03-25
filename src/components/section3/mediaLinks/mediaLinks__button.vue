<template>
  <div
    class="mediaLinks__buttons"
    v-for="(buttonItem, x) in dataJson"
    :key="buttonItem[x]"
  >
    <a class="mediaLinks__button" :href="dataJson[x].link"
      ><img
        class="mediaLinks__button__item"
        :src="dataJson[x].logo"
        :alt="dataJson[x].name"
        :title="dataJson[x].name"
    /></a>
  </div>
</template>

<script>
import mediaLinks__button from "./mediaLinks__button.json";

export default {
  data() {
    return {
      dataJson: mediaLinks__button,
    };
  },
};
</script>

<style>
@import url(./mediaLinks__button.css);
</style>
