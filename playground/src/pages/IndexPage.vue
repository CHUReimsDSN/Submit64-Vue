<script setup lang="ts">
import { Submit64Form, type TSubmit64FormProps } from 'submit64-vue';
import { Submit64Api } from '../api/submit64.api';

const formBindings: TSubmit64FormProps['formBindings'] = {
  fields: {
    string: {
      color: 'amber',
      prefix: 'user'
    }
  }
};
</script>

<template>
  <q-page class="row items-center justify-evenly">
    <Submit64Form resourceName="Article" :resourceId="1" :getMetadataAndData="Submit64Api.getMetadataAndResource"
      :getAssociationData="Submit64Api.getAssociationData" :getSubmitFormData="Submit64Api.getSubmitFormData" :formBindings="formBindings" />
  </q-page>
</template>
