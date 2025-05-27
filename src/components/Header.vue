<template>
    <nav class="w-full bg-[#4d148c] h-[64px] flex items-center justify-between px-4" style="font-family: 'FedExSans', Arial, sans-serif;">
      <!-- Logo FedEx -->
      <div class="flex items-center">
        <slot name="logo">
          <img
            src="https://www.fedex.com/content/dam/fedex-com/logos/logo.png"
            alt="FedEx"
            class="h-[25px] w-auto"
            draggable="false"
          />
        </slot>
      </div>
      <!-- Hamburger menu -->
      <button class="flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  </template>
  
  <script setup>
  // Rien à ajouter ici
  </script>
  
  <style scoped>
  /* Si tu as la police FedExSans, importe-la, sinon Arial fait le job */
  @font-face {
    font-family: 'FedExSans';
    src: local('FedExSans'), url('/fonts/FedExSans.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  /* Par défaut, Tailwind prend Arial sinon */
  </style>
  