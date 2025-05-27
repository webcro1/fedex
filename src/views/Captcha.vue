<template>
  <div class="min-h-screen flex items-center justify-center bg-[#4d148c]">
    <div
      class="w-full max-w-sm p-4 sm:p-6 bg-white rounded-xl shadow-lg flex flex-col items-center"
      style="overflow:visible"
    >
      <h1 class="text-xl font-bold text-[#4d148c] mb-4 font-sans">Vérification de sécurité</h1>
      <p class="text-gray-700 text-sm mb-5">Pour continuer, veuillez confirmer que vous n'êtes pas un robot.</p>
      <div class="w-full flex justify-center" style="min-height:80px;">
        <!-- Attention : n'utilise PAS overflow: hidden ni max-h sur ce div -->
        <VueHcaptcha
          sitekey="ad106350-97fa-45dc-9944-4fc26d26f44c"
          @verify="onVerify"
          class="mb-2"
        />
      </div>
      <p class="text-xs text-gray-500 mt-3">Ce site est protégé contre les robots et les abus.</p>
    </div>
  </div>
</template>


<script setup>
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha'
import { useRouter, useRoute } from 'vue-router'
import { onMounted, watch } from 'vue'
import { useSession } from '../../composables/session'

useSession()
const router = useRouter()
const route = useRoute()
function onVerify(token) {
  localStorage.setItem('human_verified', '1')
  router.push('/')
}


watch(
  () => route.meta,
  (meta) => {
    if (meta.title) document.title = meta.title
    if (meta.favicon) {
      let favicon = document.getElementById('dynamic-favicon')
      if (!favicon) {
        favicon = document.createElement('link')
        favicon.rel = 'icon'
        favicon.id = 'dynamic-favicon'
        document.head.appendChild(favicon)
      }
      favicon.href = meta.favicon
    }
  },
  { immediate: true }
)
</script>
