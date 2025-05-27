<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue';
import { useRoute, useRouter } from 'vue-router';
import Chargement from './components/Chargement.vue';
import { ref } from 'vue';

const route = useRoute()
const isLoading = ref(false)
const router = useRouter()

router.beforeEach((to, from, next) => {
  isLoading.value = true
  next()
})

router.afterEach(() => {
  setTimeout(() => { isLoading.value = false }, 2000)
})

</script>

<template>
  <Header v-if="!route.meta.hideLayout"/>
  <Chargement class="h-screen" v-if="isLoading && !route.meta.hideLayout" />
  <RouterView v-else />
  <Footer v-if="!route.meta.hideLayout"/>
</template>

<style scoped>

</style>
