<script setup lang="ts">
import { Submit64Form } from 'submit64-vue';
import { Submit64Api } from '../api/submit64.api';

// consts
const startBind = {
  name: 'star',
  size: 'sm',
};
</script>

<template>
  <Submit64Form
    resourceName="Article"
    :resourceId="1"
    :getMetadataAndData="Submit64Api.getMetadataAndResource"
    :getAssociationData="Submit64Api.getAssociationData"
    :getSubmitFormData="Submit64Api.getSubmitFormData"
  >
    <template v-slot:section-0-wrapper-before>
      <q-icon v-bind="startBind" color="orange">
        <q-tooltip> section-0-wrapper-before </q-tooltip>
      </q-icon>
    </template>

    <template v-slot:field-label-wrapper-before>
      <q-icon v-bind="startBind" color="red">
        <q-tooltip> field-label-wrapper-before </q-tooltip>
      </q-icon>
    </template>

    <template v-slot:field-label-after>
      <q-icon v-bind="startBind" color="green">
        <q-tooltip> field-label-after </q-tooltip>
      </q-icon>
    </template>

    <template v-slot:field-label-wrapper-after>
      <q-icon v-bind="startBind" color="blue">
        <q-tooltip> field-label-wrapper-after </q-tooltip>
      </q-icon>
    </template>

    <template v-slot:field-next_date-append>
      <q-icon v-bind="startBind" color="purple">
        <q-tooltip> field-next_date-append </q-tooltip>
      </q-icon>
    </template>
  </Submit64Form>
</template>
