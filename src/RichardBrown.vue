<template>
  <div class="projectBody">
    <header class="header">
      <p class="header__logo">Richard Brown</p>
      <div class="header__location">
        <img
          class="header__location-icon"
          src="./assets/main/icons/pointIcon.svg"
          alt="location"
        />
        <p class="header__text">Barcelona</p>
      </div>
      <ul class="header__menu">
        <li class="header__text">Home</li>
        <li class="header__text">Services</li>
        <li class="header__text">Contacts</li>
      </ul>
    </header>
    <div class="section sec1">
      <div class="general__section">
        <h1 class="mainTitle">AAA-projects Game-designer</h1>
        <div class="general__textBlock">
          <h2 class="general__textBlock__title">Perfect aesthetics</h2>
          <p class="general__textBlock__text">
            Breathe life into an empty city full of 3D objects, give depth to
            the characters, convey the magnitude of emotions and feelings. Only
            having all this, you can understand the entire aesthetics of what is
            happening on the screen.
          </p>
          <button class="button button__general__textBlock">Contact me</button>
        </div>
      </div>
      <div class="general__section">
        <img class="general__section-img" src="./assets/general/image1.png" />
      </div>
      <div class="general__section">
        <img class="general__section-img" src="./assets/general/image2.png" />
      </div>
    </div>
    <Section2 />
    <!-- <div class="section sec2">
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
              src="./assets/sec2/img/icon_1.svg"
            />
          </div>
          <div class="section">
            <img class="ss" src="./assets/sec2/img/icon_2.svg" />
          </div>
          <div class="section section__timeline-items-fin">
            <img
              class="section__timeline-item"
              src="./assets/sec2/img/icon_3.svg"
            />
            <img
              class="section__timeline-item"
              src="./assets/sec2/img/icon_fin.svg"
            />
          </div>
        </div>
        
        <div class="sec2_2">
          <div class="sec2_2__cardFlow">
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
          </div>
        </div>
      </div>
    </div> -->
    <div class="section sec3">
      <div class="section col sec3__col">
        <h2 class="title_Medium">Let`s make it</h2>
        <div class="contacts">
          <div class="contact">
            <p class="contact__title">Phone</p>
            <a class="contact__link">+34 421 993-901</a>
          </div>
          <div class="contact">
            <p class="contact__title">Email</p>
            <a class="contact__link">mail@rbrown.com</a>
          </div>
          <div class="contact">
            <p class="contact__title">Social</p>
            <a class="contact__link">+34 421 993-901</a>
          </div>
        </div>
      </div>
      <div class="section col sec3__col aboutMe">
        <p class="aboutMe__title">Hey there!</p>
        <p class="aboutMe__text">
          I started my career in game design in 2002. I took my first steps in
          an unknown studio, we released an incredible game that year, which is
          why I received an invitation to Rockstar Games. We have consolidated
          our success by receiving many awards for our efforts. I hope I can
          help you create a top-notch product.
        </p>
      </div>
      <div class="section col sec3__col aboutMeImg">
        <img
          class="aboutMeImg-item"
          src="./assets/aboutMe/aboutMeImg.png"
          alt="Richard Brown"
        />
      </div>
    </div>
    <footer class="footer">
      <p class="footer-section header__logo">Richard Brown</p>
      <p class="footer-section">2024 ⓒ все права защищены</p>
    </footer>
  </div>
</template>

<script>
import Section2 from "./components/section2/section2.vue";

export default {
  components: { Section2 },
};
</script>
