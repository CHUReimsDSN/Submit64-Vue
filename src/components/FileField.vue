<script setup lang="ts">
import { TSubmit64FieldProps } from '../models';

// props
const propsComponent = defineProps<TSubmit64FieldProps>();

// consts
const form = propsComponent.formApi.form;
const formSetting = form.formSettings;
const styleConfig = form.formStyle;
const lazyRules = formSetting.rulesBehaviour === "lazy";


</script>

<template>
TODO file
</template>
