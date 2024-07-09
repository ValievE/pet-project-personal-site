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
export default {
  data() {
    return {
      dataJson: [
        {
          name: "instagram",
          logo: "/img/sec3/mediaLinks/instagramLogo.svg",
          link: "https://ru.wikipedia.org/wiki/Instagram",
        },
        {
          name: "youtube",
          logo: "/img/sec3/mediaLinks/youtubeLogo.svg",
          link: "https://youtu.be/dQw4w9WgXcQ?si=Z0RRYewqKP3yEovL",
        },
      ],
    };
  },
};
</script>

<style>
@import url(./mediaLinks__button.css);
</style>
