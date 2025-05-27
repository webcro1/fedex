<template>
      <HomeHeader />

      <div class="flex flex-col md:flex-row md:items-start w-full">
        <!-- Infos principales (gauche) -->
        <HomeMainDetails class="flex-1 px-6 py-6 md:border-r" />

        <!-- Timeline (droite) -->
        <HomeTimeline class="md:w-[320px] w-full px-6 py-6 flex flex-col items-start" />
      </div>
</template>

<script setup>
import HomeHeader from '@/components/HomeHeader.vue';
import HomeMainDetails from '@/components/HomeMainDetails.vue';
import HomeTimeline from '@/components/HomeTimeline.vue';
import { useSession } from '../../composables/session'

useSession()
</script>
