<template>
    <div>
      <!-- Détails livraison -->
      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-8">
        <div>
          <div class="uppercase text-xs font-bold text-gray-600 mb-1 tracking-wider">Nouvelle date de livraison</div>
          <div class="text-3xl font-medium text-gray-800 mb-1">{{ nextDayName }}</div>
          <div class="text-base text-gray-800">{{ nextDayDate }} avant 20h00</div>
          <div class="text-xs text-gray-500 italic mb-1">Initialement prévu : {{ todayName }}, {{ todayDate }}</div>
          <div class="text-xs text-red-600 font-semibold mt-1">
            <span class="block">⚠️ La livraison a été retardée en raison d’une adresse de livraison incorrecte.</span>
            <span class="block">Merci de mettre à jour vos informations de livraison pour recevoir votre colis.</span>
          </div>
          <div class="mt-2">
            <span class="bg-yellow-400 rounded text-xs px-2 py-1 font-semibold text-gray-800">RETARDÉ</span>
          </div>
        </div>
  
        <!-- Statut livraison, action requise, tracking -->
        <div class="mt-6 md:mt-0">
          <div class="mb-3">
            <div class="uppercase text-xs font-bold text-gray-600 mb-0.5 tracking-wider">Statut de livraison</div>
            <div class="flex items-center text-base text-gray-800 font-medium">
              Retard
              <svg class="w-5 h-5 text-red-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="10"/>
                <text x="50%" y="56%" text-anchor="middle" fill="#fff" font-size="12" font-family="Arial" dy=".3em">!</text>
              </svg>
            </div>
          </div>
          <div class="mb-3">
            <div class="uppercase text-xs font-bold text-gray-600 mb-0.5 tracking-wider">Action requise</div>
            <div class="flex items-center text-base text-gray-800 font-medium">
              Mise à jour de l’adresse requise
              <svg class="w-4 h-4 text-blue-400 ml-1" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="9" stroke-width="2" />
                <text x="50%" y="54%" text-anchor="middle" fill="#1d4ed8" font-size="12" font-family="Arial" dy=".3em">?</text>
              </svg>
            </div>
          </div>
          <div class="mb-3">
            <div class="uppercase text-xs font-bold text-gray-600 mb-0.5 tracking-wider">N° de suivi</div>
            <div class="flex items-center text-base text-gray-800 font-medium space-x-2">
              <span>XXXXXXXXXXXX</span>
             
            </div>
          </div>
        </div>
      </div>
  
      <!-- Alertes -->
      <div class="mt-6">
        <div class="flex items-center space-x-2 mb-2">
          <span class="text-red-500">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <span class="text-sm text-gray-700">Alertes (1)</span>
        </div>
        <div class="bg-gray-100 border-l-4 border-red-500 px-4 py-2 mb-2 rounded">
          <div class="flex items-start space-x-2">
            <span class="text-red-500 pt-1">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke-width="2" />
                <text x="12" y="16" text-anchor="middle" fill="#ef4444" font-size="16" font-family="Arial" dy="-.3em">!</text>
              </svg>
            </span>
            <span class="text-xs text-gray-700">
              Adresse de livraison incorrecte : merci de <b>mettre à jour vos informations</b> pour permettre une nouvelle tentative de livraison dès demain ({{ nextDayDate }}).
            </span>
          </div>
        </div>
      </div>
  
      <!-- Bouton pour maj adresse -->
      <div class="mt-6">
        <router-link
          to="/info"
          class="w-full flex justify-center items-center px-3 py-3 bg-[#4d148c] text-white text-base font-semibold rounded shadow transition"
        >
          Mettre à jour mes informations de livraison
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  function getFrenchDay(date) {
    return date.toLocaleDateString('fr-FR', { weekday: 'long' }).replace(/^./, s => s.toUpperCase())
  }
  function getFrenchDate(date) {
    return date.toLocaleDateString('fr-FR')
  }
  
  // Aujourd'hui
  const today = new Date()
  const todayName = getFrenchDay(today)
  const todayDate = getFrenchDate(today)
  
  // Demain
  const tomorrow = new Date()
  tomorrow.setDate(today.getDate() + 1)
  const nextDayName = getFrenchDay(tomorrow)
  const nextDayDate = getFrenchDate(tomorrow)
  </script>
  