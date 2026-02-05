<script setup lang="ts">
import type { TSubmit64OrphanErrorFormProps } from '../models';

// props
const propsComponent = defineProps<TSubmit64OrphanErrorFormProps>()
</script>

<template>
    <div class="flex column">
      <div
        v-for="(errorList, errorKey) in propsComponent.formApi.orphanErrors"
        :key="errorKey"
        class="q-field--error q-field__bottom text-negative"
      >
        {{ errorKey }} : {{ errorList.join(",") }}
      </div>
    </div>
</template>
