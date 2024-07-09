<template>
  <div class="wrapper">
    <header class="header">
      <p class="header__logo">Richard Brown</p>
      <div class="header__location">
        <img class="header__location-icon" src="/img/icons/point_icon.svg" alt="location" />
        <p class="header__text">Barcelona</p>
      </div>
      <button class="burger-menu" @click="openBurger">|||</button>
      <teleport to="body" :disabled="!isBurgerMenuOpened">
        <nav
          class="menu"
          :class="{
            menu_opened: isBurgerMenuOpened
          }"
          @click.self="openBurger"
        >
          <ul class="menu__list">
            <li class="menu__text" @click="useScrtollTo('wrapper'), openBurger()">Home</li>
            <li class="menu__text" @click="useScrtollTo('work-fields'), openBurger()">Services</li>
            <li class="menu__text" @click="useScrtollTo('personal'), openBurger()">Contacts</li>
          </ul>
        </nav>
      </teleport>
    </header>
    <router-view />
    <footer class="footer">
      <p class="footer__text">Richard <br />Brown</p>
      <p class="footer__text">2024 ⓒ все права незащищены</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import useScrtollTo from '@/assets/scripts/scrollTo'
import { ref } from 'vue'

const isBurgerMenuOpened = ref<boolean>(false)

const openBurger = () => {
  isBurgerMenuOpened.value = !isBurgerMenuOpened.value
  if (isBurgerMenuOpened.value) {
    document.body.style.overflow = 'hidden'
    return
  }
  document.body.style.overflow = 'visible'
}
</script>

<style src="./HomeView.css" scoped />
