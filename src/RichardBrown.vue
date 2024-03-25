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
        <li @click="scrollToEl('section1')" class="header__text">Home</li>
        <li @click="scrollToEl('section2')" class="header__text">Services</li>
        <li @click="scrollToEl('section3')" class="header__text">Contacts</li>
      </ul>
      <Header__Burger />
    </header>
    <div ref="section1" class="section sec1">
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
          <button
            @click="scrollToEl('section3')"
            class="button button__general__textBlock"
          >
            Contact me
          </button>
        </div>
      </div>

      <div class="general__section__images">
        <img class="general__section-img" src="./assets/general/image1.png" />
        <img class="general__section-img" src="./assets/general/image2.png" />
      </div>
    </div>
    <div ref="section2" class="section sec2"><Section2 /></div>
    <div ref="section3" class="section sec3">
      <div class="section col sec3__col mediaLinks">
        <h2 class="title_Medium">Let`s make it</h2>
        <div class="contacts">
          <div class="contact">
            <p class="contact__title">Phone</p>
            <a class="contact__link" href="tel:+34421993901">+34 421 993-901</a>
          </div>
          <div class="contact">
            <p class="contact__title">Email</p>
            <a class="contact__link" href="mailto:valievem@mail.ru"
              >mail@rbrown.com</a
            >
          </div>
          <div class="contact">
            <p class="contact__title">Social</p>
            <div class="mediaLinks__button"><mediaLinks__button /></div>
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
          src="./assets/sec3/aboutMe/aboutMeImg.png"
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
import Header__Burger from "./components/header__burger/header__burger.vue";
import mediaLinks__button from "./components/section3/mediaLinks/mediaLinks__button.vue";

export default {
  components: { Section2, Header__Burger, mediaLinks__button },
  methods: {
    scrollToEl: function (section_name) {
      eval(`this.$refs.${section_name}.scrollIntoView({ behavior: "smooth" })`);
    },
  },
};
</script>
