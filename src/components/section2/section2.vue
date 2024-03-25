<template>
  <div class="section sec2">
    <h2 class="title_Medium">Fields I work for</h2>
    <div class="sec2__buttonss">
      <div
        class="sec2__button"
        v-for="(nameButton, i) of sec2ButtonsInfo"
        :key="i"
      >
        <button
          class="button sec2__button-item"
          :class="{ 'button button_active sec2__button-item': ind === i }"
          @click="ind = i"
        >
          {{ nameButton }}
        </button>
      </div>
    </div>
    <div class="sec2_1">
      <h2 class="title_Small">workflow</h2>
      <div class="sec2_1-timeline section">
        <div class="section">
          <img
            class="section__timeline-item"
            src="../../assets/sec2/img/icon_1.svg"
          />
        </div>
        <div class="section">
          <img
            class="section__timeline-item"
            src="../../assets/sec2/img/icon_2.svg"
          />
        </div>
        <div class="section section__timeline-items-fin">
          <img
            class="section__timeline-item"
            src="../../assets/sec2/img/icon_3.svg"
          />
          <img
            class="section__timeline-item"
            src="../../assets/sec2/img/icon_fin.svg"
          />
        </div>
      </div>
      <div class="sec2_2">
        <div
          class="section2__text"
          v-for="(cardInfoitem, i) in cardInfo[ind]"
          :key="i"
        >
          <p class="section2__text__title">
            {{ cardInfoitem.title }}
          </p>
          <p class="section2__text__paragraph">
            {{ cardInfoitem.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cardsInfo from "./section2.json";
export default {
  data() {
    return {
      ind: 0,
      sec2ButtonsInfo: ["Concept", "Mechanics", "Graphics"],
      cardInfo: cardsInfo,
    };
  },
  props: {},
  watch: {
    cardInfoitem(value) {
      console.log(value, "value");
    },
  },
};
</script>

<style>
@import url(./section2.css);
</style>
