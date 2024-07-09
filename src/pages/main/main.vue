<template>
  <div class="main-page">
    <section class="info">
      <h1 class="info__title">
        AAA-projects <br />
        Game-designer
      </h1>
      <div class="text-block">
        <h2 class="text-block__title">Perfect aesthetics</h2>
        <p class="text-block__text">
          Breathe life into an empty city full of 3D objects, give depth to the characters, convey
          the magnitude of emotions and feelings. Only having all this, you can understand the
          entire aesthetics of what is happening on the screen.
        </p>
        <button class="button text-block__button" @click="useScrtollTo('personal')">
          Contact me
        </button>
      </div>
      <div class="info__image" :style="{ '--bgImg': `url('/img/main/image1.png')` }"></div>
      <div class="info__image" :style="{ '--bgImg': `url('/img/main/image2.png')` }"></div>
    </section>
    <section class="work-fields">
      <h2 class="work-fields__title">Fields I work for</h2>
      <div class="work-fields__buttons">
        <button
          v-for="(button, index) in buttons"
          :key="index"
          class="button work-fields__button"
          :class="{ button_active: workflowIndex === index }"
          @click="setWorkflow(index), useScrtollTo('work-fields__buttons')"
        >
          {{ button }}
        </button>
      </div>
      <div class="workflow">
        <h3 class="workflow__title">workflow</h3>
        <div class="workflow__timeline">
          <img class="workflow__timeline-item" src="/img/fields/icon_1.svg" alt="" />
          <img class="workflow__timeline-item" src="/img/fields/icon_2.svg" alt="" />
          <div class="workflow__timeline-fin-item">
            <img class="section__timeline-item" src="/img/fields/icon_3.svg" alt="" />
            <img class="section__timeline-item" src="/img/fields/icon_fin.svg" alt="" />
          </div>
        </div>
        <article v-for="(card, index) in cards[workflowIndex]" :key="index" class="workflow-card">
          <span class="workflow-card__title">
            {{ card.title }}
          </span>
          <span class="workflow-card__text">
            {{ card.text }}
          </span>
        </article>
      </div>
    </section>
    <section class="personal">
      <div class="links">
        <h4 class="personal__title">Let`s make it</h4>
        <div v-for="(contact, index) in contacts" :key="index" class="contact">
          <h5 class="contact__title">{{ contact.title }}</h5>
          <a v-if="contact.text" :href="contact.link" class="contact__link">
            <span class="contact__text">{{ contact.text }}</span>
          </a>
          <div v-if="!contact.text" class="contact__buttons">
            <a
              v-for="(contactButton, buttonIndex) in contact.buttons"
              :key="buttonIndex"
              :href="contactButton.link"
              class="contact__button"
            >
              <img class="contact__icon" :src="contactButton.image" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div class="personal-text">
        <h5 class="personal-text__title">Hey there!</h5>
        <article class="personal-text__article">
          <p class="personal-text__paragraph">
            I started my career in game design in 2002. I took my first steps in an unknown studio,
            we released an incredible game that year, which is why I received an invitation to
            Rockstar Games. We have consolidated our success by receiving many awards for our
            efforts. I hope I can help you create a top-notch product.
          </p>
        </article>
      </div>
      <div class="personal-photo"></div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useScrtollTo from '@/assets/scripts/scrollTo'

type ContactButton = {
  link: string
  image: string
}

type Contact = {
  title: string
  text?: string
  link?: string
  buttons?: ContactButton[]
}

const workflowIndex = ref<number>(0)
const buttons = ['Concept', 'Mechanics', 'Graphics']
const cards = [
  [
    {
      title: 'Briefing',
      text: 'At this point I discover what you need and how you need it to be done'
    },
    {
      title: 'Sketches',
      text: 'I will work through ideas and create sketches to be sure we are heading at the right direction'
    },
    {
      title: 'Designing',
      text: 'From sketches to detailed game characters, mechanics, cities'
    }
  ],
  [
    {
      title: 'Briefing',
      text: 'First I discuss with you the necessary things to create the mechanics'
    },
    {
      title: 'Sketches',
      text: "I'm creating some mechanic sketches. We will select the most suitable models"
    },
    {
      title: 'Designing',
      text: 'I will refine the best mechanic models to perfection so that the mechanics work perfectly'
    }
  ],
  [
    {
      title: 'Briefing',
      text: 'During the discussion we will highlight the most important topics for work'
    },
    {
      title: 'Sketches',
      text: 'The next step is to create a lot of sketches of different styles'
    },
    {
      title: 'Designing',
      text: 'From the selected sketches the general style of the project and further movement will be formed'
    }
  ]
]
const contacts: Contact[] = [
  {
    title: 'Phone',
    text: '+34 421 993-901',
    link: 'tel:34421993901'
  },
  {
    title: 'Email',
    text: 'mail@rbrown.com',
    link: 'mailto:mail@rbrown.com'
  },
  {
    title: 'Social',
    buttons: [
      {
        image: '/img/contact-icons/instagramLogo.svg',
        link: 'https://ru.wikipedia.org/wiki/Instagram'
      },
      {
        image: '/img/contact-icons/youtubeLogo.svg',
        link: 'https://youtu.be/dQw4w9WgXcQ?si=Z0RRYewqKP3yEovL'
      }
    ]
  }
]

const setWorkflow = (index: number) => {
  workflowIndex.value = index
  return workflowIndex.value
}
</script>

<style src="./main.css" scoped></style>
