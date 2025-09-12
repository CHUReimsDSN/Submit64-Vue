<script setup lang="ts">
import { TSubmit64FieldProps } from '../models';

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// consts
const formFactory = propsComponent.wrapper.injectForm.getFormFactoryInstance();
const formSetting = formFactory.formSettings;
const styleConfig = formFactory.formStyleConfig;
const lazyRules = formSetting.rulesBehaviour === "lazy";


</script>

<template>
TODO json edit ?
</template>
