<template>
  <div class="w-full flex flex-col">
    <div class="relative">
      <div class="absolute left-2.5 top-6 bottom-0 w-1 bg-gray-200 rounded"></div>

      <!-- Étape 1 -->
      <div class="flex items-start mb-8 relative z-10">
        <div class="flex flex-col items-center mr-3">
          <div class="w-5 h-5 bg-gray-300 rounded-full border-2 border-white"></div>
        </div>
        <div>
          <div class="uppercase text-xs font-bold text-gray-700">Expéditeur</div>
          <div class="text-xs text-gray-500 italic">Étiquette créée</div>
          <div class="text-xs text-gray-600">Colis pris en charge par FedEx</div>
        </div>
      </div>

      <!-- Étape 2 : En cours de livraison -->
      <div class="flex items-start mb-8 relative z-10">
        <div class="flex flex-col items-center mr-3">
          <div class="w-5 h-5 bg-gray-300 rounded-full border-2 border-white"></div>
        </div>
        <div>
          <div class="uppercase text-xs font-bold text-gray-700">En cours de livraison</div>
          <div class="text-xs text-gray-600">Votre colis est en transit</div>
        </div>
      </div>

      <!-- Étape 3 : Problème/Retard pendant la livraison -->
      <div class="flex items-start mb-8 relative z-10">
        <div class="flex flex-col items-center mr-3">
          <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center border-4 border-white shadow-md">
            <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" fill="#ef4444"/>
              <text x="12" y="16" text-anchor="middle" fill="#fff" font-size="18" font-family="Arial" dy="-.3em">!</text>
            </svg>
          </div>
        </div>
        <div class="bg-gray-100 rounded-lg px-2 py-1">
          <div class="uppercase text-xs font-bold text-gray-700">Problème lors de la livraison</div>
          <div class="text-xs text-gray-800 font-semibold text-red-600">Adresse incorrecte détectée</div>
          <div class="text-xs text-gray-600">La livraison n'a pas pu être effectuée. Veuillez mettre à jour vos informations.</div>
        </div>
      </div>

      <!-- Étape 4 (gris) -->
      <div class="flex items-start mb-8 relative z-10 opacity-40">
        <div class="flex flex-col items-center mr-3">
          <div class="w-5 h-5 bg-gray-300 rounded-full border-2 border-white"></div>
        </div>
        <div>
          <div class="uppercase text-xs font-bold text-gray-700">Nouvelle tentative de livraison</div>
          <div class="text-xs text-gray-600">Votre colis sera reprogrammé pour livraison dès mise à jour de l’adresse.</div>
        </div>
      </div>

      <!-- Étape 5 (gris) -->
      <div class="flex items-start mb-3 relative z-10 opacity-40">
        <div class="flex flex-col items-center mr-3">
          <div class="w-5 h-5 bg-gray-300 rounded-full border-2 border-white"></div>
        </div>
        <div>
          <div class="uppercase text-xs font-bold text-gray-700">Livraison prévue</div>
          <div class="text-xs text-gray-700">Dès que l’adresse sera corrigée, une nouvelle date de livraison vous sera communiquée.</div>
        </div>
      </div>

    </div>
  </div>
</template>
