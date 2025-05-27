<template>
  <div class="flex flex-col items-center justify-center w-full h-full py-12">
    <div class="relative flex items-center justify-center">
      <!-- Cercle violet -->
      <span
        class="absolute animate-spin-slow rounded-full border-4 border-[#4d148c] border-t-transparent h-14 w-14"
        style="animation-duration: 1.2s;"
      ></span>
      <!-- Cercle orange (décalé, plus petit) -->
      <span
        class="absolute animate-spin rounded-full border-4 border-[#ff6600] border-b-transparent h-10 w-10"
        style="animation-duration: 0.9s;"
      ></span>
      <!-- Point central -->
      <span class="block h-5 w-5 bg-[#4d148c] rounded-full shadow"></span>
    </div>
    <div class="mt-6 text-[#4d148c] font-bold text-xl tracking-tight font-sans">
      Chargement...
    </div>
  </div>
</template>

<script setup>
// rien à déclarer ici
</script>

<style scoped>
@keyframes spin-slow {
  to { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spin-slow 1.2s linear infinite;
}
</style>
