<script setup lang="ts">
import { TSubmit64FieldWrapperResetProps } from "../models";

// props
const propsComponent = defineProps<TSubmit64FieldWrapperResetProps>();
</script>

<template>
  <q-icon name="reset" class="cursor-pointer" @click="propsComponent.reset()" />
</template>
