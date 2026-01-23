---
title: Création de masse
---

# Exemple de composant d'action pour une création de masse :

```vue
<script setup lang="ts">
import { QBtn, QPopupEdit, QInput } from "quasar";
import type { TSubmit64ActionFormProps } from "submit64-vue";
import { ref } from "vue";

const propsComponent = defineProps<TSubmit64ActionFormProps>();
const bulkCountInput = ref(5);
</script>

<template>
  <div class="flex column">
    <div class="flex row items-center no-wrap q-pt-sm q-gutter-x-sm">
      <q-btn
        v-if="
          propsComponent.formApi.getMode() === 'create' &&
          propsComponent.formApi.form.allowBulk
        "
        label="Création de masse"
        :loading="propsComponent.isLoadingSubmit"
      >
        <q-popup-edit
          v-if="!propsComponent.isLoadingSubmit"
          v-model="bulkCountInput"
          title="Nombre"
        >
          <div class="flex row no-wrap items-center">
            <q-input v-model="bulkCountInput" dense autofocus type="number" />
            <q-btn
              label="Ok"
              @click="propsComponent.formApi.submitBulk(bulkCountInput)"
            />
          </div>
        </q-popup-edit>
      </q-btn>
    </div>
  </div>
</template>
```
