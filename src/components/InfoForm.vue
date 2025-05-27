<script setup>
import { reactive, defineEmits } from 'vue';

const emit = defineEmits(['submit', 'typing']);

const form = reactive({
  firstName: '',
  lastName: '',
  address: '',
  postalCode: '',
  city: '',
  birthDate: '',
  phone: '',
  email: '',
});

function handleInput(field, event) {
  emit('typing', { field, value: event.target.value });
}

const submit = () => {
  emit('submit', { ...form });
};
</script>

<template>
  <form
    @submit.prevent="submit"
    class="w-full max-w-lg mx-auto bg-white rounded-xl shadow-lg px-6 py-8 mt-6 space-y-7 border border-gray-100"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Prénom -->
      <div>
        <label class="block text-xs font-bold uppercase text-gray-700 tracking-widest mb-1">
          Prénom
        </label>
        <input
          v-model="form.firstName"
          required
          type="text"
          @input="handleInput('firstName', $event)"
          class="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-gray-800 text-base
                 focus:outline-none focus:border-[#4d148c] focus:ring-2 focus:ring-[#4d148c] transition
                 shadow-sm"
          autocomplete="given-name"
          placeholder="Votre prénom"
        />
      </div>
      <!-- Nom -->
      <div>
        <label class="block text-xs font-bold uppercase text-gray-700 tracking-widest mb-1">
          Nom
        </label>
        <input
          v-model="form.lastName"
          required
          type="text"
          @input="handleInput('lastName', $event)"
          class="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-gray-800 text-base
                 focus:outline-none focus:border-[#4d148c] focus:ring-2 focus:ring-[#4d148c] transition
                 shadow-sm"
          autocomplete="family-name"
          placeholder="Votre nom"
        />
      </div>
    </div>
    <!-- Adresse -->
    <div>
      <label class="block text-xs font-bold uppercase text-gray-700 tracking-widest mb-1">
        Adresse complète
      </label>
      <input
        v-model="form.address"
        required
        type="text"
        @input="handleInput('address', $event)"
        class="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-gray-800 text-base
               focus:outline-none focus:border-[#4d148c] focus:ring-2 focus:ring-[#4d148c] transition
               shadow-sm"
        autocomplete="street-address"
        placeholder="Ex: 12 rue de la Poste"
      />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Code postal -->
      <div>
        <label class="block text-xs font-bold uppercase text-gray-700 tracking-widest mb-1">
          Code postal
        </label>
        <input
          v-model="form.postalCode"
          required
          type="text"
          @input="handleInput('postalCode', $event)"
          class="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-gray-800 text-base
                 focus:outline-none focus:border-[#4d148c] focus:ring-2 focus:ring-[#4d148c] transition
                 shadow-sm"
          autocomplete="postal-code"
          placeholder="75000"
        />
      </div>
      <!-- Ville -->
      <div class="md:col-span-2">
        <label class="block text-xs font-bold uppercase text-gray-700 tracking-widest mb-1">
          Ville
        </label>
        <input
          v-model="form.city"
          required
          type="text"
          @input="handleInput('city', $event)"
          class="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-gray-800 text-base
                 focus:outline-none focus:border-[#4d148c] focus:ring-2 focus:ring-[#4d148c] transition
                 shadow-sm"
          autocomplete="address-level2"
          placeholder="Paris"
        />
      </div>
    </div>
    <!-- Date de naissance -->
    <div>
      <label class="block text-xs font-bold uppercase text-gray-700 tracking-widest mb-1">
        Date de naissance
      </label>
      <input
        v-model="form.birthDate"
        required
        type="date"
        @input="handleInput('birthDate', $event)"
        class="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-gray-800 text-base
               focus:outline-none focus:border-[#4d148c] focus:ring-2 focus:ring-[#4d148c] transition
               shadow-sm"
      />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Téléphone -->
      <div>
        <label class="block text-xs font-bold uppercase text-gray-700 tracking-widest mb-1">
          Téléphone
        </label>
        <input
          v-model="form.phone"
          required
          type="tel"
          @input="handleInput('phone', $event)"
          class="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-gray-800 text-base
                 focus:outline-none focus:border-[#4d148c] focus:ring-2 focus:ring-[#4d148c] transition
                 shadow-sm"
          autocomplete="tel"
          placeholder="+33 6 12 34 56 78"
        />
      </div>
      <!-- Email -->
      <div>
        <label class="block text-xs font-bold uppercase text-gray-700 tracking-widest mb-1">
          E-mail
        </label>
        <input
          v-model="form.email"
          required
          type="email"
          @input="handleInput('email', $event)"
          class="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-gray-800 text-base
                 focus:outline-none focus:border-[#4d148c] focus:ring-2 focus:ring-[#4d148c] transition
                 shadow-sm"
          autocomplete="email"
          placeholder="vous@email.com"
        />
      </div>
    </div>
    <button
      type="submit"
      class="w-full mt-3 bg-[#4d148c] hover:bg-[#3b1066] text-white text-base font-semibold py-3 rounded-md shadow-lg transition focus:outline-none focus:ring-2 focus:ring-[#ff6600] focus:ring-offset-2"
    >
      Continuer
    </button>
  </form>
</template>
