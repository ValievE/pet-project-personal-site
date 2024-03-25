<template>
  <div class="section sec2">
    <h2 class="title_Medium">Fields I work for</h2>
    <div class="sec2__buttonss">
      <div class="sec2__button" v-for="nameButton in sec2ButtonsInfo" :key="i">
        <button class="button sec2__button-item">{{ nameButton }}</button>
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
        <Section2__Card title="assa" />
      </div>
    </div>
  </div>
</template>

<script>
import Section2__Card from "./section2-card/section2-card.vue";
export default {
  components: { Section2__Card },
  data() {
    return {
      sec2ButtonsInfo: ["Concept", "Mechanics", "Graphics"],
    };
  },
  props: {},
};
</script>

<style>
@import url(./section2.css);
</style>
