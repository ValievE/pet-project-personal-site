<template>
  <div class="section sec2">
    <h2 class="title_Medium">Fields I work for</h2>
    <div class="sec2__buttons">
      <button class="button button_active sec2__button">Concept</button>
      <button class="button sec2__button">Mechanics</button>
      <button class="button sec2__button">Graphics</button>
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
          <img class="ss" src="../../assets/sec2/img/icon_2.svg" />
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
        <!-- <div class="sec2_2__cardFlow">
          <div class="sec2_2__card">
            <h2 class="sec2_2__cardTitle">Briefing</h2>
            <p class="sec2_2__cardParagraph">
              At this point I discover what you need and how you need it to be
              done
            </p>
          </div>
        </div>
        <div class="sec2_2__cardFlow">
          <div class="sec2_2__card">
            <h2 class="sec2_2__cardTitle">Sketches</h2>
            <p class="sec2_2__cardParagraph">
              I will work through ideas and create sketches to be sure we are
              heading at the right direction
            </p>
          </div>
        </div>
        <div class="sec2_2__cardFlow">
          <div class="sec2_2__card">
            <h2 class="sec2_2__cardTitle">Designing</h2>
            <p class="sec2_2__cardParagraph">
              From sketches to detailed game characters, mechanics, cities
            </p>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Section2__Card from "./section2-card/section2-card.vue";
export default {
  components: { Section2__Card },
  props: {},
};
</script>

<style>
@import url(./section2.css);
</style>
