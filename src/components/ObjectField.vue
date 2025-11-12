<script setup lang="ts">
import { TSubmit64FieldProps } from '../models';

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// consts
const formFactory = propsComponent.functionsProvider.getFormFactoryInstance();
const formSetting = formFactory.formSettings;
const styleConfig = formFactory.formStyle;
const lazyRules = formSetting.rulesBehaviour === "lazy";


</script>

<template>
TODO json edit ?
</template>
