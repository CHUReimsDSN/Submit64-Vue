<script setup lang="ts">
import { Submit64Form } from 'submit64-vue';
import { Submit64Api } from '../api/submit64.api';
</script>

<template>
  TODO
  <Submit64Form
    ref="formRef"
    resourceName="Article"
    :resourceId="1"
    :getMetadataAndData="Submit64Api.getMetadataAndResource"
    :getAssociationData="Submit64Api.getAssociationData"
    :getSubmitFormData="Submit64Api.getSubmitFormData"
  />
</template>
