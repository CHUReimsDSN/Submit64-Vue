<script setup lang="ts">
import type { TSubmit64FormSlotPropsSegment } from '../../../models';

// props
const propsComponent = defineProps<TSubmit64FormSlotPropsSegment>()
</script>

<template>
    <div class="flex column">
      <div
        v-for="(errorList, errorKey) in propsComponent.formApi.refs.orphanErrors.value"
        :key="errorKey"
        class="q-field--error q-field__bottom text-negative"
      >
        {{ errorKey }} : {{ errorList.join(",") }}
      </div>
    </div>
</template>
