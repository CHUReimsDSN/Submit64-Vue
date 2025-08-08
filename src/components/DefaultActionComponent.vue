<script setup lang="ts">
import { QBtn } from 'quasar';
import type { TSubmit64ActionFormProps } from '../models';
// props
const propsComponent = defineProps<TSubmit64ActionFormProps>();
</script>

<template>
  <div class="flex row items-center no-wrap">
    <q-btn
      label="Enregistrer"
      :loading="propsComponent.isLoadingSubmit"
      @click="propsComponent.submit"
    />
    <q-btn
      v-if="propsComponent.reset"
      :loading="propsComponent.isLoadingSubmit"
      label="Réinitialiser"
      @click="propsComponent.reset"
    />
    <q-btn
      v-if="propsComponent.clear"
      :loading="propsComponent.isLoadingSubmit"
      label="Vider"
      @click="propsComponent.clear"
    />
  </div>
</template>
